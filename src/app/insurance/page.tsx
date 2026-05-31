"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const providers = [
  { name: "Delta Dental",           logo: "🦷", covered: ["Cleanings", "X-rays", "Fillings", "Crowns"] },
  { name: "Cigna",                  logo: "💙", covered: ["Preventive", "Basic Restorative", "Orthodontics"] },
  { name: "Aetna",                  logo: "🏥", covered: ["Cleanings", "Fillings", "Implants", "Braces"] },
  { name: "MetLife",                logo: "🌂", covered: ["Preventive", "Crowns", "Root Canals"] },
  { name: "United Concordia",       logo: "🤝", covered: ["Cleanings", "X-rays", "Fillings"] },
  { name: "Guardian",               logo: "🛡️", covered: ["Preventive", "Basic", "Major Services"] },
  { name: "Humana",                 logo: "💚", covered: ["Cleanings", "Fillings", "Orthodontics"] },
  { name: "Blue Cross Blue Shield", logo: "💎", covered: ["Preventive", "Restorative", "Implants"] },
  { name: "United Healthcare",      logo: "🏦", covered: ["Cleanings", "X-rays", "Major Services"] },
  { name: "Ameritas",               logo: "⭐", covered: ["Preventive", "Basic Restorative"] },
  { name: "Principal",              logo: "🏛️", covered: ["Cleanings", "Fillings", "Crowns"] },
  { name: "Sun Life",               logo: "☀️", covered: ["Preventive", "Basic", "Orthodontics"] },
];

const paymentOptions = [
  {
    icon: "💳",
    title: "All Major Cards",
    desc: "Visa, Mastercard, American Express, and Discover accepted at checkout.",
  },
  {
    icon: "📅",
    title: "CareCredit Financing",
    desc: "0% interest financing for 6–24 months on qualifying treatments. Apply in minutes.",
    cta: { label: "Apply for CareCredit", href: "https://carecredit.com" },
  },
  {
    icon: "🏦",
    title: "In-House Payment Plan",
    desc: "Split your treatment cost into manageable monthly payments — no credit check required.",
  },
  {
    icon: "💵",
    title: "Cash & Check",
    desc: "We accept cash and personal checks. Ask about our cash-pay discount at the front desk.",
  },
  {
    icon: "📱",
    title: "HSA / FSA Cards",
    desc: "Health Savings Account and Flexible Spending Account cards accepted for all dental services.",
  },
  {
    icon: "🤝",
    title: "Membership Plan",
    desc: "No insurance? Our in-house membership plan covers 2 cleanings + X-rays + 20% off all treatments for $29/mo.",
    highlight: true,
  },
];

const faqs = [
  {
    q: "Do you accept my insurance?",
    a: "We accept most major PPO dental insurance plans. Call us or check our list above. If you don't see yours, call us — we likely still accept it.",
  },
  {
    q: "What if I don't have insurance?",
    a: "No problem. Our in-house membership plan at $29/month covers your preventive care and gives you 20% off all treatments. It's often better than having insurance.",
  },
  {
    q: "How do I know what my insurance covers?",
    a: "We verify your benefits before your appointment and give you a clear breakdown of what's covered and what your out-of-pocket cost will be — no surprises.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We offer CareCredit financing (0% for 6–24 months) and our own in-house payment plans with no credit check required.",
  },
  {
    q: "When is payment due?",
    a: "Payment is due at the time of service. For larger treatments, we can arrange a payment plan in advance — just ask at your consultation.",
  },
  {
    q: "Can I use my HSA or FSA card?",
    a: "Absolutely. HSA and FSA cards are accepted for all dental services, including cosmetic treatments when medically necessary.",
  },
];

