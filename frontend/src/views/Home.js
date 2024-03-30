// Home.js
import React from "react";
import { Link } from "react-router-dom";
import { useN } from "../contexts/Context";

const Home = () => {
  const { n, setN } = useN();

  return (
    <div>
      <form>
        <label>
          Enter n:
          <input
            type="number"
            value={n}
            onChange={(e) => setN(e.target.value)}
            required
          />
        </label>
        <Link to="/fib-output">
          <button>Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
