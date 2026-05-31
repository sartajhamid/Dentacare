"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const categories = ["All", "Whitening", "Veneers", "Implants", "Invisalign", "Bonding"];

const galleryItems = [
  { id: 1, category: "Whitening",  treatment: "Teeth Whitening",    duration: "1 visit",   before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80", after: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80",  patient: "Jennifer W.", age: 34 },
  { id: 2, category: "Veneers",    treatment: "Porcelain Veneers",   duration: "2 visits",  before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80", after: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",  patient: "Marcus T.", age: 29 },
  { id: 3, category: "Invisalign", treatment: "Invisalign",          duration: "14 months", before: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80", after: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",  patient: "Sofia R.", age: 26 },
  { id: 4, category: "Implants",   treatment: "Dental Implants",     duration: "3 months",  before: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=600&q=80", after: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",  patient: "David P.", age: 52 },
  { id: 5, category: "Bonding",    treatment: "Composite Bonding",   duration: "1 visit",   before: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80", after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",  patient: "Rachel M.", age: 31 },
  { id: 6, category: "Whitening",  treatment: "Teeth Whitening",     duration: "1 visit",   before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80", after: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80",  patient: "Tom K.", age: 44 },
  { id: 7, category: "Veneers",    treatment: "Porcelain Veneers",   duration: "2 visits",  before: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80", after: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",  patient: "Anna L.", age: 38 },
  { id: 8, category: "Implants",   treatment: "Dental Implants",     duration: "4 months",  before: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=600&q=80", after: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",  patient: "Chris B.", age: 61 },
  { id: 9, category: "Invisalign", treatment: "Invisalign",          duration: "18 months", before: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80", after: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",  patient: "Mia S.", age: 22 },
];

