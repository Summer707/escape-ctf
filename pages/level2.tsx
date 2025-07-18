import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Level2() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const checkFlag = () => {
    if (input.trim().toLowerCase() === "flag{connected}") {
      router.push("/level3");
    } else {
      setError("Incorrect. Try again.");
    }
  };

  const messages = [
    "dW96dHt4bG1tdnhndnd9",
    "+2 ←",
    "-5",
    "+1",
    "-3",
    "+4",
    "-2",
    "+5",
    "-1",
    "+3",
    "-4",
  ];

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      console.log(messages[idx]);
      idx = (idx + 1) % messages.length;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      style={{
        padding: "2rem",
        fontFamily: "monospace",
        background: "#0a0a0a",
        color: "#00ffcc",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", textShadow: "0 0 10px #00ffcc" }}>
        🔄 Level 2: Signal Interference
      </h1>
      <p style={{ marginTop: "1rem", maxWidth: "600px", textShadow: "0 0 5px #00ffcc" }}>
        Transmission corrupted.<br />
        <strong>Make sure you ATBASH.</strong><br />
        Not everything is what it seems...
      </p>

      <input
        placeholder="Enter flag"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          marginTop: "2rem",
          backgroundColor: "#111",
          color: "#0f0",
          padding: "0.5rem",
          border: "1px solid #00ffcc",
          minWidth: "250px",
          textAlign: "center",
        }}
      />
      <button
        onClick={checkFlag}
        style={{
          marginLeft: "1rem",
          padding: "0.5rem 1rem",
          background: "#222",
          color: "#0f0",
          border: "1px solid #00ffcc",
          cursor: "pointer",
        }}
      >
        Submit
      </button>

      <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>

     
      {/* ZmxhZ3t0ZWxlY29tc2h4fQ== */}
    </main>
  );
}
