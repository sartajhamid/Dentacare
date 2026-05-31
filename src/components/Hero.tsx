"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, Star, ShieldCheck, Clock } from "lucide-react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => {
      if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <section id="home" style={{
      position: "relative", minHeight: "100vh",
      display: "flex", alignItems: "center",
      overflow: "hidden", background: "#042e2e",
    }}>
      {/* Background */}
      <div ref={bgRef} style={{ position: "absolute", inset: 0, willChange: "transform" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#042e2e 0%,#1a1a2e 50%,#074444 100%)" }} />
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 600, height: 600, background: "rgba(11,158,158,0.08)", borderRadius: "50%", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: 500, height: 500, background: "rgba(52,203,164,0.08)", borderRadius: "50%", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 10,
        maxWidth: 1280, margin: "0 auto",
        width: "100%", padding: "80px 2rem 60px",
      }}>
        <div className="hero-grid">

          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

            {/* Eyebrow */}
            <div className="afu" style={{
              animationDelay: "0.1s",
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(11,158,158,0.12)",
              border: "1px solid rgba(11,158,158,0.25)",
              color: "#6de0c0", fontSize: 13, fontWeight: 500,
              padding: "8px 16px", borderRadius: 999,
              width: "fit-content", fontFamily: "var(--font-body)",
            }}>
              <span style={{ width: 7, height: 7, background: "#34cba4", borderRadius: "50%", display: "inline-block" }} />
              Trusted by 5,000+ patients in Austin, TX
            </div>

            {/* Headline */}
            <h1 className="afu" style={{
              animationDelay: "0.2s", margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 5rem)",
              fontWeight: 700, lineHeight: 1.05, color: "#fff",
            }}>
              Your Smile,<br />
              <span style={{
                background: "linear-gradient(135deg,#0B9E9E,#34cba4)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text", fontStyle: "italic",
              }}>Perfectly</span><br />
              Crafted.
            </h1>

            {/* Subtext */}
            <p className="afu" style={{
              animationDelay: "0.35s", margin: 0,
              color: "rgba(255,255,255,0.6)", fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.7, maxWidth: 440, fontFamily: "var(--font-body)",
            }}>
              Modern dentistry designed around you — gentle, precise, and beautifully effective. From routine cleanings to complete smile makeovers.
            </p>

            {/* CTAs */}
            <div className="afu hero-ctas" style={{ animationDelay: "0.5s" }}>
              <Link href="/contact" style={{
                background: "#0B6E6E", color: "#fff", fontWeight: 600,
                fontSize: 15, padding: "14px 28px", borderRadius: 14,
                textDecoration: "none", fontFamily: "var(--font-body)",
                boxShadow: "0 8px 24px rgba(11,110,110,0.4)",
                whiteSpace: "nowrap",
              }}>
                Book Appointment
              </Link>
              <Link href="/services" style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.85)", fontWeight: 600,
                fontSize: 15, padding: "14px 28px", borderRadius: 14,
                textDecoration: "none", fontFamily: "var(--font-body)",
                whiteSpace: "nowrap",
              }}>
                View Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="afu hero-trust" style={{ animationDelay: "0.65s" }}>
              {[
                { icon: <Star size={13} style={{ fill: "#facc15", color: "#facc15" }} />, text: "4.9/5 on Google" },
                { icon: <ShieldCheck size={13} style={{ color: "#34cba4" }} />, text: "All insurance accepted" },
                { icon: <Clock size={13} style={{ color: "#34cba4" }} />, text: "Same-day appointments" },
              ].map((b) => (
                <div key={b.text} style={{
                  display: "flex", alignItems: "center", gap: 6,
                  color: "rgba(255,255,255,0.55)", fontSize: 13,
                  fontFamily: "var(--font-body)",
                }}>
                  {b.icon}{b.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="afu hero-img-col" style={{ animationDelay: "0.4s", position: "relative" }}>
            <div style={{ position: "relative", maxWidth: 420, margin: "0 auto" }}>
              <div style={{ position: "absolute", inset: -16, borderRadius: 28, border: "1px solid rgba(11,158,158,0.2)" }} />
              <div style={{ position: "absolute", inset: -32, borderRadius: 36, border: "1px solid rgba(11,158,158,0.08)" }} />

              <div style={{
                borderRadius: 24, overflow: "hidden",
                boxShadow: "0 40px 80px rgba(4,46,46,0.6)",
                aspectRatio: "4/5", position: "relative",
              }}>
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80"
                  alt="Dr. Sarah Mitchell"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(4,46,46,0.7) 0%,transparent 50%)" }} />
                <div style={{
                  position: "absolute", bottom: 16, left: 16, right: 16,
                  background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.2)", borderRadius: 16, padding: "12px 16px",
                }}>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: 14, margin: 0, fontFamily: "var(--font-body)" }}>Dr. Sarah Mitchell, DDS</p>
                  <p style={{ color: "#6de0c0", fontSize: 12, margin: "2px 0 0", fontFamily: "var(--font-body)" }}>Harvard School of Dental Medicine</p>
                </div>
              </div>

              {/* Floating cards */}
              <div className="float-card" style={{ position: "absolute", left: -40, top: "25%" }}>
                <div style={{ width: 40, height: 40, background: "#f0fafa", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>😁</div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 18, color: "#1a1a2e", margin: 0, fontFamily: "var(--font-body)", lineHeight: 1 }}>5,000+</p>
                  <p style={{ fontSize: 11, color: "#888", margin: "3px 0 0", fontFamily: "var(--font-body)" }}>Happy patients</p>
                </div>
              </div>

              <div className="float-card" style={{ position: "absolute", right: -32, bottom: "25%", animationDelay: "2s" }}>
                <div style={{ width: 40, height: 40, background: "#fffbeb", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>⭐</div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 18, color: "#1a1a2e", margin: 0, fontFamily: "var(--font-body)", lineHeight: 1 }}>4.9/5</p>
                  <p style={{ fontSize: 11, color: "#888", margin: "3px 0 0", fontFamily: "var(--font-body)" }}>Google rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#stats" style={{
        position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        color: "rgba(255,255,255,0.35)", textDecoration: "none",
      }}>
        <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>Scroll</span>
        <ArrowDown size={15} />
      </a>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        .hero-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .afu {
          opacity: 0;
          animation: fadeUp 0.7s ease forwards;
        }
        .float-card {
          background: #fff;
          border-radius: 20px;
          padding: 14px 18px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          gap: 12px;
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }
          .hero-ctas {
            justify-content: center;
          }
          .hero-trust {
            justify-content: center;
          }
          .hero-img-col {
            display: flex;
            justify-content: center;
            max-width: 360px;
            margin: 0 auto;
          }
          .float-card {
            display: none !important;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .hero-img-col {
            display: none !important;
          }
          .hero-trust {
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}