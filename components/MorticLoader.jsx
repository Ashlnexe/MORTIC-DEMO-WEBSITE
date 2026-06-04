"use client";
import { useEffect, useState, useRef } from "react";

// ── Exact MORTIC logo recreation from their IG
function MorticLogo({ size = 160 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Clean outer oval */}
      <ellipse
        cx="80"
        cy="80"
        rx="64"
        ry="33"
        stroke="black"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* MORTIC text */}
      <text
        x="80"
        y="86"
        textAnchor="middle"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="20"
        fontWeight="700"
        fill="black"
        letterSpacing="2.5"
        style={{ fontStyle: "italic" }}
      >
        MORTIC
      </text>
    </svg>
  );
}

// ── Loading bar
function LoadingBar({ duration = 3000, onComplete }) {
  const [width, setWidth] = useState(0);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // Animate from 0 to 100 over duration
    const start = performance.now();
    let timeoutId;

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic for more cinematic feel
      const eased = 1 - Math.pow(1 - progress, 3);
      setWidth(eased * 100);

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        timeoutId = setTimeout(() => onCompleteRef.current?.(), 200);
      }
    };

    let raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [duration]);

  return (
    <div
      style={{
        width: "120px",
        height: "1.5px",
        background: "rgba(0,0,0,0.1)",
        borderRadius: "2px",
        overflow: "hidden",
        marginTop: "28px",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${width}%`,
          background: "black",
          borderRadius: "2px",
          transition: "width 0.05s linear",
        }}
      />
    </div>
  );
}

// ── Main Loader component
export default function MorticLoader({ onDone }) {
  const [phase, setPhase] = useState("enter"); // enter → hold → exit → done

  const handleBarComplete = () => {
    setPhase("exit");
    setTimeout(() => {
      setPhase("done");
      onDone?.();
    }, 900);
  };

  if (phase === "done") return null;

  return (
    <>
      <style>{`
        @keyframes loaderEnter {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loaderExit {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-80px);
          }
        }

        @keyframes bgFadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
      `}</style>

      {/* Full screen warm-white/grey overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          background: "#f0f0ed", // Warmer off-white to make the pure white circle logo pop
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          animation:
            phase === "exit"
              ? "bgFadeOut 0.9s cubic-bezier(0.4,0,0.2,1) forwards"
              : "none",
        }}
      >
        {/* Logo + bar wrapper */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            animation:
              phase === "enter"
                ? "loaderEnter 0.9s cubic-bezier(0.16,1,0.3,1) forwards"
                : phase === "exit"
                ? "loaderExit 0.85s cubic-bezier(0.4,0,0.6,1) forwards"
                : "none",
          }}
        >
          <MorticLogo size={160} />

          <LoadingBar duration={3000} onComplete={handleBarComplete} />

          <div
            style={{
              marginTop: "16px",
              fontSize: "9px",
              letterSpacing: "4px",
              color: "rgba(0,0,0,0.25)",
              textTransform: "uppercase",
              fontFamily: "'Courier New', monospace",
            }}
          >
            Collector's Accessories
          </div>
        </div>
      </div>
    </>
  );
}
