import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Props {
  title: string;
  subtitle?: string;
  tag?: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, subtitle, tag, children }: Props) {
  return (
    <>
      <Navbar />
      {/* Page Hero Header */}
      <div style={{
        background: "linear-gradient(135deg, #042e2e 0%, #1a1a2e 60%, #074444 100%)",
        paddingTop: 120, paddingBottom: 64,
        paddingLeft: "2rem", paddingRight: "2rem",
        position: "relative", overflow: "hidden",
      }}>
        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 400, height: 400, background: "rgba(11,158,158,0.08)", borderRadius: "50%", filter: "blur(60px)" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, textDecoration: "none", fontFamily: "var(--font-body)" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 13 }}>›</span>
            <span style={{ color: "#34cba4", fontSize: 13, fontFamily: "var(--font-body)" }}>{title}</span>
          </div>

          {tag && (
            <span style={{
              display: "inline-block", background: "rgba(11,158,158,0.15)",
              border: "1px solid rgba(11,158,158,0.3)", color: "#6de0c0",
              fontSize: 11, fontWeight: 600, letterSpacing: "0.12em",
              textTransform: "uppercase", padding: "5px 14px", borderRadius: 999,
              marginBottom: 16, fontFamily: "var(--font-body)",
            }}>{tag}</span>
          )}

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 700, color: "#fff", margin: "0 0 16px", lineHeight: 1.1,
          }}>{title}</h1>

          {subtitle && (
            <p style={{
              color: "rgba(255,255,255,0.55)", fontSize: 17, maxWidth: 520,
              lineHeight: 1.7, margin: 0, fontFamily: "var(--font-body)",
            }}>{subtitle}</p>
          )}
        </div>
      </div>

      {/* Page Content */}
      <main style={{ background: "#fff", minHeight: "60vh" }}>
        {children}
      </main>

      <Footer />
    </>
  );
}