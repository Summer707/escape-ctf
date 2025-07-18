import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Level5() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("Decoding memory sector...");
  const [hidden, setHidden] = useState(false);
  const [matrix, setMatrix] = useState<string[][]>([]);
  const [showCipherHint, setShowCipherHint] = useState(false);

  useEffect(() => {
    // Simulate matrix loading effect
    localStorage.setItem("System backlogs", "cixd{yobxhqeolrde}");

    const interval = setInterval(() => {
      const line = Array.from({ length: 50 }, () => (Math.random() < 0.5 ? "0" : "1"));
      setMatrix((prev) => [...prev.slice(-30), line]);
    }, 100);
    fetch('/api/level5hint')
    .then(res => res.json())
    .then(data => {
      console.log("ADSAFASDJFNSADJNSADJNFJSANSAJFD."); // Decoy log
    });
    setTimeout(() => {
      setMessage("ACCESS GRANTED. Decryption node unstable.");
      setHidden(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const checkFlag = () => {
    if (input.trim().toLowerCase() === "flag{m1nd_h34ck_ov3r}") {
      router.push("/complete");
    } else {
      setMessage("Incorrect. The firewall adapts.");
    }
  };

  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#0f0",
        fontFamily: "monospace",
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Level 5: Firewall Collapse</h1>
      <p style={{ marginBottom: "1rem" }}>{message}</p>

      {matrix.map((line, i) => (
        <div key={i} style={{ fontSize: "0.75rem", whiteSpace: "pre" }}>
          {line.join(" ")}
        </div>
      ))}

      {hidden && (
        <div style={{ marginTop: "2rem" }}>
          <p>One final gate remains.</p>
          <p
            style={{ fontSize: "0.9rem", opacity: 0.6, cursor: "pointer" }}
            onClick={() => setShowCipherHint(true)}
            title="Click for a cipher hint"
          >
            Hint: Think psychological. Think signal. The mind is a machine.
          </p>
          {showCipherHint && (
            <p style={{ fontSize: "0.9rem", color: "#0ff", marginTop: "0.5rem" }}>
              The WiFi shift is based on an Atbash of the AI's memories.
            </p>
          )}
          <input
            placeholder="Enter final flag"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              backgroundColor: "#111",
              color: "#0f0",
              padding: "0.5rem",
              border: "1px solid #0f0",
              minWidth: "250px",
              textAlign: "center",
              marginTop: "1rem",
            }}
          />
          <button
            onClick={checkFlag}
            style={{
              marginLeft: "1rem",
              padding: "0.5rem 1rem",
              background: "#111",
              color: "#0f0",
              border: "1px solid #0f0",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      )}
      <div style={{ display: "none" }}>
  system.msg = "What's this doing here? illh xq ilzxi pqloxdb";
</div>
    </main>
  );
}
