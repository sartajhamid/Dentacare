"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const categories = ["All", "Electric Toothbrush", "Water Flosser", "Toothpaste", "Mouthwash", "Whitening"];

const products = [
  {
    id: 1,
    name: "Oral-B iO Series 9",
    brand: "Oral-B",
    category: "Electric Toothbrush",
    badge: "Doctor's #1 Pick",
    badgeColor: "#0B6E6E",
    price: "$199",
    rating: 5,
    reviews: 12847,
    description: "AI-powered electric toothbrush with pressure sensor and 7 cleaning modes. Guides you to brush every zone perfectly. Our single most recommended home care tool.",
    whyWeLoveIt: "The AI sensor detects when you're pressing too hard — one of the leading causes of gum recession. Game changer.",
    image: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=400&q=80",
    amazonLink: "https://amazon.com",
    tags: ["Gum Care", "Plaque Removal", "Smart Sensor"],
  },
  {
    id: 2,
    name: "Waterpik Aquarius Pro",
    brand: "Waterpik",
    category: "Water Flosser",
    badge: "Best for Gums",
    badgeColor: "#095858",
    price: "$79",
    rating: 5,
    reviews: 8932,
    description: "Clinically proven to be 2x more effective than string floss for reducing gingivitis. 10 pressure settings, 7 tips included. Perfect for implants, braces, and bridges.",
    whyWeLoveIt: "Most patients who switch to a water flosser notice healthier gums within 2 weeks. We recommend this to every single patient.",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&q=80",
    amazonLink: "https://amazon.com",
    tags: ["Implant Safe", "Braces Friendly", "Gum Health"],
  },
  {
    id: 3,
    name: "Sensodyne Pronamel",
    brand: "Sensodyne",
    category: "Toothpaste",
    badge: "Post-Whitening Must",
    badgeColor: "#34cba4",
    price: "$12",
    rating: 4,
    reviews: 23411,
    description: "Strengthens acid-weakened enamel and relieves sensitivity. Fluoride formula that actively repairs microscopic enamel damage caused by acidic food and drinks.",
    whyWeLoveIt: "We recommend this after every whitening treatment. It rebuilds what whitening temporarily affects and keeps sensitivity away.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
    amazonLink: "https://amazon.com",
    tags: ["Sensitivity Relief", "Enamel Repair", "Daily Use"],
  },
  {
    id: 4,
    name: "ACT Anticavity Fluoride Rinse",
    brand: "ACT",
    category: "Mouthwash",
    badge: "Cavity Fighter",
    badgeColor: "#0B9E9E",
    price: "$8",
    rating: 4,
    reviews: 15620,
    description: "Fluoride mouthwash that remineralizes enamel and protects against cavities. Alcohol-free formula safe for the whole family including kids 6+.",
    whyWeLoveIt: "A 60-second rinse before bed gives your enamel fluoride protection overnight when saliva flow is lowest. Simple habit, big results.",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80",
    amazonLink: "https://amazon.com",
    tags: ["Alcohol Free", "Family Safe", "Enamel Protection"],
  },
  {
    id: 5,
    name: "Colgate Optic White Pro",
    brand: "Colgate",
    category: "Whitening",
    badge: "At-Home Whitening",
    badgeColor: "#2eb8b8",
    price: "$16",
    rating: 4,
    reviews: 9843,
    description: "3% hydrogen peroxide whitening toothpaste that removes surface stains and whitens over time. Enamel-safe formula for daily use between professional treatments.",
    whyWeLoveIt: "Perfect for maintaining your in-office whitening results. Use daily to keep stains from coffee and wine from building up again.",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&q=80",
    amazonLink: "https://amazon.com",
    tags: ["Stain Removal", "Daily Whitening", "Maintenance"],
  },
  {
    id: 6,
    name: "GUM Soft-Picks Advanced",
    brand: "GUM",
    category: "Water Flosser",
    badge: "On-The-Go Pick",
    badgeColor: "#17b08a",
    price: "$9",
    rating: 4,
    reviews: 6721,
    description: "Flexible rubber bristles clean between teeth and massage gums. No water needed — perfect for cleaning after meals when you're away from home.",
    whyWeLoveIt: "We hand these out at every cleaning appointment. Patients who use these between meals have noticeably healthier gums at their next visit.",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=400&q=80",
    amazonLink: "https://amazon.com",
    tags: ["Travel Friendly", "Gum Stimulation", "Portable"],
  },
];

