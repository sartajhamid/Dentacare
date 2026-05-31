"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const reviews = [
  { id: 1,  name: "Jennifer Walsh",    location: "Austin, TX",       rating: 5, treatment: "Invisalign",          avatar: "JW", date: "May 2025",  text: "I was terrified of dentists my whole life. Dr. Mitchell changed everything. The office is calming, the team is endlessly patient, and my teeth have never looked better. The Invisalign results were jaw-dropping — I wish I'd done it years ago." },
  { id: 2,  name: "Marcus Thompson",   location: "Austin, TX",       rating: 5, treatment: "Dental Implants",     avatar: "MT", date: "Apr 2025",  text: "Got two implants done here and the process was completely seamless. Very transparent about pricing from day one, zero hidden fees. The final result looks and feels completely natural. Highly recommend to anyone considering implants." },
  { id: 3,  name: "Sofia Reyes",       location: "Cedar Park, TX",   rating: 5, treatment: "Pediatric Dentistry", avatar: "SR", date: "Apr 2025",  text: "Brought my 7-year-old for her first visit and she actually asked when we could come back! The pediatric area is adorable, the staff made her feel so comfortable. We've found our family dentist for life." },
  { id: 4,  name: "David Park",        location: "Round Rock, TX",   rating: 5, treatment: "Teeth Whitening",     avatar: "DP", date: "Mar 2025",  text: "The whitening results honestly surprised me — I expected subtle but got dramatic. Six shades whiter in one session, professional, quick, no sensitivity issues. Worth every single penny." },
  { id: 5,  name: "Amanda Foster",     location: "Austin, TX",       rating: 5, treatment: "Veneers",             avatar: "AF", date: "Mar 2025",  text: "I had chipped and uneven teeth my whole life. Dr. Mitchell gave me veneers that look completely natural — not that fake bright white look. Strangers now compliment my smile constantly. Life changing." },
  { id: 6,  name: "Robert Kim",        location: "Pflugerville, TX", rating: 5, treatment: "General Dentistry",   avatar: "RK", date: "Feb 2025",  text: "Switched from my old dentist after years of dreading appointments. First visit here was completely different — thorough, relaxed, and they actually explained everything. Already recommended to my whole family." },
  { id: 7,  name: "Priya Nair",        location: "Austin, TX",       rating: 5, treatment: "Invisalign",          avatar: "PN", date: "Feb 2025",  text: "As an adult who was embarrassed about crooked teeth, I was nervous about Invisalign. The team made the whole process easy and private. 14 months later I have the smile I always wanted." },
  { id: 8,  name: "Chris Delgado",     location: "Georgetown, TX",   rating: 5, treatment: "Dental Implants",     avatar: "CD", date: "Jan 2025",  text: "After losing a tooth in an accident I was devastated. Dr. Mitchell walked me through every option with no pressure. The implant looks identical to my natural teeth. Couldn't be happier with the outcome." },
  { id: 9,  name: "Lauren Mitchell",   location: "Austin, TX",       rating: 5, treatment: "Teeth Whitening",     avatar: "LM", date: "Jan 2025",  text: "Super easy process, super effective result. Came in on a Tuesday, left with a noticeably brighter smile. The team is warm and genuine — not pushy at all. Will definitely be back." },
];

const stats = [
  { num: "4.9", label: "Average Rating",   sub: "Based on 200+ reviews", icon: "⭐" },
  { num: "98%", label: "Would Recommend",  sub: "To friends and family",  icon: "💚" },
  { num: "200+", label: "Google Reviews",  sub: "Verified patients",      icon: "🏆" },
  { num: "5★",  label: "Yelp Rating",      sub: "Consistently rated",     icon: "✨" },
];

const avatarColors: Record<string, string> = {
  JW: "#0B6E6E", MT: "#095858", SR: "#34cba4",
  DP: "#0B9E9E", AF: "#074444", RK: "#2eb8b8",
  PN: "#17b08a", CD: "#042e2e", LM: "#5ec9c9",
};

