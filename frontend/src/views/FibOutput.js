// FibonacciList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useN } from "../contexts/Context";
import { calculateFib } from "../controllers/fib";

const FibOutput = () => {
  const { n } = useN();
  const [fibNumbers, setFibNumbers] = useState([]);

  useEffect(() => {
    calculateFib({ n })
      .then((res) => {
        setFibNumbers(res.data.fibNumbers);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, [n]);

  return (
    <div>
      <ul>
        {fibNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <Link to="/">
        <button>Return to Home</button>
      </Link>
    </div>
  );
};

export default FibOutput;
