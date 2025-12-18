import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        backgroundColor: "#d1a6a6ff"
      }}>
      <div
        style={{
          padding: "30px 40px",
          textAlign: "center",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}>
        <h2>Counter</h2>
        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            cursor: "pointer"
          }}>
          + 
        </button>

        <button onClick={() => setCount(count - 1)}
          style={{
            padding: "10px 20px",
            cursor: "pointer"
          }}>
          -
        </button>
      </div>
    </div>
  );
}
