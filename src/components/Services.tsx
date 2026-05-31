"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { services } from "@/data";

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".service-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" style={{ background: "#fff", padding: "80px 2rem" }} ref={sectionRef}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{
            display: "inline-block", background: "#f0fafa", color: "#0B6E6E",
            fontSize: 12, fontWeight: 600, letterSpacing: "0.12em",
            textTransform: "uppercase", padding: "6px 16px", borderRadius: 999,
            marginBottom: 20, fontFamily: "var(--font-body)", border: "1px solid #ccefef",
          }}>
            What We Do
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700, color: "#1a1a2e",
            lineHeight: 1.2, margin: "0 0 16px",
          }}>
            Complete Dental Care<br />
            <em style={{ color: "#0B6E6E", fontStyle: "italic" }}>Under One Roof</em>
          </h2>
          <p style={{
            color: "#64748b", fontSize: "clamp(14px, 2vw, 17px)",
            maxWidth: 500, margin: "0 auto", lineHeight: 1.7,
            fontFamily: "var(--font-body)",
          }}>
            From your first cleaning to a full smile transformation — every treatment you need, all in one place.
          </p>
        </div>

        {/* Cards */}
        <div className="services-grid">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="service-card"
              style={{
                opacity: 0,
                transform: "translateY(24px)",
                transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s, border-color 0.2s, box-shadow 0.2s`,
                background: "#fff",
                border: "1px solid #e8f4f4",
                borderRadius: 20,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0B9E9E";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(11,110,110,0.12)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e8f4f4";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Top accent */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: "linear-gradient(90deg, #0B6E6E, #34cba4)",
                opacity: 0, transition: "opacity 0.3s",
              }} />

              {/* Icon */}
              <div style={{
                width: 52, height: 52,
                background: "linear-gradient(135deg, #f0fafa, #d4f7ec)",
                borderRadius: 14, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 24,
              }}>
                {service.icon}
              </div>

              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 19,
                fontWeight: 600, color: "#1a1a2e", margin: 0,
              }}>
                {service.title}
              </h3>

              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14,
                color: "#64748b", lineHeight: 1.7, margin: 0, flex: 1,
              }}>
                {service.description}
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }}>
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700,
                  color: "#0B6E6E", background: "#f0fafa", padding: "4px 12px", borderRadius: 999,
                }}>
                  {service.price}
                </span>
                <Link href="/contact" style={{
                  fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
                  color: "#0B6E6E", textDecoration: "none",
                }}>
                  Book Now →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <p style={{ fontFamily: "var(--font-body)", color: "#64748b", fontSize: 15, marginBottom: 20 }}>
            Not sure which treatment is right for you?
          </p>
          <Link href="/contact" style={{
            display: "inline-block", background: "#0B6E6E", color: "#fff",
            fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15,
            padding: "14px 32px", borderRadius: 14, textDecoration: "none",
            boxShadow: "0 8px 24px rgba(11,110,110,0.3)",
          }}>
            Book a Free Consultation
          </Link>
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .service-card:hover > div:first-child {
          opacity: 1 !important;
        }
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}