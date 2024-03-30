import React from "react";
import { Link } from "react-router-dom";
import { useN } from "../contexts/Context";

const Home = () => {
  const { n, setN } = useN();

  const inputStyles = {
    marginTop: "5px",
    marginBottom: "10px",
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "400px",
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

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div>
      <form style={formStyles}>
        <label>
          <br />
          <input
            type="number"
            value={n}
            onChange={(e) => setN(e.target.value)}
            required
            style={inputStyles}
            placeholder="Enter the count"
          />
        </label>
        <Link to="/fib-output" style={{ textDecoration: "none" }}>
          <button style={buttonStyles}>Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
