export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0b141a",
        color: "#d6dde3",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "64px 24px",
          display: "grid",
          gap: 32,
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        <div>
          <div style={{ fontWeight: 800, color: "#ffffff", fontSize: 20 }}>MKCM</div>
          <p style={{ marginTop: 12, lineHeight: 1.6, fontSize: 13 }}>
            Nous offrons des services de haute qualité en utilisant des technologies modernes
            pour accélérer votre croissance.
          </p>
        </div>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 12 }}>Liens utiles</div>
          <div style={{ display: "grid", gap: 8, fontSize: 13 }}>
            <a href="/services">Services</a>
            <a href="/methodes">Méthode</a>
            <a href="/realisations">Réalisations</a>
            <a href="/a-propos">À propos</a>
            <a href="/contact">Contact</a>
            <a href="/mentions-legales">Mentions légales</a>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 12 }}>Contact</div>
          <div style={{ display: "grid", gap: 8, fontSize: 13 }}>
            <div>support@mkcm-consulting.com</div>
            <div>(+237) 6 52 71 04 32</div>
            <div>Douala, Cameroun</div>
          </div>
        </div>
        <div style={{ backgroundColor: "#ffffff", borderRadius: 12, overflow: "hidden" }}>
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Douala&output=embed"
            width="100%"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          padding: "16px 24px",
          fontSize: 12,
          color: "#94a3b8",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        Copyright © {new Date().getFullYear()} MKCM. Tous droits réservés.
      </div>
    </footer>
  );
}