function StarRow({ rating, count }: { rating: number; count: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ display: "flex", gap: 2 }}>
        {[1,2,3,4,5].map((s) => (
          <span key={s} style={{ color: s <= rating ? "#f59e0b" : "#e2e8f0", fontSize: 13 }}>★</span>
        ))}
      </div>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#94a3b8" }}>
        ({count.toLocaleString()})
      </span>
    </div>
  );
}

export default function ProductsPage() {
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = active === "All"
    ? products
    : products.filter((p) => p.category === active);

  return (
    <>
      <Navbar />

      {/* Header */}
      <div style={{ background:"linear-gradient(135deg,#042e2e 0%,#1a1a2e 60%,#074444 100%)", padding:"120px 2rem 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute",inset:0,opacity:0.03,backgroundImage:"linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",backgroundSize:"60px 60px" }} />
        <div style={{ position:"absolute",top:"-20%",right:"-10%",width:500,height:500,background:"rgba(11,158,158,0.08)",borderRadius:"50%",filter:"blur(80px)" }} />

        <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", zIndex:1, textAlign:"center" }}>
          <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:24 }}>
            <Link href="/" style={{ color:"rgba(255,255,255,0.45)",fontSize:13,textDecoration:"none",fontFamily:"var(--font-body)" }}>Home</Link>
            <span style={{ color:"rgba(255,255,255,0.25)" }}>›</span>
            <span style={{ color:"#34cba4",fontSize:13,fontFamily:"var(--font-body)" }}>Products</span>
          </div>
          <span style={{ display:"inline-block",background:"rgba(11,158,158,0.15)",border:"1px solid rgba(11,158,158,0.3)",color:"#6de0c0",fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",padding:"5px 14px",borderRadius:999,marginBottom:16,fontFamily:"var(--font-body)" }}>
            Doctor Approved
          </span>
          <h1 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(2.2rem,5vw,3.8rem)",fontWeight:700,color:"#fff",margin:"0 0 20px",lineHeight:1.1 }}>
            Products We Actually<br />
            <span style={{ background:"linear-gradient(135deg,#0B9E9E,#34cba4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
              Use & Recommend
            </span>
          </h1>
          <p style={{ color:"rgba(255,255,255,0.55)",fontSize:"clamp(15px,2vw,18px)",maxWidth:560,margin:"0 auto",lineHeight:1.7,fontFamily:"var(--font-body)" }}>
            Every product here is hand-picked by Dr. Mitchell based on clinical evidence and patient results — not sponsorships or commissions.
          </p>
        </div>
      </div>

      {/* Disclaimer banner */}
      <div style={{ background:"#f0fafa",borderBottom:"1px solid #ccefef",padding:"14px 2rem",textAlign:"center" }}>
        <p style={{ fontFamily:"var(--font-body)",fontSize:13,color:"#0B6E6E",margin:0 }}>
          🦷 <strong>From Dr. Mitchell:</strong> These are products I personally recommend to my patients. We receive no commission — just honest picks that work.
        </p>
      </div>

      {/* Content */}
      <div style={{ background:"#f8fafa",padding:"80px 2rem" }}>
        <div style={{ maxWidth:1280,margin:"0 auto" }}>

          {/* Filter */}
          <div style={{ display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",marginBottom:56 }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                padding:"9px 22px", borderRadius:999, fontSize:13, fontWeight:600,
                fontFamily:"var(--font-body)", cursor:"pointer", transition:"all 0.2s",
                border: active===cat ? "none" : "1px solid #e0f0f0",
                background: active===cat ? "#0B6E6E" : "#fff",
                color: active===cat ? "#fff" : "#64748b",
                boxShadow: active===cat ? "0 4px 14px rgba(11,110,110,0.3)" : "none",
              }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Products grid */}
          <div className="products-grid">
            {filtered.map((product) => (
              <div key={product.id} style={{ background:"#fff", borderRadius:24, overflow:"hidden", border:"1px solid #e8f4f4", boxShadow:"0 4px 24px rgba(11,110,110,0.06)", display:"flex", flexDirection:"column", transition:"all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 20px 48px rgba(11,110,110,0.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 24px rgba(11,110,110,0.06)"; }}
              >
                {/* Image */}
                <div style={{ position:"relative", aspectRatio:"4/3", overflow:"hidden", background:"#f8fcfc" }}>
                  <img src={product.image} alt={product.name} style={{ width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.4s" }}
                    onMouseEnter={(e) => e.currentTarget.style.transform="scale(1.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform="scale(1)"}
                  />
                  {/* Badge */}
                  <div style={{ position:"absolute",top:12,left:12,background:product.badgeColor,color:"#fff",fontSize:11,fontWeight:600,padding:"5px 12px",borderRadius:999,fontFamily:"var(--font-body)" }}>
                    {product.badge}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding:"24px 28px",display:"flex",flexDirection:"column",gap:12,flex:1 }}>
                  <div>
                    <p style={{ fontFamily:"var(--font-body)",fontSize:11,fontWeight:600,color:"#94a3b8",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 4px" }}>{product.brand}</p>
                    <h3 style={{ fontFamily:"var(--font-display)",fontSize:20,fontWeight:600,color:"#1a1a2e",margin:0,lineHeight:1.2 }}>{product.name}</h3>
                  </div>

                  <StarRow rating={product.rating} count={product.reviews} />

                  <p style={{ fontFamily:"var(--font-body)",fontSize:14,color:"#64748b",lineHeight:1.7,margin:0 }}>
                    {product.description}
                  </p>

                  {/* Why we love it */}
                  <div style={{ background:"#f0fafa",borderRadius:12,padding:"12px 16px",border:"1px solid #ccefef" }}>
                    <p style={{ fontFamily:"var(--font-body)",fontSize:11,fontWeight:700,color:"#0B6E6E",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 4px" }}>
                      🦷 Why Dr. Mitchell recommends it
                    </p>
                    <p style={{ fontFamily:"var(--font-body)",fontSize:13,color:"#374151",lineHeight:1.6,margin:0,fontStyle:"italic" }}>
                      &ldquo;{product.whyWeLoveIt}&rdquo;
                    </p>
                  </div>

                  {/* Tags */}
                  <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>
                    {product.tags.map((tag) => (
                      <span key={tag} style={{ background:"#f8fcfc",border:"1px solid #e0f0f0",color:"#64748b",fontSize:11,padding:"3px 10px",borderRadius:999,fontFamily:"var(--font-body)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"auto",paddingTop:12,borderTop:"1px solid #f0fafa" }}>
                    <span style={{ fontFamily:"var(--font-display)",fontSize:24,fontWeight:700,color:"#1a1a2e" }}>{product.price}</span>
                    <a href={product.amazonLink} target="_blank" rel="noreferrer" style={{ display:"inline-flex",alignItems:"center",gap:6,background:"#0B6E6E",color:"#fff",fontWeight:600,fontSize:13,padding:"10px 18px",borderRadius:12,textDecoration:"none",fontFamily:"var(--font-body)",boxShadow:"0 4px 14px rgba(11,110,110,0.3)" }}>
                      View on Amazon →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div style={{ marginTop:72,background:"#fff",borderRadius:24,padding:"40px",border:"1px solid #e8f4f4",display:"flex",flexWrap:"wrap",gap:32,alignItems:"center",justifyContent:"space-between" }}>
            <div style={{ maxWidth:560 }}>
              <h3 style={{ fontFamily:"var(--font-display)",fontSize:22,fontWeight:600,color:"#1a1a2e",margin:"0 0 12px" }}>
                Want a personalized recommendation?
              </h3>
              <p style={{ fontFamily:"var(--font-body)",fontSize:15,color:"#64748b",lineHeight:1.7,margin:0 }}>
                Every mouth is different. Book a consultation and Dr. Mitchell will recommend the exact products for your specific situation — sensitivity, gum health, whitening goals, and more.
              </p>
            </div>
            <Link href="/contact" style={{ display:"inline-block",background:"#0B6E6E",color:"#fff",fontWeight:600,fontSize:15,padding:"16px 32px",borderRadius:14,textDecoration:"none",fontFamily:"var(--font-body)",boxShadow:"0 8px 24px rgba(11,110,110,0.3)",whiteSpace:"nowrap" }}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 1024px) { .products-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 640px)  { .products-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}