export default function InsurancePage() {
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
            <span style={{ color:"#34cba4",fontSize:13,fontFamily:"var(--font-body)" }}>Insurance</span>
          </div>
          <span style={{ display:"inline-block",background:"rgba(11,158,158,0.15)",border:"1px solid rgba(11,158,158,0.3)",color:"#6de0c0",fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",padding:"5px 14px",borderRadius:999,marginBottom:16,fontFamily:"var(--font-body)" }}>
            Insurance & Payments
          </span>
          <h1 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(2.2rem,5vw,3.8rem)",fontWeight:700,color:"#fff",margin:"0 0 20px",lineHeight:1.1 }}>
            We Work With Your<br />
            <span style={{ background:"linear-gradient(135deg,#0B9E9E,#34cba4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
              Insurance. Always.
            </span>
          </h1>
          <p style={{ color:"rgba(255,255,255,0.55)",fontSize:"clamp(15px,2vw,18px)",maxWidth:540,margin:"0 auto",lineHeight:1.7,fontFamily:"var(--font-body)" }}>
            We accept most major PPO plans and offer flexible payment options so cost is never a reason to skip your dental care.
          </p>
        </div>
      </div>

      {/* Promise bar */}
      <div style={{ background:"#0B6E6E",padding:"32px 2rem" }}>
        <div style={{ maxWidth:1280,margin:"0 auto" }}>
          <div className="promise-bar">
            {[
              { icon:"✅", text:"We verify your benefits before every appointment" },
              { icon:"💬", text:"Transparent cost breakdowns — no surprise bills" },
              { icon:"🤝", text:"We handle all insurance claims for you" },
              { icon:"💰", text:"Flexible plans if insurance doesn't cover everything" },
            ].map((item) => (
              <div key={item.text} style={{ display:"flex",alignItems:"center",gap:10,justifyContent:"center" }}>
                <span style={{ fontSize:18 }}>{item.icon}</span>
                <span style={{ fontFamily:"var(--font-body)",fontSize:14,color:"rgba(255,255,255,0.9)",fontWeight:500 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insurance providers */}
      <div style={{ background:"#fff",padding:"100px 2rem" }}>
        <div style={{ maxWidth:1280,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:64 }}>
            <span style={{ display:"inline-block",background:"#f0fafa",color:"#0B6E6E",fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",padding:"5px 14px",borderRadius:999,marginBottom:16,fontFamily:"var(--font-body)",border:"1px solid #ccefef" }}>
              Accepted Insurance
            </span>
            <h2 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(1.8rem,4vw,3rem)",fontWeight:700,color:"#1a1a2e",margin:"0 0 16px" }}>
              We Accept <em style={{ color:"#0B6E6E" }}>Most Major Plans</em>
            </h2>
            <p style={{ fontFamily:"var(--font-body)",color:"#64748b",fontSize:16,maxWidth:500,margin:"0 auto",lineHeight:1.7 }}>
              Don&apos;t see yours? Call us — we likely accept it. We work with virtually all PPO dental insurance plans.
            </p>
          </div>

          <div className="providers-grid">
            {providers.map((p) => (
              <div key={p.name} style={{ background:"#f8fcfc",borderRadius:20,padding:"28px 24px",border:"1px solid #e8f4f4",textAlign:"center",transition:"all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background="#fff"; e.currentTarget.style.borderColor="#0B9E9E"; e.currentTarget.style.boxShadow="0 12px 32px rgba(11,110,110,0.1)"; e.currentTarget.style.transform="translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background="#f8fcfc"; e.currentTarget.style.borderColor="#e8f4f4"; e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="translateY(0)"; }}
              >
                <div style={{ fontSize:32,marginBottom:12 }}>{p.logo}</div>
                <h3 style={{ fontFamily:"var(--font-body)",fontSize:15,fontWeight:700,color:"#1a1a2e",margin:"0 0 12px" }}>{p.name}</h3>
                <div style={{ display:"flex",flexWrap:"wrap",gap:6,justifyContent:"center" }}>
                  {p.covered.map((c) => (
                    <span key={c} style={{ background:"#f0fafa",color:"#0B6E6E",fontSize:10,fontWeight:600,padding:"2px 8px",borderRadius:999,fontFamily:"var(--font-body)",border:"1px solid #ccefef" }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign:"center",marginTop:48 }}>
            <p style={{ fontFamily:"var(--font-body)",color:"#64748b",fontSize:15,marginBottom:20 }}>
              Not sure if we accept your plan?
            </p>
            <a href="tel:+15125550100" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#0B6E6E",color:"#fff",fontWeight:600,fontSize:14,padding:"13px 28px",borderRadius:12,textDecoration:"none",fontFamily:"var(--font-body)",boxShadow:"0 4px 14px rgba(11,110,110,0.3)" }}>
              📞 Call to Verify Your Insurance
            </a>
          </div>
        </div>
      </div>

      {/* Payment options */}
      <div style={{ background:"#f8fafa",padding:"100px 2rem" }}>
        <div style={{ maxWidth:1280,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:64 }}>
            <span style={{ display:"inline-block",background:"#f0fafa",color:"#0B6E6E",fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",padding:"5px 14px",borderRadius:999,marginBottom:16,fontFamily:"var(--font-body)",border:"1px solid #ccefef" }}>
              Payment Options
            </span>
            <h2 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(1.8rem,4vw,3rem)",fontWeight:700,color:"#1a1a2e",margin:"0 0 16px" }}>
              Flexible Ways to <em style={{ color:"#0B6E6E" }}>Pay</em>
            </h2>
            <p style={{ fontFamily:"var(--font-body)",color:"#64748b",fontSize:16,maxWidth:500,margin:"0 auto",lineHeight:1.7 }}>
              We believe cost should never be a barrier to a healthy smile. Here&apos;s how we make it work for every budget.
            </p>
          </div>

          <div className="payment-grid">
            {paymentOptions.map((opt) => (
              <div key={opt.title} style={{ background: opt.highlight ? "linear-gradient(135deg,#042e2e,#0B6E6E)" : "#fff", borderRadius:20, padding:"32px 28px", border: opt.highlight ? "none" : "1px solid #e8f4f4", boxShadow: opt.highlight ? "0 20px 48px rgba(11,110,110,0.25)" : "0 4px 20px rgba(11,110,110,0.04)", display:"flex", flexDirection:"column", gap:14 }}>
                <div style={{ fontSize:36 }}>{opt.icon}</div>
                <h3 style={{ fontFamily:"var(--font-display)",fontSize:20,fontWeight:600,color: opt.highlight ? "#fff" : "#1a1a2e",margin:0 }}>
                  {opt.title}
                </h3>
                <p style={{ fontFamily:"var(--font-body)",fontSize:14,color: opt.highlight ? "rgba(255,255,255,0.7)" : "#64748b",lineHeight:1.7,margin:0,flex:1 }}>
                  {opt.desc}
                </p>
                {opt.cta && (
                  <a href={opt.cta.href} target="_blank" rel="noreferrer" style={{ display:"inline-block",background:"#0B6E6E",color:"#fff",fontWeight:600,fontSize:13,padding:"10px 20px",borderRadius:10,textDecoration:"none",fontFamily:"var(--font-body)",width:"fit-content" }}>
                    {opt.cta.label} →
                  </a>
                )}
                {opt.highlight && (
                  <span style={{ display:"inline-block",background:"rgba(255,255,255,0.15)",color:"#fff",fontSize:11,fontWeight:700,padding:"4px 12px",borderRadius:999,fontFamily:"var(--font-body)",width:"fit-content",border:"1px solid rgba(255,255,255,0.2)" }}>
                    ⭐ Most Popular for Uninsured Patients
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ background:"#fff",padding:"100px 2rem" }}>
        <div style={{ maxWidth:800,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:64 }}>
            <span style={{ display:"inline-block",background:"#f0fafa",color:"#0B6E6E",fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",padding:"5px 14px",borderRadius:999,marginBottom:16,fontFamily:"var(--font-body)",border:"1px solid #ccefef" }}>
              FAQ
            </span>
            <h2 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(1.8rem,4vw,3rem)",fontWeight:700,color:"#1a1a2e",margin:"0 0 16px" }}>
              Insurance <em style={{ color:"#0B6E6E" }}>Questions</em>
            </h2>
          </div>
          <div style={{ display:"flex",flexDirection:"column",gap:16 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background:"#f8fcfc",borderRadius:16,padding:"24px 28px",border:"1px solid #e8f4f4" }}>
                <h3 style={{ fontFamily:"var(--font-body)",fontSize:16,fontWeight:700,color:"#1a1a2e",margin:"0 0 10px",display:"flex",alignItems:"flex-start",gap:10 }}>
                  <span style={{ color:"#0B6E6E",flexShrink:0 }}>Q.</span>{faq.q}
                </h3>
                <p style={{ fontFamily:"var(--font-body)",fontSize:14,color:"#64748b",lineHeight:1.75,margin:0,paddingLeft:24 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background:"linear-gradient(135deg,#042e2e,#0B6E6E)",padding:"80px 2rem",textAlign:"center" }}>
        <div style={{ maxWidth:600,margin:"0 auto" }}>
          <h2 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:700,color:"#fff",margin:"0 0 16px" }}>
            Still Have Questions?
          </h2>
          <p style={{ fontFamily:"var(--font-body)",color:"rgba(255,255,255,0.65)",fontSize:17,lineHeight:1.7,margin:"0 0 32px" }}>
            Our front desk team will verify your benefits and walk you through your coverage before your first visit — completely free.
          </p>
          <div style={{ display:"flex",flexWrap:"wrap",gap:16,justifyContent:"center" }}>
            <a href="tel:+15125550100" style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,0.15)",color:"#fff",fontWeight:600,fontSize:15,padding:"16px 28px",borderRadius:14,textDecoration:"none",fontFamily:"var(--font-body)",border:"1px solid rgba(255,255,255,0.2)" }}>
              📞 (512) 555-0100
            </a>
            <Link href="/contact" style={{ display:"inline-block",background:"#fff",color:"#0B6E6E",fontWeight:700,fontSize:15,padding:"16px 32px",borderRadius:14,textDecoration:"none",fontFamily:"var(--font-body)",boxShadow:"0 8px 32px rgba(0,0,0,0.2)" }}>
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        .promise-bar {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 24px;
          align-items: center;
        }
        .providers-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 20px;
        }
        .payment-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .promise-bar    { grid-template-columns: repeat(2,1fr); gap:20px; }
          .providers-grid { grid-template-columns: repeat(3,1fr); }
          .payment-grid   { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 640px) {
          .promise-bar    { grid-template-columns: 1fr; }
          .providers-grid { grid-template-columns: repeat(2,1fr); }
          .payment-grid   { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}