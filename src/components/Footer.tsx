import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#042e2e", padding: "60px 2rem 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: "#0B6E6E", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🦷</div>
              <span style={{ fontSize: 16, fontWeight: 600, color: "#fff", fontFamily: "var(--font-body)" }}>
                DentaCare <span style={{ color: "#34cba4" }}>Pro</span>
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7, maxWidth: 240, fontFamily: "var(--font-body)", margin: "0 0 20px" }}>
              Modern dental care for the whole family in Austin, TX.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {["Facebook", "Instagram", "Google"].map((s) => (
                <a key={s} href="#" style={{ width: 36, height: 36, background: "rgba(255,255,255,0.08)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", fontSize: 12, textDecoration: "none", fontFamily: "var(--font-body)" }}>
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 14, fontWeight: 600, marginBottom: 20, fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Services",  href: "/services"  },
                { label: "About",     href: "/about"     },
                { label: "Gallery",   href: "/gallery"   },
                { label: "Blog",      href: "/blog"      },
                { label: "Contact",   href: "/contact"   },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none", fontFamily: "var(--font-body)", transition: "color 0.2s" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 14, fontWeight: 600, marginBottom: 20, fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Treatments</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {["General Dentistry", "Teeth Whitening", "Invisalign", "Dental Implants", "Veneers", "Pediatric"].map((s) => (
                <li key={s}>
                  <Link href="/services" style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none", fontFamily: "var(--font-body)" }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 14, fontWeight: 600, marginBottom: 20, fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "📍", text: "123 Dental Ave, Austin, TX 78701" },
                { icon: "📞", text: "(512) 555-0100" },
                { icon: "✉️", text: "hello@dentacarepro.com" },
                { icon: "🕐", text: "Mon–Fri: 8am – 6pm" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 14 }}>{item.icon}</span>
                  <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, fontFamily: "var(--font-body)", lineHeight: 1.5 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 48, paddingTop: 24, display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, margin: 0, fontFamily: "var(--font-body)" }}>
            © 2025 DentaCare Pro. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <a key={t} href="#" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none", fontFamily: "var(--font-body)" }}>{t}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 48px;
        }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; } }
        @media (max-width: 640px)  { .footer-grid { grid-template-columns: 1fr; } }
      `}</style>
    </footer>
  );
}