function StarRow({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1,2,3,4,5].map((s) => (
        <span key={s} style={{ color: s <= rating ? "#f59e0b" : "#e2e8f0", fontSize: 14 }}>★</span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [filter, setFilter] = useState("All");

  const treatments = ["All", ...Array.from(new Set(reviews.map((r) => r.treatment)))];

  const filtered = filter === "All"
    ? reviews
    : reviews.filter((r) => r.treatment === filter);

  return (
    <>
      <Navbar />

      {/* Header */}
      <div style={{ background:"linear-gradient(135deg,#042e2e 0%,#1a1a2e 60%,#074444 100%)", padding:"120px 2rem 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute",inset:0,opacity:0.03,backgroundImage:"linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",backgroundSize:"60px 60px" }} />
        <div style={{ position:"absolute",top:"-20%",right:"-10%",width:500,height:500,background:"rgba(11,158,158,0.08)",borderRadius:"50%",filter:"blur(80px)" }} />

        <div style={{ maxWidth:1280,margin:"0 auto",position:"relative",zIndex:1,textAlign:"center" }}>
          <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:24 }}>
            <Link href="/" style={{ color:"rgba(255,255,255,0.45)",fontSize:13,textDecoration:"none",fontFamily:"var(--font-body)" }}>Home</Link>
            <span style={{ color:"rgba(255,255,255,0.25)" }}>›</span>
            <span style={{ color:"#34cba4",fontSize:13,fontFamily:"var(--font-body)" }}>Reviews</span>
          </div>
          <span style={{ display:"inline-block",background:"rgba(11,158,158,0.15)",border:"1px solid rgba(11,158,158,0.3)",color:"#6de0c0",fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",padding:"5px 14px",borderRadius:999,marginBottom:16,fontFamily:"var(--font-body)" }}>
            Patient Stories
          </span>
          <h1 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(2.2rem,5vw,3.8rem)",fontWeight:700,color:"#fff",margin:"0 0 20px",lineHeight:1.1 }}>
            5,000+ Patients.<br />
            <span style={{ background:"linear-gradient(135deg,#0B9E9E,#34cba4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
              Every Single One Matters.
            </span>
          </h1>
          <p style={{ color:"rgba(255,255,255,0.55)",fontSize:"clamp(15px,2vw,18px)",maxWidth:520,margin:"0 auto 48px",lineHeight:1.7,fontFamily:"var(--font-body)" }}>
            Don&apos;t take our word for it — read what real patients say about their experience at DentaCare Pro.
          </p>

          {/* Rating overview */}
          <div style={{ display:"inline-flex",alignItems:"center",gap:16,background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:20,padding:"20px 32px",backdropFilter:"blur(8px)" }}>
            <div style={{ textAlign:"left" }}>
              <div style={{ fontFamily:"var(--font-display)",fontSize:48,fontWeight:700,color:"#fff",lineHeight:1 }}>4.9</div>
              <div style={{ display:"flex",gap:3,marginTop:6,marginBottom:4 }}>
                {[1,2,3,4,5].map((s) => <span key={s} style={{ color:"#f59e0b",fontSize:18 }}>★</span>)}
              </div>
              <div style={{ fontFamily:"var(--font-body)",fontSize:12,color:"rgba(255,255,255,0.5)" }}>200+ Google Reviews</div>
            </div>
            <div style={{ width:1,height:60,background:"rgba(255,255,255,0.15)" }} />
            <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
              {[5,4,3,2,1].map((star) => (
                <div key={star} style={{ display:"flex",alignItems:"center",gap:8 }}>
                  <span style={{ fontFamily:"var(--font-body)",fontSize:11,color:"rgba(255,255,255,0.5)",width:8 }}>{star}</span>
                  <div style={{ width:100,height:4,background:"rgba(255,255,255,0.1)",borderRadius:2,overflow:"hidden" }}>
                    <div style={{ height:"100%",background:"#34cba4",borderRadius:2,width: star===5?"88%":star===4?"8%":star===3?"3%":"1%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background:"#0B6E6E",padding:"48px 2rem" }}>
        <div style={{ maxWidth:1280,margin:"0 auto" }}>
          <div className="review-stats">
            {stats.map((s, i) => (
              <div key={s.label} style={{ textAlign:"center",padding:"0 2rem",position:"relative" }}>
                {i > 0 && <div style={{ position:"absolute",left:0,top:"15%",height:"70%",width:1,background:"rgba(255,255,255,0.15)" }} />}
                <div style={{ fontSize:28,marginBottom:8 }}>{s.icon}</div>
                <div style={{ fontFamily:"var(--font-display)",fontSize:"clamp(1.8rem,3vw,2.5rem)",fontWeight:700,color:"#fff",lineHeight:1,marginBottom:6 }}>{s.num}</div>
                <div style={{ fontFamily:"var(--font-body)",fontSize:14,color:"rgba(255,255,255,0.9)",fontWeight:600,marginBottom:2 }}>{s.label}</div>
                <div style={{ fontFamily:"var(--font-body)",fontSize:12,color:"rgba(255,255,255,0.55)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div style={{ background:"#f8fafa",padding:"80px 2rem" }}>
        <div style={{ maxWidth:1280,margin:"0 auto" }}>

          {/* Filter */}
          <div style={{ display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",marginBottom:56 }}>
            {treatments.map((t) => (
              <button key={t} onClick={() => setFilter(t)} style={{
                padding:"9px 20px",borderRadius:999,fontSize:13,fontWeight:600,
                fontFamily:"var(--font-body)",cursor:"pointer",transition:"all 0.2s",
                border: filter===t ? "none" : "1px solid #e0f0f0",
                background: filter===t ? "#0B6E6E" : "#fff",
                color: filter===t ? "#fff" : "#64748b",
                boxShadow: filter===t ? "0 4px 14px rgba(11,110,110,0.3)" : "none",
              }}>
                {t}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="reviews-grid">
            {filtered.map((review) => (
              <div key={review.id} style={{ background:"#fff",borderRadius:20,padding:"28px",border:"1px solid #e8f4f4",boxShadow:"0 4px 20px rgba(11,110,110,0.04)",display:"flex",flexDirection:"column",gap:16,transition:"all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 20px 40px rgba(11,110,110,0.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 20px rgba(11,110,110,0.04)"; }}
              >
                {/* Top */}
                <div style={{ display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12 }}>
                  <div style={{ display:"flex",alignItems:"center",gap:12 }}>
                    <div style={{ width:44,height:44,borderRadius:12,background:avatarColors[review.avatar]||"#0B6E6E",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:13,fontFamily:"var(--font-body)",flexShrink:0 }}>
                      {review.avatar}
                    </div>
                    <div>
                      <p style={{ fontFamily:"var(--font-body)",fontWeight:700,fontSize:14,color:"#1a1a2e",margin:0 }}>{review.name}</p>
                      <p style={{ fontFamily:"var(--font-body)",fontSize:12,color:"#94a3b8",margin:0 }}>{review.location}</p>
                    </div>
                  </div>
                  <div style={{ textAlign:"right",flexShrink:0 }}>
                    <StarRow rating={review.rating} />
                    <p style={{ fontFamily:"var(--font-body)",fontSize:11,color:"#94a3b8",margin:"4px 0 0" }}>{review.date}</p>
                  </div>
                </div>

                {/* Quote */}
                <p style={{ fontFamily:"var(--font-body)",fontSize:14,color:"#374151",lineHeight:1.75,margin:0,flex:1 }}>
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Treatment tag */}
                <div>
                  <span style={{ background:"#f0fafa",color:"#0B6E6E",fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:999,fontFamily:"var(--font-body)",border:"1px solid #ccefef" }}>
                    {review.treatment}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Leave a review CTA */}
          <div style={{ textAlign:"center",marginTop:72 }}>
            <p style={{ fontFamily:"var(--font-body)",color:"#64748b",fontSize:16,marginBottom:24 }}>
              Had a great experience? We&apos;d love to hear from you.
            </p>
            <div style={{ display:"flex",flexWrap:"wrap",gap:16,justifyContent:"center" }}>
              <a href="https://google.com" target="_blank" rel="noreferrer" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",color:"#1a1a2e",fontWeight:600,fontSize:14,padding:"13px 24px",borderRadius:12,textDecoration:"none",fontFamily:"var(--font-body)",border:"1px solid #e2e8f0",boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
                <span style={{ fontSize:18 }}>🔍</span> Leave a Google Review
              </a>
              <Link href="/contact" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#0B6E6E",color:"#fff",fontWeight:600,fontSize:14,padding:"13px 24px",borderRadius:12,textDecoration:"none",fontFamily:"var(--font-body)",boxShadow:"0 4px 14px rgba(11,110,110,0.3)" }}>
                <span style={{ fontSize:18 }}>📅</span> Book Your Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        .review-stats {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          align-items: center;
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .review-stats  { grid-template-columns: repeat(2,1fr); gap:32px; }
          .reviews-grid  { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 640px) {
          .review-stats  { grid-template-columns: repeat(2,1fr); }
          .reviews-grid  { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}