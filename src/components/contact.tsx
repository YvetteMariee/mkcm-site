"use client";

export default function Contact() {
  return (
    <section id="contact" style={{ scrollMarginTop: "90px", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* TITRE */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0b1f33", margin: 0 }}>
            Contact
          </h2>
          <p style={{ color: "#425466", marginTop: 10 }}>
            Un projet ? Une question ? Ecrivez nous.
          </p>
        </div>

        {/* CONTENEUR CENTRAL */}
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            backgroundColor: "rgba(255,255,255,0.96)",
            borderRadius: 24,
            padding: "40px 30px",
            display: "flex",
            flexDirection: "column",
            gap: 32,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          {/* ===== FORMULAIRE (EN PREMIER) ===== */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message prêt. Étape suivante : envoi par email.");
            }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <input
              placeholder="Nom"
              required
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Email"
              required
              style={inputStyle}
            />
            <input
              placeholder="Sujet"
              required
              style={inputStyle}
            />
            <textarea
              placeholder="Ton message…"
              rows={5}
              required
              style={{ ...inputStyle, resize: "vertical" }}
            />

            <button style={buttonStyle}>
              Envoyer le message
            </button>
          </form>

          {/* ===== INFOS ENTREPRISE ===== */}
          <div style={{ borderTop: "1px solid #e6eaf2", paddingTop: 24 }}>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#0b1f33" }}>
              MKCM Consulting Services
            </h3>

            <p style={{ color: "#425466", marginTop: 10, lineHeight: 1.6 }}>
              Conseil et développement de solutions numériques
            </p>

            <div style={{ marginTop: 16, color: "#0b1f33", fontSize: 14 }}>
              <p>📧 contact@mkcm-consulting.com</p>
              <p>📞 +33 6 00 00 00 00</p>
              <p>📍 Douala-Cameroun</p>
            </div>

            {/* RÉSEAUX */}
            <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
              <a href="#" style={socialStyle}>Facebook</a>
              <a href="#" style={socialStyle}>Instagram</a>
              <a href="#" style={socialStyle}>LinkedIn</a>
            </div>

            {/* MAP */}
            <div style={{ marginTop: 20 }}>
              <iframe
                src="https://www.google.com/maps?q=Île-de-France&output=embed"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: 16 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== STYLES ===== */

const inputStyle: React.CSSProperties = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid #d0d5dd",
  fontSize: 14,
  outline: "none",
};

const buttonStyle: React.CSSProperties = {
  marginTop: 10,
  padding: "14px",
  borderRadius: 14,
  border: "none",
  backgroundColor: "#f59e0b",
  color: "white",
  fontWeight: 800,
  cursor: "pointer",
  fontSize: 15,
};

const socialStyle: React.CSSProperties = {
  textDecoration: "none",
  fontWeight: 600,
  color: "#0b1f33",
};
