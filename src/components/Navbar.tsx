"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { navItems } from "@/data";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // On non-home pages, always show solid navbar
  const isHome = pathname === "/";
  const isSolid = !isHome || scrolled;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const bg = isSolid ? "rgba(255,255,255,0.98)" : "transparent";
  const shadow = isSolid ? "0 2px 24px rgba(11,110,110,0.10)" : "none";
  const border = isSolid ? "1px solid #e8f4f4" : "none";
  const linkColor = isSolid ? "#1a1a2e" : "#ffffff";
  const subColor = isSolid ? "#0B6E6E" : "rgba(110,224,192,0.85)";
  const logoTextColor = isSolid ? "#1a1a2e" : "#ffffff";
  const phoneColor = isSolid ? "#0B6E6E" : "rgba(255,255,255,0.85)";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "background 0.3s, box-shadow 0.3s, border 0.3s",
        background: bg, boxShadow: shadow, borderBottom: border,
        backdropFilter: isSolid ? "blur(12px)" : "none",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>

            <Link href="/" onClick={() => setIsOpen(false)}
              style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <div style={{ width: 38, height: 38, background: "#0B6E6E", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, boxShadow: "0 4px 12px rgba(11,110,110,0.3)", flexShrink: 0 }}>🦷</div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 600, fontFamily: "var(--font-body)", color: logoTextColor, transition: "color 0.3s", lineHeight: 1.2 }}>
                  DentaCare <span style={{ color: "#0B9E9E" }}>Pro</span>
                </div>
                <div style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-body)", color: subColor, transition: "color 0.3s" }}>
                  Dental Clinic
                </div>
              </div>
            </Link>

            <ul className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 2, listStyle: "none", margin: 0, padding: 0 }}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={{ padding: "8px 13px", borderRadius: 10, fontSize: 14, fontWeight: 500, textDecoration: "none", display: "block", fontFamily: "var(--font-body)", color: linkColor, transition: "color 0.3s, background 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#0B6E6E"; e.currentTarget.style.background = "rgba(11,110,110,0.06)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = linkColor; e.currentTarget.style.background = "transparent"; }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <a href="tel:+15125550100" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: phoneColor, textDecoration: "none", fontFamily: "var(--font-body)", transition: "color 0.3s", whiteSpace: "nowrap" }}>
                <Phone size={14} /> (512) 555-0100
              </a>
              <Link href="/contact" style={{ background: "#0B6E6E", color: "#fff", fontSize: 13, fontWeight: 600, padding: "10px 20px", borderRadius: 12, textDecoration: "none", fontFamily: "var(--font-body)", boxShadow: "0 4px 14px rgba(11,110,110,0.35)", whiteSpace: "nowrap" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#0B9E9E"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#0B6E6E"}
              >
                Book Appointment
              </Link>
            </div>

            <button className="nav-mobile" onClick={() => setIsOpen(!isOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 8, borderRadius: 8, color: linkColor, transition: "color 0.3s", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 40 }}>
          <div onClick={() => setIsOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(26,26,46,0.6)", backdropFilter: "blur(4px)", cursor: "pointer" }} />
          <div style={{ position: "absolute", top: 0, right: 0, height: "100%", width: 280, background: "#fff", boxShadow: "-10px 0 40px rgba(0,0,0,0.15)", display: "flex", flexDirection: "column", zIndex: 41 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: 80, borderBottom: "1px solid #f0fafa" }}>
              <span style={{ fontWeight: 600, color: "#1a1a2e", fontFamily: "var(--font-body)" }}>DentaCare <span style={{ color: "#0B6E6E" }}>Pro</span></span>
              <button onClick={() => setIsOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, color: "#1a1a2e", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <X size={20} />
              </button>
            </div>
            <ul style={{ listStyle: "none", padding: "24px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 4, margin: 0, overflowY: "auto" }}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setIsOpen(false)} style={{ display: "block", padding: "13px 16px", borderRadius: 12, fontSize: 15, fontWeight: 500, textDecoration: "none", color: "#1a1a2e", fontFamily: "var(--font-body)", transition: "all 0.15s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#f0fafa"; e.currentTarget.style.color = "#0B6E6E"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1a1a2e"; }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ padding: 24, borderTop: "1px solid #f0fafa", display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="tel:+15125550100" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#0B6E6E", fontWeight: 500, textDecoration: "none", fontFamily: "var(--font-body)" }}>
                <Phone size={14} /> (512) 555-0100
              </a>
              <Link href="/contact" onClick={() => setIsOpen(false)} style={{ display: "block", background: "#0B6E6E", color: "#fff", textAlign: "center", padding: "13px", borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "var(--font-body)" }}>
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-mobile  { display: none !important; }
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
        }
      `}</style>
    </>
  );
}