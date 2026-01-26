const trustLogos = [
  "CADViewer",
  "Trovavia",
  "Wizup",
  "Origame",
  "Discover",
  "MyNO7",
  "Digital Success",
  "Cooltchop",
  "PKF",
  "Privethique",
];

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "96px 24px" }}>
        <div
          style={{
            backgroundColor: "#101418",
            color: "#ffffff",
            borderRadius: 28,
            padding: "48px 40px",
            display: "grid",
            gap: 32,
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          <div>
            <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", fontSize: 12, color: "#ffd6c9" }}>
              Prêt à démarrer
            </p>
            <h2 style={{ fontSize: 34, margin: "16px 0" }}>
              Planifions un format court pour cadrer votre prochaine étape.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
              Réponse sous 48h ouvrées, brief structuré et recommandations actionnables.
            </p>
            <div style={{ marginTop: 24, display: "grid", gap: 12, fontSize: 14 }}>
              <div>hello@studio-nord.fr</div>
              <div>+33 1 84 00 00 00</div>
              <div>Disponible à distance ou sur site (Europe).</div>
            </div>
          </div>

          <form
            style={{
              backgroundColor: "#ffffff",
              color: "#101418",
              borderRadius: 24,
              padding: 28,
              display: "grid",
              gap: 16,
            }}
          >
            <div style={{ display: "grid", gap: 8 }}>
              <label style={{ fontSize: 12, color: "#5c6b79" }}>Nom</label>
              <input placeholder="Votre nom" style={inputStyle} />
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              <label style={{ fontSize: 12, color: "#5c6b79" }}>Email</label>
              <input type="email" placeholder="vous@email.com" style={inputStyle} />
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              <label style={{ fontSize: 12, color: "#5c6b79" }}>Sujet</label>
              <input placeholder="Objet de la demande" style={inputStyle} />
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              <label style={{ fontSize: 12, color: "#5c6b79" }}>Message</label>
              <textarea placeholder="Contexte, délais, livrables souhaités" rows={4} style={textAreaStyle} />
            </div>
            <button style={buttonStyle} type="submit">
              Envoyer la demande
            </button>
          </form>
        </div>

        <div style={{ marginTop: 56 }}>
          <h2 style={{ textAlign: "center", margin: 0, fontSize: 32 }}>
            Ils nous font confiance
          </h2>
          <div
            style={{
              marginTop: 28,
              display: "grid",
              gap: 16,
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              alignItems: "center",
            }}
          >
            {trustLogos.map((logo) => (
              <div
                key={logo}
                style={{
                  backgroundColor: "#f8f6f2",
                  borderRadius: 12,
                  padding: "16px",
                  textAlign: "center",
                  fontWeight: 700,
                  color: "#2d3640",
                }}
                className="card-hover"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        <footer
          style={{
            marginTop: 48,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            color: "#5c6b79",
            fontSize: 14,
          }}
        >
          <div>© 2024 Studio Nord. Tous droits réservés.</div>
          <div style={{ display: "flex", gap: 18 }}>
            <a href="#" style={{ color: "#5c6b79" }}>Mentions</a>
            <a href="#" style={{ color: "#5c6b79" }}>Confidentialité</a>
            <a href="#" style={{ color: "#5c6b79" }}>LinkedIn</a>
          </div>
        </footer>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(16, 20, 24, 0.12)",
  fontSize: 14,
  outline: "none",
};

const textAreaStyle: React.CSSProperties = {
  ...inputStyle,
  resize: "vertical",
  minHeight: 120,
};

const buttonStyle: React.CSSProperties = {
  marginTop: 8,
  padding: "14px",
  borderRadius: 999,
  border: "none",
  backgroundColor: "#ff7a59",
  color: "#ffffff",
  fontWeight: 600,
  cursor: "pointer",
};
