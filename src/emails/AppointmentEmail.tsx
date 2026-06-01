import {
  Body, Container, Head, Heading, Hr, Html,
  Preview, Section, Text, Row, Column,
} from "@react-email/components";

interface Props {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  insurance: string;
  message: string;
}

export default function AppointmentEmail({
  name, email, phone, service, date, time, insurance, message,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>New appointment request from {name} — {service}</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* Header */}
          <Section style={header}>
            <Text style={logoText}>🦷 DentaCare Pro</Text>
            <Text style={headerSub}>New Appointment Request</Text>
          </Section>

          {/* Alert banner */}
          <Section style={alertBanner}>
            <Text style={alertText}>
              ⚡ Action Required — A patient has requested an appointment
            </Text>
          </Section>

          {/* Patient info */}
          <Section style={card}>
            <Heading style={cardTitle}>Patient Information</Heading>
            <Hr style={divider} />
            <Row style={row}>
              <Column style={col}>
                <Text style={fieldLabel}>Full Name</Text>
                <Text style={fieldValue}>{name}</Text>
              </Column>
              <Column style={col}>
                <Text style={fieldLabel}>Phone</Text>
                <Text style={fieldValue}>{phone}</Text>
              </Column>
            </Row>
            <Row style={row}>
              <Column style={col}>
                <Text style={fieldLabel}>Email</Text>
                <Text style={fieldValue}>{email}</Text>
              </Column>
              <Column style={col}>
                <Text style={fieldLabel}>Insurance</Text>
                <Text style={fieldValue}>{insurance || "Not provided"}</Text>
              </Column>
            </Row>
          </Section>

          {/* Appointment details */}
          <Section style={card}>
            <Heading style={cardTitle}>Appointment Details</Heading>
            <Hr style={divider} />
            <Row style={row}>
              <Column style={col}>
                <Text style={fieldLabel}>Treatment</Text>
                <Text style={{ ...fieldValue, color: "#0B6E6E", fontWeight: "700" }}>{service}</Text>
              </Column>
              <Column style={col}>
                <Text style={fieldLabel}>Preferred Date</Text>
                <Text style={fieldValue}>{date}</Text>
              </Column>
            </Row>
            <Row style={row}>
              <Column style={col}>
                <Text style={fieldLabel}>Preferred Time</Text>
                <Text style={fieldValue}>{time || "Any time"}</Text>
              </Column>
              <Column style={col}>
                <Text style={fieldLabel}>Submitted</Text>
                <Text style={fieldValue}>
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "short", month: "short",
                    day: "numeric", year: "numeric",
                  })}
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Message */}
          {message && (
            <Section style={card}>
              <Heading style={cardTitle}>Patient Notes</Heading>
              <Hr style={divider} />
              <Text style={messageText}>{message}</Text>
            </Section>
          )}

          {/* CTA */}
          <Section style={{ margin:"16px 40px 0" }}>
            <Row>
              <Column style={{ paddingRight: 8 }}>
                <a href={`mailto:${email}?subject=Your%20Appointment%20Confirmation%20%E2%80%94%20DentaCare%20Pro&body=Hi%20${encodeURIComponent(name)}%2C%0D%0A%0D%0AThank%20you%20for%20requesting%20an%20appointment%20at%20DentaCare%20Pro!%0D%0A%0D%0AWe%27re%20happy%20to%20confirm%20your%20appointment%20for%20${encodeURIComponent(service)}%20on%20${encodeURIComponent(date)}${time ? `%20at%20${encodeURIComponent(time)}` : ""}%2E%0D%0A%0D%0APlease%20reply%20to%20this%20email%20or%20call%20us%20at%20(512)%20555-0100%20if%20you%20need%20to%20make%20any%20changes%2E%0D%0A%0D%0AWe%20look%20forward%20to%20seeing%20you!%0D%0A%0D%0ABest%20regards%2C%0D%0ADentaCare%20Pro%20Team`}
                  style={{ display:"block", background:"#0B6E6E", color:"#fff", textAlign:"center" as const, padding:"14px 20px", borderRadius:12, textDecoration:"none", fontWeight:700, fontSize:14, fontFamily:"'DM Sans',sans-serif" }}>
                  ✉️ Reply to Confirm
                </a>
              </Column>
              <Column style={{ paddingLeft: 8 }}>
                <a href={`tel:${phone}`}
                  style={{ display:"block", background:"#f0fafa", color:"#0B6E6E", textAlign:"center" as const, padding:"14px 20px", borderRadius:12, textDecoration:"none", fontWeight:700, fontSize:14, fontFamily:"'DM Sans',sans-serif", border:"2px solid #0B6E6E" }}>
                  📞 Call Patient
                </a>
              </Column>
            </Row>
          </Section>

          {/* CTA note */}
          <Section style={{ margin:"12px 40px 0", backgroundColor:"#042e2e", borderRadius:14, padding:"20px 28px", textAlign:"center" as const }}>
            <Text style={{ fontSize:13, fontWeight:600, color:"#ffffff", margin:"0 0 6px" }}>
              ⚡ Respond within 2 hours for best patient experience
            </Text>
            <Text style={{ fontSize:12, color:"rgba(255,255,255,0.55)", margin:0 }}>
              Replying to this email goes directly to <strong style={{ color:"#6de0c0" }}>{email}</strong>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

