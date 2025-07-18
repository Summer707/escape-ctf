import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      background: "#0a0a0a",
      color: "#00ffcc",
      fontFamily: "monospace",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h1 style={{
        fontSize: "2.5rem",
        marginBottom: "1.5rem",
        textShadow: "0 0 10px #00ffcc, 0 0 20px #00ffcc"
      }}>
        🧠 OPERATION BLACKOUT
      </h1>
      <p style={{
        maxWidth: "600px",
        marginBottom: "1rem",
        textShadow: "0 0 4px #00ffcc"
      }}>
        The system has been infected. You are now inside a hostile simulation controlled by a rogue AI.
        <br />
        Your only way out is to solve each encrypted layer before it locks you in forever.
      </p>
      <p style={{
        fontStyle: "italic",
        marginBottom: "2rem",
        textShadow: "0 0 4px #00ffcc"
      }}>
        Use your mind. Break the code. Escape the trap.
      </p>
      <Link href="/level1">
        <button style={{
          padding: "1rem 2rem",
          backgroundColor: "#111",
          color: "#00ffcc",
          border: "1px solid #00ffcc",
          cursor: "pointer",
          textShadow: "0 0 5px #00ffcc",
          boxShadow: "0 0 15px #00ffcc50"
        }}>
          🔓 Begin Mission
        </button>
      </Link>
    </main>
  );
}
