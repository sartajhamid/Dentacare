"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const credentials = [
  { icon: "🎓", title: "DDS — Harvard School of Dental Medicine", sub: "Doctor of Dental Surgery, 2008" },
  { icon: "🏅", title: "Board Certified — American Dental Association", sub: "Licensed in Texas since 2009" },
  { icon: "🦷", title: "Fellow — Academy of General Dentistry", sub: "FAGD Designation, 2015" },
  { icon: "✨", title: "Invisalign Platinum Provider", sub: "Top 1% of providers in the US" },
];

const values = [
  { icon: "💚", title: "Gentle Care", desc: "We understand dental anxiety is real. Every procedure is explained clearly and performed with your comfort as the priority." },
  { icon: "🔬", title: "Latest Technology", desc: "Digital X-rays, 3D scanning, laser dentistry — we invest in modern tools so your treatment is faster, safer, and more precise." },
  { icon: "👨‍👩‍👧", title: "Family Focused", desc: "From toddlers to grandparents, we treat every generation. One trusted practice for your whole family, for life." },
  { icon: "💰", title: "Transparent Pricing", desc: "No surprise bills. We discuss costs upfront, offer payment plans, and work with most major insurance providers." },
];

const team = [
  { name: "Dr. Sarah Mitchell", role: "Lead Dentist & Founder", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80", bio: "15+ years transforming smiles across Austin. Specializes in cosmetic dentistry and full-mouth rehabilitation." },
  { name: "Dr. James Okafor", role: "Orthodontist", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80", bio: "Invisalign specialist with a passion for creating perfectly aligned smiles in the least invasive way possible." },
  { name: "Maria Santos", role: "Dental Hygienist", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80", bio: "10 years of experience making cleanings painless and educational. Patients' favorite team member." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <div style={{
        background: "linear-gradient(135deg,#042e2e 0%,#1a1a2e 60%,#074444 100%)",
        padding: "120px 2rem 80px", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position:"absolute",inset:0,opacity:0.03,backgroundImage:"linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",backgroundSize:"60px 60px" }} />
        <div style={{ position:"absolute",top:"-20%",right:"-10%",width:500,height:500,background:"rgba(11,158,158,0.08)",borderRadius:"50%",filter:"blur(80px)" }} />

        <div style={{ maxWidth:1280,margin:"0 auto",position:"relative",zIndex:1 }}>
          <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:24 }}>
            <Link href="/" style={{ color:"rgba(255,255,255,0.45)",fontSize:13,textDecoration:"none",fontFamily:"var(--font-body)" }}>Home</Link>
            <span style={{ color:"rgba(255,255,255,0.25)" }}>›</span>
            <span style={{ color:"#34cba4",fontSize:13,fontFamily:"var(--font-body)" }}>About</span>
          </div>
          <span style={{ display:"inline-block",background:"rgba(11,158,158,0.15)",border:"1px solid rgba(11,158,158,0.3)",color:"#6de0c0",fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",padding:"5px 14px",borderRadius:999,marginBottom:16,fontFamily:"var(--font-body)" }}>
            Our Story
          </span>

          <div className="about-hero-grid">
            <div>
              <h1 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(2.2rem,5vw,3.8rem)",fontWeight:700,color:"#fff",margin:"0 0 24px",lineHeight:1.1 }}>
                15 Years of<br />
                <span style={{ background:"linear-gradient(135deg,#0B9E9E,#34cba4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
                  Changing Smiles,
                </span><br />
                Changing Lives.
              </h1>
              <p style={{ color:"rgba(255,255,255,0.6)",fontSize:"clamp(15px,2vw,18px)",lineHeight:1.8,maxWidth:520,margin:"0 0 32px",fontFamily:"var(--font-body)" }}>
                DentaCare Pro was founded on a simple belief — every person deserves dental care that is gentle, honest, and genuinely life-changing. We&apos;ve built a practice where patients actually look forward to their appointments.
              </p>
              <Link href="/contact" style={{ display:"inline-block",background:"#0B6E6E",color:"#fff",fontWeight:600,fontSize:15,padding:"14px 28px",borderRadius:14,textDecoration:"none",fontFamily:"var(--font-body)",boxShadow:"0 8px 24px rgba(11,110,110,0.4)" }}>
                Meet the Team
              </Link>
            </div>

            {/* Stats */}
            <div className="about-stats-grid">
              {[
                { num: "5,000+", label: "Patients Treated" },
                { num: "15+",    label: "Years of Experience" },
                { num: "4.9★",   label: "Google Rating" },
                { num: "99%",    label: "Satisfaction Rate" },
              ].map((s) => (
                <div key={s.label} style={{ background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:20,padding:"28px 24px",textAlign:"center",backdropFilter:"blur(8px)" }}>
                  <div style={{ fontFamily:"var(--font-display)",fontSize:"clamp(1.8rem,3vw,2.5rem)",fontWeight:700,color:"#fff",lineHeight:1,marginBottom:8 }}>{s.num}</div>
                  <div style={{ fontFamily:"var(--font-body)",fontSize:13,color:"rgba(255,255,255,0.55)",letterSpacing:"0.05em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Doctor Section */}
      <div style={{ background:"#fff",padding:"100px 2rem" }}>
        <div style={{ maxWidth:1280,margin:"0 auto" }}>
          <div className="doctor-grid">

            {/* Image */}
            <div style={{ position:"relative" }}>
              <div style={{ borderRadius:24,overflow:"hidden",aspectRatio:"3/4",position:"relative",boxShadow:"0 32px 64px rgba(11,110,110,0.15)" }}>
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80" alt="Dr. Sarah Mitchell" style={{ width:"100%",height:"100%",objectFit:"cover" }} />
              </div>
              {/* Floating credential card */}
              <div style={{ position:"absolute",bottom:-24,right:-24,background:"#fff",borderRadius:20,padding:"20px 24px",boxShadow:"0 20px 48px rgba(11,110,110,0.15)",border:"1px solid #e8f4f4",minWidth:220 }}>
                <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:12 }}>
                  <div style={{ width:40,height:40,background:"#f0fafa",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20 }}>🎓</div>
                  <div>
                    <p style={{ fontFamily:"var(--font-body)",fontWeight:700,fontSize:13,color:"#1a1a2e",margin:0 }}>Harvard DDS</p>
                    <p style={{ fontFamily:"var(--font-body)",fontSize:11,color:"#64748b",margin:0 }}>Class of 2008</p>
                  </div>
                </div>
                <div style={{ display:"flex",alignItems:"center",gap:12 }}>
                  <div style={{ width:40,height:40,background:"#f0fafa",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20 }}>✨</div>
                  <div>
                    <p style={{ fontFamily:"var(--font-body)",fontWeight:700,fontSize:13,color:"#1a1a2e",margin:0 }}>Invisalign Platinum</p>
                    <p style={{ fontFamily:"var(--font-body)",fontSize:11,color:"#64748b",margin:0 }}>Top 1% Provider</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div style={{ display:"flex",flexDirection:"column",gap:32 }}>
              <div>
                <span style={{ display:"inline-block",background:"#f0fafa",color:"#0B6E6E",fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",padding:"5px 14px",borderRadius:999,marginBottom:16,fontFamily:"var(--font-body)",border:"1px solid #ccefef" }}>
                  Meet the Doctor
                </span>
                <h2 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:700,color:"#1a1a2e",margin:"0 0 20px",lineHeight:1.2 }}>
                  Dr. Sarah Mitchell, <em style={{ color:"#0B6E6E" }}>DDS</em>
                </h2>
                <p style={{ fontFamily:"var(--font-body)",fontSize:16,color:"#64748b",lineHeight:1.8,margin:"0 0 16px" }}>
                  Growing up afraid of the dentist herself, Dr. Mitchell built DentaCare Pro to be the practice she wished had existed. Every detail — from the calming interior to the no-rush appointments — was intentional.
                </p>
                <p style={{ fontFamily:"var(--font-body)",fontSize:16,color:"#64748b",lineHeight:1.8,margin:0 }}>
                  After graduating top of her class at Harvard and completing her residency in cosmetic dentistry at UT Austin, she opened her practice in 2010. Today she leads a team of specialists who share her belief that dentistry should never feel scary.
                </p>
              </div>

              {/* Credentials */}
              <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
                {credentials.map((c) => (
                  <div key={c.title} style={{ display:"flex",alignItems:"center",gap:16,background:"#f8fcfc",borderRadius:14,padding:"16px 20px",border:"1px solid #e8f4f4" }}>
                    <span style={{ fontSize:22,flexShrink:0 }}>{c.icon}</span>
                    <div>
                      <p style={{ fontFamily:"var(--font-body)",fontWeight:600,fontSize:14,color:"#1a1a2e",margin:0 }}>{c.title}</p>
                      <p style={{ fontFamily:"var(--font-body)",fontSize:12,color:"#64748b",margin:0 }}>{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div style={{ background:"#f8fafa",padding:"100px 2rem" }}>
        <div style={{ maxWidth:1280,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:64 }}>
            <span style={{ display:"inline-block",background:"#f0fafa",color:"#0B6E6E",fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",padding:"5px 14px",borderRadius:999,marginBottom:16,fontFamily:"var(--font-body)",border:"1px solid #ccefef" }}>Why Choose Us</span>
            <h2 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(1.8rem,4vw,3rem)",fontWeight:700,color:"#1a1a2e",margin:"0 0 16px" }}>
              The DentaCare <em style={{ color:"#0B6E6E" }}>Difference</em>
            </h2>
            <p style={{ fontFamily:"var(--font-body)",color:"#64748b",fontSize:17,maxWidth:500,margin:"0 auto",lineHeight:1.7 }}>
              We&apos;re not just cleaning teeth. We&apos;re building lasting relationships with patients who trust us completely.
            </p>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} style={{ background:"#fff",borderRadius:20,padding:"32px 28px",border:"1px solid #e8f4f4",boxShadow:"0 4px 20px rgba(11,110,110,0.04)" }}>
                <div style={{ fontSize:36,marginBottom:20 }}>{v.icon}</div>
                <h3 style={{ fontFamily:"var(--font-display)",fontSize:20,fontWeight:600,color:"#1a1a2e",margin:"0 0 12px" }}>{v.title}</h3>
                <p style={{ fontFamily:"var(--font-body)",fontSize:14,color:"#64748b",lineHeight:1.7,margin:0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div style={{ background:"#fff",padding:"100px 2rem" }}>
        <div style={{ maxWidth:1280,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:64 }}>
            <span style={{ display:"inline-block",background:"#f0fafa",color:"#0B6E6E",fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",padding:"5px 14px",borderRadius:999,marginBottom:16,fontFamily:"var(--font-body)",border:"1px solid #ccefef" }}>Our People</span>
            <h2 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(1.8rem,4vw,3rem)",fontWeight:700,color:"#1a1a2e",margin:"0 0 16px" }}>
              The Team Behind <em style={{ color:"#0B6E6E" }}>Your Smile</em>
            </h2>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.name} style={{ background:"#fff",borderRadius:24,overflow:"hidden",border:"1px solid #e8f4f4",boxShadow:"0 4px 24px rgba(11,110,110,0.06)",transition:"all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.boxShadow="0 20px 48px rgba(11,110,110,0.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 24px rgba(11,110,110,0.06)"; }}
              >
                <div style={{ aspectRatio:"1/1",overflow:"hidden" }}>
                  <img src={member.img} alt={member.name} style={{ width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.4s" }} />
                </div>
                <div style={{ padding:"24px 28px" }}>
                  <h3 style={{ fontFamily:"var(--font-display)",fontSize:20,fontWeight:600,color:"#1a1a2e",margin:"0 0 4px" }}>{member.name}</h3>
                  <p style={{ fontFamily:"var(--font-body)",fontSize:13,fontWeight:600,color:"#0B6E6E",margin:"0 0 12px",textTransform:"uppercase",letterSpacing:"0.06em" }}>{member.role}</p>
                  <p style={{ fontFamily:"var(--font-body)",fontSize:14,color:"#64748b",lineHeight:1.7,margin:0 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div style={{ background:"linear-gradient(135deg,#042e2e,#0B6E6E)",padding:"80px 2rem",textAlign:"center" }}>
        <div style={{ maxWidth:600,margin:"0 auto" }}>
          <h2 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:700,color:"#fff",margin:"0 0 16px" }}>
            Ready to Meet the Team?
          </h2>
          <p style={{ fontFamily:"var(--font-body)",color:"rgba(255,255,255,0.65)",fontSize:17,lineHeight:1.7,margin:"0 0 32px" }}>
            Book your first appointment and experience the DentaCare difference yourself.
          </p>
          <Link href="/contact" style={{ display:"inline-block",background:"#fff",color:"#0B6E6E",fontWeight:700,fontSize:15,padding:"16px 36px",borderRadius:14,textDecoration:"none",fontFamily:"var(--font-body)",boxShadow:"0 8px 32px rgba(0,0,0,0.2)" }}>
            Book Your Appointment
          </Link>
        </div>
      </div>

      <Footer />

      <style>{`
        .about-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .about-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .doctor-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        @media (max-width: 1024px) {
          .about-hero-grid  { grid-template-columns: 1fr; gap: 48px; }
          .doctor-grid      { grid-template-columns: 1fr; gap: 48px; }
          .values-grid      { grid-template-columns: repeat(2, 1fr); }
          .team-grid        { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .about-stats-grid { grid-template-columns: 1fr 1fr; }
          .values-grid      { grid-template-columns: 1fr; }
          .team-grid        { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}