// ── Styles ──────────────────────────────────────────
const body: React.CSSProperties = {
  backgroundColor: "#f0fafa",
  fontFamily: "'DM Sans', -apple-system, sans-serif",
  margin: 0, padding: "40px 0",
};
const container: React.CSSProperties = {
  maxWidth: 600, margin: "0 auto",
  backgroundColor: "#ffffff",
  borderRadius: 20,
  overflow: "hidden",
  boxShadow: "0 8px 40px rgba(11,110,110,0.12)",
};
const header: React.CSSProperties = {
  background: "linear-gradient(135deg, #042e2e 0%, #0B6E6E 100%)",
  padding: "36px 40px 28px",
  textAlign: "center",
};
const logoText: React.CSSProperties = {
  fontSize: 26, fontWeight: 700, color: "#ffffff",
  margin: "0 0 6px", letterSpacing: "-0.3px",
};
const headerSub: React.CSSProperties = {
  fontSize: 14, color: "rgba(255,255,255,0.65)",
  margin: 0, letterSpacing: "0.08em", textTransform: "uppercase",
};
const alertBanner: React.CSSProperties = {
  backgroundColor: "#0B9E9E",
  padding: "12px 40px",
  textAlign: "center",
};
const alertText: React.CSSProperties = {
  color: "#ffffff", fontSize: 13,
  fontWeight: 600, margin: 0,
};
const card: React.CSSProperties = {
  margin: "0 40px 24px",
  backgroundColor: "#f8fcfc",
  borderRadius: 14,
  padding: "24px 28px",
  border: "1px solid #e0f0f0",
};
const cardTitle: React.CSSProperties = {
  fontSize: 15, fontWeight: 700,
  color: "#1a1a2e", margin: "0 0 12px",
  letterSpacing: "-0.2px",
};
const divider: React.CSSProperties = {
  borderColor: "#d4eded", margin: "0 0 20px",
};
const row: React.CSSProperties = {
  marginBottom: 16,
};
const col: React.CSSProperties = {
  width: "50%", paddingRight: 16,
  verticalAlign: "top",
};
const fieldLabel: React.CSSProperties = {
  fontSize: 11, fontWeight: 600,
  color: "#64748b", textTransform: "uppercase",
  letterSpacing: "0.08em", margin: "0 0 4px",
};
const fieldValue: React.CSSProperties = {
  fontSize: 15, color: "#1a1a2e",
  fontWeight: 500, margin: 0, lineHeight: "1.4",
};
const messageText: React.CSSProperties = {
  fontSize: 14, color: "#374151",
  lineHeight: "1.7", margin: 0,
  fontStyle: "italic",
};
const ctaSection: React.CSSProperties = {
  margin: "0 40px 32px",
  backgroundColor: "#042e2e",
  borderRadius: 14, padding: "24px 28px",
  textAlign: "center",
};
const ctaText: React.CSSProperties = {
  fontSize: 16, fontWeight: 700,
  color: "#ffffff", margin: "0 0 8px",
};
const ctaSubText: React.CSSProperties = {
  fontSize: 13, color: "rgba(255,255,255,0.65)",
  margin: 0,
};
const footer: React.CSSProperties = {
  padding: "20px 40px 32px",
  textAlign: "center",
};
const footerText: React.CSSProperties = {
  fontSize: 12, color: "#94a3b8",
  margin: "0 0 4px", lineHeight: "1.6",
};