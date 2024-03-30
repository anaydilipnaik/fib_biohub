import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useN } from "../contexts/Context";
import { calculateFib } from "../controllers/fib";

const FibOutput = () => {
  const { n } = useN();
  const [fibNumbers, setFibNumbers] = useState([]);

  const mainDivStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const paragraphStyles = {
    padding: "10px 20px",
    fontSize: "18px",
    lineHeight: "1.5",
    marginBottom: "10px",
  };

  const buttonStyles = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
  };

  useEffect(() => {
    calculateFib({ n })
      .then((res) => {
        setFibNumbers(res.data.fibNumbers);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, [n]);

  const fibList = fibNumbers.join(", ");

  return (
    <div style={mainDivStyles}>
      <p style={paragraphStyles}>{fibList}</p>
      <Link to="/">
        <button style={buttonStyles}>Return to Home</button>
      </Link>
    </div>
  );
};

export default FibOutput;
