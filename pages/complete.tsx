import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Complete() {
  const router = useRouter();

  useEffect(() => {
    // Optional: confetti or future redirect
    console.log("Mission complete. Returning to base.");
  }, []);

  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#0f0",
        fontFamily: "monospace",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
        boxShadow: "0 0 40px 10px #0f08, 0 0 80px 20px #0ff4",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem", textShadow: "0 0 16px #0ff, 0 0 32px #0f0, 0 0 8px #fff" }}>
        SYSTEM OVERRIDE COMPLETE
      </h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "2rem", color: "#0ff", textShadow: "0 0 8px #0ff, 0 0 16px #0f0" }}>
        You've shattered the firewall and escaped the AI labyrinth.
      </p>

      <div
        style={{
          backgroundColor: "#111",
          border: "1px solid #0f0",
          padding: "1rem 2rem",
          borderRadius: "8px",
        }}
      >
        <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#0f0" }}>
          Final Flag:
        </p>
        <code
          style={{
            fontSize: "1.5rem",
            background: "#000",
            padding: "0.5rem",
            border: "1px solid #0f0",
            display: "inline-block",
            color: "#0ff",
          }}
        >
          {"flag{finalboss}"}
        </code>
      </div>

      <button
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          background: "#0f0",
          color: "#000",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background 0.2s ease",
        }}
        onClick={() => router.push("/")}
      >
        Return to Mainframe
      </button>
    </main>
  );
}
