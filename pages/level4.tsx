import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Level4() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [glitch, setGlitch] = useState(false);
  const [log, setLog] = useState("");

  const base64Message = "VGFrZSBub3RoaW5nIGF0IGZhY2UuIENlYXNlciAtNSB0byByZWFsaWduLg==";
  const encodedClue = "Ymj jxhfuj nx kfpj — ymjwj’x xtrjymnsl gzwnji jajs ijjujw.";

  useEffect(() => {
    setTimeout(() => {
      setGlitch(true);
    }, 4000);
    console.log(":: NEURAL DUMP >> sjybtwp yfg qttpx uwjyyd snhj ws");
    fetch('/api/flag')
    .then(res => res.json())
    .then(data => {
      console.log("AI handshake complete."); // Decoy log
    });
  
    const glitchLogs = [
      "Simulation stable...",
      "Reality anchor compromised...",
      "ERROR: UNSANCTIONED REALITY DETECTED.",
      "System override request: PENDING...",
      "Flickering entropy in core directive.",
    ];

    let index = 0;
    const interval = setInterval(() => {
      setLog(glitchLogs[index % glitchLogs.length]);
      index++;
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const checkFlag = () => {
    if (input.trim().toLowerCase() === "flag{th3r34lfl4g}") {
      router.push("/level5");
    } else {
      setError("ACCESS DENIED. Reality distortion persists.");
    }
  };

  return (
    <main
      style={{
        background: "#000",
        color: "#0ff",
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
      <h1 style={{ fontSize: "2rem", textShadow: "0 0 10px #0ff" }}>Level 4: Simulated Escape</h1>

      {!glitch ? (
        <>
          <p style={{ marginTop: "2rem" }}>🎉 CONGRATULATIONS — SYSTEM RESTORED.</p>
          <p>Escape Sequence Complete. Redirecting to Safety Zone...</p>
          <p>5... 4... 3...</p>
        </>
      ) : (
        <>
          <p style={{ color: "#f0f", textShadow: "0 0 5px #f0f" }}>&gt; Reality anchor broken. You're still inside.</p>
          <p>&gt; Memory Clue Dump (BASE64):</p>
          <div
            style={{
              backgroundColor: "#111",
              border: "1px solid #0ff",
              padding: "1rem",
              margin: "1rem",
              width: "80%",
              wordBreak: "break-word",
            }}
          >
            {base64Message}
          </div>

          <p>&gt; Fragmented Thought:</p>
          <div
            style={{
              backgroundColor: "#111",
              border: "1px solid #0ff",
              padding: "1rem",
              margin: "1rem",
              width: "80%",
              wordBreak: "break-word",
            }}
          >
            {encodedClue}
          </div>

          <div style={{ display: "none" }}>
            {/* Caesar Shift = -5 */}
            Shift=-5
          </div>

          <input
            placeholder="Enter flag"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              backgroundColor: "#111",
              color: "#0f0",
              padding: "0.5rem",
              border: "1px solid #0ff",
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

          <p style={{ marginTop: "2rem", fontSize: "0.85rem", opacity: 0.7 }}>{log}</p>
        </>
      )}
    </main>
  );
}