function BeforeAfterCard({ item }: { item: typeof galleryItems[0] }) {
  const [showAfter, setShowAfter] = useState(false);
  const [sliderX, setSliderX] = useState(50);
  const [dragging, setDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderX(Math.min(95, Math.max(5, x)));
  };

  return (
    <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1px solid #e8f4f4", boxShadow: "0 4px 24px rgba(11,110,110,0.06)", transition: "all 0.3s" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(11,110,110,0.12)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(11,110,110,0.06)"; }}
    >
      {/* Image comparison */}
      <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", cursor: dragging ? "grabbing" : "grab", userSelect: "none" }}
        onMouseDown={(e) => { setDragging(true); handleMove(e.clientX, e.currentTarget.getBoundingClientRect()); }}
        onMouseMove={(e) => { if (dragging) handleMove(e.clientX, e.currentTarget.getBoundingClientRect()); }}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onTouchStart={(e) => { setDragging(true); handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect()); }}
        onTouchMove={(e) => { if (dragging) handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect()); }}
        onTouchEnd={() => setDragging(false)}
      >
        {/* Before image */}
        <img src={item.before} alt="Before" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />

        {/* After image clipped */}
        <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 0 0 ${sliderX}%)` }}>
          <img src={item.after} alt="After" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Slider line */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: `${sliderX}%`, width: 2, background: "#fff", boxShadow: "0 0 8px rgba(0,0,0,0.3)", transform: "translateX(-50%)" }}>
          {/* Handle */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 36, height: 36, background: "#fff", borderRadius: "50%", boxShadow: "0 4px 16px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
            ↔
          </div>
        </div>

        {/* Labels */}
        <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.6)", color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 999, fontFamily: "var(--font-body)", letterSpacing: "0.06em" }}>BEFORE</div>
        <div style={{ position: "absolute", top: 12, right: 12, background: "#0B6E6E", color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 999, fontFamily: "var(--font-body)", letterSpacing: "0.06em" }}>AFTER</div>

        {/* Hint */}
        <div style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", background: "rgba(0,0,0,0.5)", color: "#fff", fontSize: 11, padding: "4px 12px", borderRadius: 999, fontFamily: "var(--font-body)", whiteSpace: "nowrap", pointerEvents: "none" }}>
          ← Drag to compare →
        </div>
      </div>

      {/* Card info */}
      <div style={{ padding: "20px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ background: "#f0fafa", color: "#0B6E6E", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 999, fontFamily: "var(--font-body)", border: "1px solid #ccefef" }}>
            {item.treatment}
          </span>
          <span style={{ fontSize: 12, color: "#94a3b8", fontFamily: "var(--font-body)" }}>{item.duration}</span>
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b", margin: 0 }}>
          Patient: <strong style={{ color: "#1a1a2e" }}>{item.patient}</strong>, {item.age} yrs old
        </p>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? galleryItems
    : galleryItems.filter((i) => i.category === active);

  return (
    <>
      <Navbar />

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#042e2e 0%,#1a1a2e 60%,#074444 100%)", padding: "120px 2rem 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position:"absolute",inset:0,opacity:0.03,backgroundImage:"linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",backgroundSize:"60px 60px" }} />
        <div style={{ position:"absolute",top:"-20%",right:"-10%",width:500,height:500,background:"rgba(11,158,158,0.08)",borderRadius:"50%",filter:"blur(80px)" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:24 }}>
            <Link href="/" style={{ color:"rgba(255,255,255,0.45)",fontSize:13,textDecoration:"none",fontFamily:"var(--font-body)" }}>Home</Link>
            <span style={{ color:"rgba(255,255,255,0.25)" }}>›</span>
            <span style={{ color:"#34cba4",fontSize:13,fontFamily:"var(--font-body)" }}>Gallery</span>
          </div>
          <span style={{ display:"inline-block",background:"rgba(11,158,158,0.15)",border:"1px solid rgba(11,158,158,0.3)",color:"#6de0c0",fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",padding:"5px 14px",borderRadius:999,marginBottom:16,fontFamily:"var(--font-body)" }}>
            Real Results
          </span>
          <h1 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(2.2rem,5vw,3.8rem)",fontWeight:700,color:"#fff",margin:"0 0 20px",lineHeight:1.1 }}>
            Before & After<br />
            <span style={{ background:"linear-gradient(135deg,#0B9E9E,#34cba4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
              Real Patients, Real Results
            </span>
          </h1>
          <p style={{ color:"rgba(255,255,255,0.55)",fontSize:"clamp(15px,2vw,18px)",maxWidth:520,margin:"0 auto",lineHeight:1.7,fontFamily:"var(--font-body)" }}>
            Drag the slider on each photo to see the transformation. Every smile below belongs to a real DentaCare Pro patient.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ background: "#f8fafa", padding: "80px 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Filter tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 56 }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                padding: "9px 22px", borderRadius: 999, fontSize: 13, fontWeight: 600,
                fontFamily: "var(--font-body)", cursor: "pointer", transition: "all 0.2s",
                border: active === cat ? "none" : "1px solid #e0f0f0",
                background: active === cat ? "#0B6E6E" : "#fff",
                color: active === cat ? "#fff" : "#64748b",
                boxShadow: active === cat ? "0 4px 14px rgba(11,110,110,0.3)" : "none",
              }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filtered.map((item) => (
              <BeforeAfterCard key={item.id} item={item} />
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: 72, padding: "60px 40px", background: "linear-gradient(135deg,#042e2e,#0B6E6E)", borderRadius: 28 }}>
            <h2 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(1.6rem,3vw,2.4rem)",fontWeight:700,color:"#fff",margin:"0 0 16px" }}>
              Ready for Your Transformation?
            </h2>
            <p style={{ fontFamily:"var(--font-body)",color:"rgba(255,255,255,0.65)",fontSize:16,margin:"0 0 32px",lineHeight:1.7 }}>
              These results are waiting for you. Book a free consultation and let&apos;s create your before & after.
            </p>
            <Link href="/contact" style={{ display:"inline-block",background:"#fff",color:"#0B6E6E",fontWeight:700,fontSize:15,padding:"16px 36px",borderRadius:14,textDecoration:"none",fontFamily:"var(--font-body)",boxShadow:"0 8px 32px rgba(0,0,0,0.2)" }}>
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 1024px) { .gallery-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 640px)  { .gallery-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}