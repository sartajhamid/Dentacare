"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Phone, Mail, MapPin, Clock,
  CheckCircle, AlertCircle, Send, Calendar,
} from "lucide-react";

const serviceList = [
  "General Dentistry", "Teeth Whitening", "Invisalign & Braces",
  "Dental Implants", "Veneers & Bonding", "Pediatric Dentistry",
  "Emergency Dental", "Other",
];

const timeSlots = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "",
    date: "", time: "", insurance: "", message: "",
  });

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMsg("");
    setForm({ name:"",email:"",phone:"",service:"",date:"",time:"",insurance:"",message:"" });
  };

  return (
    <>
      <Navbar />

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg,#042e2e 0%,#1a1a2e 60%,#074444 100%)",
        padding: "120px 2rem 64px", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position:"absolute",inset:0,opacity:0.03,backgroundImage:"linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",backgroundSize:"60px 60px" }} />
        <div style={{ position:"absolute",top:"-20%",right:"-10%",width:400,height:400,background:"rgba(11,158,158,0.08)",borderRadius:"50%",filter:"blur(60px)" }} />
        <div style={{ maxWidth:1280,margin:"0 auto",position:"relative",zIndex:1 }}>
          <span style={{ display:"inline-block",background:"rgba(11,158,158,0.15)",border:"1px solid rgba(11,158,158,0.3)",color:"#6de0c0",fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",padding:"5px 14px",borderRadius:999,marginBottom:16,fontFamily:"var(--font-body)" }}>
            Book Appointment
          </span>
          <h1 style={{ fontFamily:"var(--font-display)",fontSize:"clamp(2rem,5vw,3.5rem)",fontWeight:700,color:"#fff",margin:"0 0 16px",lineHeight:1.1 }}>
            Let&apos;s Get Your<br />
            <span style={{ background:"linear-gradient(135deg,#0B9E9E,#34cba4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
              Smile Scheduled
            </span>
          </h1>
          <p style={{ color:"rgba(255,255,255,0.55)",fontSize:17,maxWidth:480,lineHeight:1.7,margin:0,fontFamily:"var(--font-body)" }}>
            Same-day appointments available. Fill out the form and we&apos;ll confirm within 2 hours.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ background:"#f8fafa",padding:"80px 2rem" }}>
        <div style={{ maxWidth:1280,margin:"0 auto" }}>
          <div className="contact-grid">

            {/* Info sidebar */}
            <div style={{ display:"flex",flexDirection:"column",gap:20 }}>
              {[
                { icon:<Phone size={20} color="#0B6E6E" />, title:"Call Us",        lines:["(512) 555-0100","Mon–Fri, 8am–6pm"] },
                { icon:<Mail size={20} color="#0B6E6E" />,  title:"Email Us",       lines:["hello@dentacarepro.com","Reply within 2 hours"] },
                { icon:<MapPin size={20} color="#0B6E6E" />, title:"Location",      lines:["123 Dental Ave","Austin, TX 78701"] },
                { icon:<Clock size={20} color="#0B6E6E" />,  title:"Office Hours",  lines:["Mon–Fri: 8:00 AM – 6:00 PM","Sat: 9:00 AM – 2:00 PM"] },
              ].map((c) => (
                <div key={c.title} style={{ background:"#fff",borderRadius:16,padding:"20px 24px",border:"1px solid #e8f4f4",display:"flex",alignItems:"flex-start",gap:16,boxShadow:"0 2px 12px rgba(11,110,110,0.04)" }}>
                  <div style={{ width:44,height:44,background:"#f0fafa",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>{c.icon}</div>
                  <div>
                    <p style={{ fontFamily:"var(--font-body)",fontWeight:600,color:"#1a1a2e",margin:"0 0 4px",fontSize:15 }}>{c.title}</p>
                    {c.lines.map((l) => <p key={l} style={{ fontFamily:"var(--font-body)",color:"#64748b",fontSize:13,margin:0,lineHeight:1.6 }}>{l}</p>)}
                  </div>
                </div>
              ))}

              {/* Map */}
              <div style={{ borderRadius:16,overflow:"hidden",border:"1px solid #e8f4f4",height:220 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.8876952225485!2d-97.74306492378!3d30.267153174869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59b8fefae39%3A0x9e2b6d5d7a9b9e0!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%" height="100%" style={{ border:0,display:"block" }}
                  loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form card */}
            <div style={{ background:"#fff",borderRadius:24,padding:"40px",border:"1px solid #e8f4f4",boxShadow:"0 8px 40px rgba(11,110,110,0.08)" }}>

              {status === "success" ? (
                <div style={{ textAlign:"center",padding:"60px 20px" }}>
                  <CheckCircle size={56} color="#0B6E6E" style={{ marginBottom:24 }} />
                  <h3 style={{ fontFamily:"var(--font-display)",fontSize:28,color:"#1a1a2e",margin:"0 0 12px" }}>You&apos;re All Set!</h3>
                  <p style={{ fontFamily:"var(--font-body)",color:"#64748b",fontSize:16,lineHeight:1.7,maxWidth:340,margin:"0 auto 32px" }}>
                    We received your request and will confirm your appointment within 2 hours.
                  </p>
                  <button onClick={resetForm} style={{ background:"#0B6E6E",color:"#fff",border:"none",padding:"12px 28px",borderRadius:12,fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"var(--font-body)" }}>
                    Book Another
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom:32 }}>
                    <h2 style={{ fontFamily:"var(--font-display)",fontSize:26,fontWeight:700,color:"#1a1a2e",margin:"0 0 8px" }}>Book Your Appointment</h2>
                    <p style={{ fontFamily:"var(--font-body)",color:"#64748b",fontSize:14,margin:0 }}>Fill out the form and we&apos;ll get back to you shortly.</p>
                  </div>

                  <form onSubmit={submit} style={{ display:"flex",flexDirection:"column",gap:20 }}>

                    <div className="form-row">
                      <div style={{ flex:1 }}>
                        <label style={lbl}>Full Name *</label>
                        <input name="name" value={form.name} onChange={handle} required placeholder="Jane Smith" style={inp} onFocus={(e)=>e.target.style.borderColor="#0B6E6E"} onBlur={(e)=>e.target.style.borderColor="#e2e8f0"} />
                      </div>
                      <div style={{ flex:1 }}>
                        <label style={lbl}>Phone Number *</label>
                        <input name="phone" value={form.phone} onChange={handle} required placeholder="(512) 000-0000" type="tel" style={inp} onFocus={(e)=>e.target.style.borderColor="#0B6E6E"} onBlur={(e)=>e.target.style.borderColor="#e2e8f0"} />
                      </div>
                    </div>

                    <div>
                      <label style={lbl}>Email Address *</label>
                      <input name="email" value={form.email} onChange={handle} required placeholder="jane@email.com" type="email" style={inp} onFocus={(e)=>e.target.style.borderColor="#0B6E6E"} onBlur={(e)=>e.target.style.borderColor="#e2e8f0"} />
                    </div>

                    <div>
                      <label style={lbl}>Treatment Needed *</label>
                      <select name="service" value={form.service} onChange={handle} required style={{ ...inp,cursor:"pointer" }} onFocus={(e)=>e.target.style.borderColor="#0B6E6E"} onBlur={(e)=>e.target.style.borderColor="#e2e8f0"}>
                        <option value="">Select a treatment...</option>
                        {serviceList.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div className="form-row">
                      <div style={{ flex:1 }}>
                        <label style={lbl}><Calendar size={12} style={{ display:"inline",marginRight:4 }} />Preferred Date *</label>
                        <input name="date" value={form.date} onChange={handle} required type="date" min={new Date().toISOString().split("T")[0]} style={inp} onFocus={(e)=>e.target.style.borderColor="#0B6E6E"} onBlur={(e)=>e.target.style.borderColor="#e2e8f0"} />
                      </div>
                      <div style={{ flex:1 }}>
                        <label style={lbl}>Preferred Time</label>
                        <select name="time" value={form.time} onChange={handle} style={{ ...inp,cursor:"pointer" }} onFocus={(e)=>e.target.style.borderColor="#0B6E6E"} onBlur={(e)=>e.target.style.borderColor="#e2e8f0"}>
                          <option value="">Any time</option>
                          {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={lbl}>Insurance Provider</label>
                      <input name="insurance" value={form.insurance} onChange={handle} placeholder="e.g. Delta Dental, Cigna, or Self-pay" style={inp} onFocus={(e)=>e.target.style.borderColor="#0B6E6E"} onBlur={(e)=>e.target.style.borderColor="#e2e8f0"} />
                    </div>

                    <div>
                      <label style={lbl}>Additional Notes</label>
                      <textarea name="message" value={form.message} onChange={handle} placeholder="Any concerns, dental history, or questions..." rows={4} style={{ ...inp,resize:"vertical",minHeight:100 }} onFocus={(e)=>e.target.style.borderColor="#0B6E6E"} onBlur={(e)=>e.target.style.borderColor="#e2e8f0"} />
                    </div>

                    {status === "error" && (
                      <div style={{ display:"flex",alignItems:"center",gap:8,background:"#fef2f2",border:"1px solid #fecaca",borderRadius:10,padding:"12px 16px" }}>
                        <AlertCircle size={16} color="#ef4444" />
                        <span style={{ fontFamily:"var(--font-body)",fontSize:13,color:"#dc2626" }}>{errorMsg}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      style={{ background:status==="loading"?"#64748b":"#0B6E6E",color:"#fff",border:"none",padding:"16px 32px",borderRadius:14,fontSize:15,fontWeight:600,cursor:status==="loading"?"not-allowed":"pointer",fontFamily:"var(--font-body)",display:"flex",alignItems:"center",justifyContent:"center",gap:10,transition:"background 0.2s",boxShadow:"0 8px 24px rgba(11,110,110,0.3)",width:"100%" }}
                      onMouseEnter={(e)=>{ if(status!=="loading") e.currentTarget.style.background="#0B9E9E"; }}
                      onMouseLeave={(e)=>{ if(status!=="loading") e.currentTarget.style.background="#0B6E6E"; }}
                    >
                      {status === "loading" ? (
                        <><span style={{ width:16,height:16,border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin 0.8s linear infinite",display:"inline-block" }} /> Sending...</>
                      ) : (
                        <><Send size={16} /> Request Appointment</>
                      )}
                    </button>

                    <p style={{ fontFamily:"var(--font-body)",fontSize:12,color:"#94a3b8",textAlign:"center",margin:0 }}>
                      🔒 Your information is secure and never shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        .contact-grid { display:grid; grid-template-columns:1fr 1.6fr; gap:40px; align-items:start; }
        .form-row { display:flex; gap:16px; }
        @keyframes spin { to { transform:rotate(360deg); } }
        @media (max-width:1024px) { .contact-grid { grid-template-columns:1fr; } }
        @media (max-width:560px)  { .form-row { flex-direction:column; } }
      `}</style>
    </>
  );
}

const lbl: React.CSSProperties = {
  display:"block", fontFamily:"var(--font-body)",
  fontSize:13, fontWeight:600, color:"#374151", marginBottom:6,
};
const inp: React.CSSProperties = {
  width:"100%", padding:"11px 14px",
  border:"1.5px solid #e2e8f0", borderRadius:10,
  fontSize:14, fontFamily:"var(--font-body)",
  color:"#1a1a2e", background:"#fff",
  outline:"none", transition:"border-color 0.2s",
  boxSizing:"border-box",
};