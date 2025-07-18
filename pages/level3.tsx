import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Level3() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [currentLog, setCurrentLog] = useState("");

  const logs = [
    "ZmxhZ3tnb29kZmluZH0=",
    "ZmxhZ3tqaWJiZXJpc2h9=",
    "ZmxhZ3thc2Rma25qfQ===",
    "ZmxhZ3toc3J1Z3JoZ3NpdnZ9", // → hsrugrhgsivv (flag)
    "ZmxhZ3thaGZqc2hmZH0=",
    "ZmxhZ3toZGFrc2pkbmZra2FqZmR9",
    "ZmxhZ3toYWNrZXJtYW59",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      setCurrentLog(randomLog);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const checkFlag = () => {
    if (input.trim().toLowerCase() === "flag{hsrugrhgsivv}") {
      router.push("/level4");
    } else {
      setError("ACCESS DENIED. Pattern mismatch.");
    }
  };

  return (
    <main
      style={{
        background: "#000",
        color: "#00ffcc",
        fontFamily: "monospace",
        padding: "2rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          textShadow: "0 0 10px #00ffcc",
        }}
      >
        👁️ Level 3: Memory Fragment
      </h1>

      <p style={{ textShadow: "0 0 4px #00ffcc", marginBottom: "1rem" }}>
  &gt; [ALERT] Memory leak detected. <br />
  &gt; Neural core integrity: 14% and falling... <br />
  &gt; Emergency protocol triggered. Dumping short-term memory buffer: <br />
  <br />
  &gt; Objective: Retrieve embedded mission status. <br />
  &gt; Obfuscation layer: BASE64 ENCODED <br />
  &gt; ⚠️ Fragmented thoughts incoming...
</p>



      <div
        style={{
          backgroundColor: "#111",
          border: "1px solid #00ffcc",
          padding: "1.5rem",
          margin: "2rem 0",
          fontSize: "1rem",
          width: "80%",
          maxWidth: "600px",
          minHeight: "60px",
          boxShadow: "0 0 15px #00ffcc33",
          textShadow: "0 0 6px #00ffcc",
        }}
      >
        {currentLog}
      </div>

      <input
        placeholder="Enter flag"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
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

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

      {/* 👀 Hidden Caesar Cipher Clue */}
      <div style={{ display: "none" }}>
      Who leaked this? "hs dmcr vhsg mY9"
      </div>
    </main>
  );
}
