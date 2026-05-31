"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Happy Patients",     icon: "😁" },
  { value: 15,   suffix: "+", label: "Years Experience",   icon: "🏆" },
  { value: 12,   suffix: "",  label: "Treatments Offered", icon: "🦷" },
  { value: 99,   suffix: "%", label: "Satisfaction Rate",  icon: "⭐" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} style={{ fontFamily: "var(--font-display)" }}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" style={{ background: "#0B6E6E", padding: "64px 2rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={stat.label} className="stat-item">
              {/* Divider */}
              {i > 0 && <div className="stat-divider" />}
              <div style={{ textAlign: "center", padding: "0 2rem" }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>{stat.icon}</div>
                <div style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1,
                  marginBottom: 8,
                }}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: center;
          position: relative;
        }
        .stat-item {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .stat-divider {
          position: absolute;
          left: 0;
          top: 15%;
          height: 70%;
          width: 1px;
          background: rgba(255,255,255,0.15);
        }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
          .stat-divider { display: none; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}