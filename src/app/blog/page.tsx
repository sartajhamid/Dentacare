"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const categories = ["All", "Oral Hygiene", "Cosmetic", "Orthodontics", "Gum Health", "Nutrition", "Kids"];

const posts = [
  {
    id: 1,
    title: "Why You Should Replace Your Toothbrush More Often Than You Think",
    excerpt: "Most people keep their toothbrush 3x longer than recommended. Here's why that's silently damaging your gum health — and the simple fix.",
    category: "Oral Hygiene",
    readTime: "4 min read",
    date: "May 14, 2025",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80",
    slug: "replace-toothbrush-often",
    featured: true,
  },
  {
    id: 2,
    title: "Invisalign vs Braces: An Honest Breakdown for Adults in 2025",
    excerpt: "Both work. But one fits your lifestyle better. We break down cost, comfort, timeline, and results — no sugarcoating.",
    category: "Orthodontics",
    readTime: "6 min read",
    date: "Apr 28, 2025",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    slug: "invisalign-vs-braces-2025",
    featured: false,
  },
  {
    id: 3,
    title: "The Real Reason Your Gums Bleed When You Floss",
    excerpt: "Hint: it's not because you're flossing too hard. Understanding the actual cause is the first step to fixing it permanently.",
    category: "Gum Health",
    readTime: "5 min read",
    date: "Apr 10, 2025",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&q=80",
    slug: "why-gums-bleed-flossing",
    featured: false,
  },
  {
    id: 4,
    title: "6 Foods That Are Secretly Destroying Your Enamel",
    excerpt: "Some of these will surprise you. A dentist's honest list of the everyday foods and drinks that cause the most enamel damage.",
    category: "Nutrition",
    readTime: "5 min read",
    date: "Mar 22, 2025",
    image: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80",
    slug: "foods-destroying-enamel",
    featured: false,
  },
  {
    id: 5,
    title: "How to Make Your Teeth Whitening Results Last 2x Longer",
    excerpt: "Most people undo their whitening results within weeks. These simple habits will keep your smile bright for months.",
    category: "Cosmetic",
    readTime: "4 min read",
    date: "Mar 8, 2025",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80",
    slug: "make-whitening-last-longer",
    featured: false,
  },
  {
    id: 6,
    title: "When Should Kids Get Their First Dental Appointment?",
    excerpt: "Earlier than most parents think. Here's what to expect at your child's first visit and how to make it a positive experience.",
    category: "Kids",
    readTime: "4 min read",
    date: "Feb 19, 2025",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80",
    slug: "kids-first-dental-visit",
    featured: false,
  },
  {
    id: 7,
    title: "Water Flosser vs String Floss: Which is Actually Better?",
    excerpt: "The science is clearer than you think. We break down the clinical evidence and tell you what we actually recommend to our patients.",
    category: "Oral Hygiene",
    readTime: "5 min read",
    date: "Feb 5, 2025",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
    slug: "water-flosser-vs-string-floss",
    featured: false,
  },
  {
    id: 8,
    title: "Dental Implants vs Bridges: A Cost & Longevity Comparison",
    excerpt: "Implants cost more upfront but bridges cost more over time. Here's the full 10-year cost breakdown to help you decide.",
    category: "Cosmetic",
    readTime: "7 min read",
    date: "Jan 28, 2025",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=800&q=80",
    slug: "implants-vs-bridges-comparison",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "Oral Hygiene": "#0B6E6E",
  "Cosmetic":     "#095858",
  "Orthodontics": "#2eb8b8",
  "Gum Health":   "#34cba4",
  "Nutrition":    "#17b08a",
  "Kids":         "#0B9E9E",
};

export default function BlogPage() {
  const [active, setActive] = useState("All");

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);
  const filteredRest = active === "All"
    ? rest
    : rest.filter((p) => p.category === active);

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
            <span style={{ color:"#34cba4",fontSize:13,fontFamily:"var(--font-body)" }}>Blog</span>
          </div>
          <span style={{ display:"inline-block",background:"rgba(11,158,158,0.15)",border:"1px solid rgba(11,158,158,0.3)",color:"#6de0c0",fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",padding:"5px 14px",borderRadius:999,marginBottom:16,fontFamily:"var(--font-body)" }}>
            Dental Health Tips
          </span>
          <h1 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(2.2rem,5vw,3.8rem)",fontWeight:700,color:"#fff",margin:"0 0 20px",lineHeight:1.1 }}>
            The Honest Dental<br />
            <span style={{ background:"linear-gradient(135deg,#0B9E9E,#34cba4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
              Health Blog
            </span>
          </h1>
          <p style={{ color:"rgba(255,255,255,0.55)",fontSize:"clamp(15px,2vw,18px)",maxWidth:520,margin:"0 auto",lineHeight:1.7,fontFamily:"var(--font-body)" }}>
            Real advice from a real dentist — no fluff, no scare tactics. Just practical tips to help you take better care of your smile.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ background:"#f8fafa",padding:"80px 2rem" }}>
        <div style={{ maxWidth:1280,margin:"0 auto" }}>

          {/* Featured post */}
          {featured && active === "All" && (
            <div style={{ marginBottom:64 }}>
              <p style={{ fontFamily:"var(--font-body)",fontSize:11,fontWeight:700,color:"#0B6E6E",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:20 }}>
                ⭐ Featured Article
              </p>
              <div style={{ background:"#fff",borderRadius:24,overflow:"hidden",border:"1px solid #e8f4f4",boxShadow:"0 8px 40px rgba(11,110,110,0.08)",display:"grid",gridTemplateColumns:"1fr 1fr" }} className="featured-grid">
                <div style={{ aspectRatio:"4/3",overflow:"hidden" }}>
                  <img src={featured.image} alt={featured.title} style={{ width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.4s" }}
                    onMouseEnter={(e) => e.currentTarget.style.transform="scale(1.03)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform="scale(1)"}
                  />
                </div>
                <div style={{ padding:"48px 44px",display:"flex",flexDirection:"column",justifyContent:"center",gap:20 }}>
                  <div style={{ display:"flex",alignItems:"center",gap:10 }}>
                    <span style={{ background:categoryColors[featured.category]||"#0B6E6E",color:"#fff",fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:999,fontFamily:"var(--font-body)" }}>
                      {featured.category}
                    </span>
                    <span style={{ fontFamily:"var(--font-body)",fontSize:12,color:"#94a3b8" }}>{featured.readTime} · {featured.date}</span>
                  </div>
                  <h2 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(1.4rem,2.5vw,2rem)",fontWeight:700,color:"#1a1a2e",margin:0,lineHeight:1.25 }}>
                    {featured.title}
                  </h2>
                  <p style={{ fontFamily:"var(--font-body)",fontSize:15,color:"#64748b",lineHeight:1.75,margin:0 }}>
                    {featured.excerpt}
                  </p>
                  <Link href={`/blog/${featured.slug}`} style={{ display:"inline-flex",alignItems:"center",gap:6,background:"#0B6E6E",color:"#fff",fontWeight:600,fontSize:14,padding:"12px 24px",borderRadius:12,textDecoration:"none",fontFamily:"var(--font-body)",width:"fit-content",boxShadow:"0 4px 14px rgba(11,110,110,0.3)" }}>
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Filter */}
          <div style={{ display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",marginBottom:48 }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                padding:"9px 22px",borderRadius:999,fontSize:13,fontWeight:600,
                fontFamily:"var(--font-body)",cursor:"pointer",transition:"all 0.2s",
                border: active===cat ? "none" : "1px solid #e0f0f0",
                background: active===cat ? "#0B6E6E" : "#fff",
                color: active===cat ? "#fff" : "#64748b",
                boxShadow: active===cat ? "0 4px 14px rgba(11,110,110,0.3)" : "none",
              }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="blog-grid">
            {filteredRest.map((post) => (
              <div key={post.id} style={{ background:"#fff",borderRadius:20,overflow:"hidden",border:"1px solid #e8f4f4",boxShadow:"0 4px 20px rgba(11,110,110,0.05)",display:"flex",flexDirection:"column",transition:"all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 20px 48px rgba(11,110,110,0.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 20px rgba(11,110,110,0.05)"; }}
              >
                <div style={{ aspectRatio:"16/9",overflow:"hidden" }}>
                  <img src={post.image} alt={post.title} style={{ width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.4s" }}
                    onMouseEnter={(e) => e.currentTarget.style.transform="scale(1.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform="scale(1)"}
                  />
                </div>
                <div style={{ padding:"24px 28px",display:"flex",flexDirection:"column",gap:12,flex:1 }}>
                  <div style={{ display:"flex",alignItems:"center",gap:10 }}>
                    <span style={{ background:categoryColors[post.category]||"#0B6E6E",color:"#fff",fontSize:10,fontWeight:600,padding:"3px 10px",borderRadius:999,fontFamily:"var(--font-body)" }}>
                      {post.category}
                    </span>
                    <span style={{ fontFamily:"var(--font-body)",fontSize:11,color:"#94a3b8" }}>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontFamily:"var(--font-display)",fontSize:18,fontWeight:600,color:"#1a1a2e",margin:0,lineHeight:1.3,flex:1 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontFamily:"var(--font-body)",fontSize:13,color:"#64748b",lineHeight:1.7,margin:0 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:12,borderTop:"1px solid #f0fafa",marginTop:"auto" }}>
                    <span style={{ fontFamily:"var(--font-body)",fontSize:12,color:"#94a3b8" }}>{post.date}</span>
                    <Link href={`/blog/${post.slug}`} style={{ fontFamily:"var(--font-body)",fontSize:13,fontWeight:600,color:"#0B6E6E",textDecoration:"none" }}>
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div style={{ marginTop:72,background:"linear-gradient(135deg,#042e2e,#0B6E6E)",borderRadius:28,padding:"60px 40px",textAlign:"center" }}>
            <h2 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(1.6rem,3vw,2.4rem)",fontWeight:700,color:"#fff",margin:"0 0 12px" }}>
              Get Dental Tips in Your Inbox
            </h2>
            <p style={{ fontFamily:"var(--font-body)",color:"rgba(255,255,255,0.65)",fontSize:16,margin:"0 0 32px",lineHeight:1.7 }}>
              Monthly tips from Dr. Mitchell — practical, honest, and actually useful.
            </p>
            <div style={{ display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap",maxWidth:480,margin:"0 auto" }}>
              <input type="email" placeholder="your@email.com" style={{ flex:1,minWidth:200,padding:"13px 18px",borderRadius:12,border:"none",fontSize:14,fontFamily:"var(--font-body)",outline:"none" }} />
              <button style={{ background:"#34cba4",color:"#fff",border:"none",padding:"13px 24px",borderRadius:12,fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"var(--font-body)",whiteSpace:"nowrap" }}>
                Subscribe →
              </button>
            </div>
            <p style={{ fontFamily:"var(--font-body)",fontSize:12,color:"rgba(255,255,255,0.4)",margin:"16px 0 0" }}>
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        .featured-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 28px;
        }
        @media (max-width: 1024px) {
          .featured-grid { grid-template-columns: 1fr; }
          .blog-grid     { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 640px) {
          .blog-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}