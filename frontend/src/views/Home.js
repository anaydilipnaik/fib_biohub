import React, { useState } from "react";
import { calculateFib } from "../controllers/fib";

const Home = () => {
  const [n, setN] = useState("");
  const [fibNumbers, setFibNumbers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await calculateFib({ n });
      setFibNumbers(response.data.fibNumbers);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter n:
          <input
            type="number"
            value={n}
            onChange={(e) => setN(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {fibNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
