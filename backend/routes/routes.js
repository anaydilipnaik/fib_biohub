const express = require("express");
const router = express.Router();
var db = require("../dbConnection");
const { computeFibonacci } = require("../util/utils");

router.post("/fibonacci", async (req, res, next) => {
  const n = parseInt(req.body.n);

  // Check if Fibonacci numbers already exist in the database
  db.query("SELECT COUNT(*) as count FROM Fibonacci", (err, rows) => {
    if (err) {
      console.error("Error:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const existingNumbersCount = rows[0].count;

    if (existingNumbersCount >= n) {
      db.query(
        "SELECT value FROM Fibonacci WHERE `index` < ?",
        [n],
        (err, rows) => {
          if (err) {
            console.error("Error:", err);
            res.status(500).send("Internal Server Error");
            return;
          }

          const fibNumbers = rows.map((row) => row.value);
          res.json({ fibNumbers });
        }
      );
    } else {
      // Compute additional Fibonacci numbers and store them
      const fibNumbers = computeFibonacci(n);
      const values = fibNumbers
        .slice(existingNumbersCount)
        .map((value, index) => [existingNumbersCount + index, value]);

      db.query(
        "INSERT INTO Fibonacci (`index`, value) VALUES ?",
        [values],
        (err) => {
          if (err) {
            console.error("Error:", err);
            res.status(500).send("Internal Server Error");
            return;
          }
          res.json({ fibNumbers });
        }
      );
    }
  });
});

module.exports = router;
