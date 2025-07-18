import { useState } from "react";
import { useRouter } from "next/router";

export default function Level1() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [logsOpen, setLogsOpen] = useState(false);
  const [logsInput, setLogsInput] = useState("");
  const [logsFlag, setLogsFlag] = useState("");
  const router = useRouter();

  const checkFlag = () => {
    if (input.trim().toLowerCase() === "flag{entrygranted}") {
      router.push("/level2");
    } else {
      setError("ACCESS DENIED. Incorrect flag.");
    }
  };

  const handleLogsInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogsInput(e.target.value);
    if (e.target.value.trim().toLowerCase() === "this is your first test") {
      setLogsFlag("flag{entrygranted}");
    } else {
      setLogsFlag("");
    }
  };

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
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", textShadow: "0 0 10px #00ffcc" }}>
        🧠 Level 1: Access Terminal
      </h1>

      {/* Centered Encrypted Message */}
      <div style={{
        margin: "1.5rem 0 2.5rem 0",
        fontSize: "1.25rem",
        color: "#00ffcc",
        textShadow: "0 0 8px #00ffcc, 0 0 2px #0ff",
        background: "#101820",
        borderRadius: "8px",
        padding: "1.2rem 2.2rem",
        boxShadow: "0 0 18px #00ffcc33, 0 0 2px #0ff inset",
        fontFamily: "'Fira Mono', 'Consolas', monospace",
        display: "inline-block",
        letterSpacing: "0.04em",
      }}>
        Bpqa qa gwcz nqzab bmab
      </div>

      <p style={{ marginBottom: "1rem", maxWidth: "600px", textShadow: "0 0 5px #00ffcc" }}>
  &gt; SYSTEM BOOT FAILURE <br />
  &gt; TERMINAL LOCKED <br />
  &gt; REASON: Authorization Required <br />
  <br />
  Attempting Bypass...
</p>


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

      <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>

      {/* Subtle Access Logs Monitor in bottom-right, hidden until dot is clicked */}
      <div>
        {!logsOpen && (
          <div
            className="access-logs-dot"
            title="Show Access Logs"
            onClick={() => setLogsOpen(true)}
            style={{ cursor: "pointer" }}
          />
        )}
        {logsOpen && (
          <div className="access-logs-monitor" tabIndex={-1}>
            <button
              aria-label="Close logs"
              onClick={() => setLogsOpen(false)}
              style={{
                position: "absolute",
                top: 6,
                right: 10,
                background: "none",
                border: "none",
                color: "#00ffcc99",
                fontSize: "1.1rem",
                cursor: "pointer",
                zIndex: 2,
                padding: 0,
                lineHeight: 1,
              }}
            >
              ×
            </button>
            <span className="access-logs-title">Access Logs</span>
            <div className="access-logs-content">
              Cipher: <strong>Caesar Shift</strong>
              <br />
              shift = 8
              <br />
              <br />
              <input
                type="text"
                placeholder="Enter log code..."
                value={logsInput}
                onChange={handleLogsInput}
                style={{
                  background: "#181f22",
                  color: "#00ffcc",
                  border: "1px solid #00ffcc55",
                  borderRadius: "4px",
                  padding: "0.3rem 0.6rem",
                  fontFamily: "inherit",
                  fontSize: "0.95rem",
                  marginBottom: "0.5rem",
                  width: "90%",
                  outline: "none",
                  marginTop: "0.2rem",
                }}
              />
              {logsFlag && (
                <div style={{
                  marginTop: "0.4rem",
                  color: "#0f0",
                  fontWeight: "bold",
                  textShadow: "0 0 6px #00ffcc, 0 0 2px #0f0",
                  fontSize: "1.05rem",
                  wordBreak: "break-all",
                }}>{logsFlag}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
