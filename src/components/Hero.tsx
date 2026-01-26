const navItems = [
  { label: "Studio", href: "#studio" },
  { label: "Travaux", href: "#work" },
  { label: "Expertises", href: "#expertise" },
  { label: "Méthode", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        scrollMarginTop: "120px",
        padding: "32px 24px 96px",
        background: "linear-gradient(180deg, #f8f6f2 0%, #ffffff 55%, #f8f6f2 100%)",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            padding: "12px 0 48px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontWeight: 700, letterSpacing: "0.08em" }}>STUDIO NORD</div>
          <nav style={{ display: "flex", gap: 20, flexWrap: "wrap", fontSize: 14 }}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} style={{ color: "#5c6b79" }}>
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid rgba(16, 20, 24, 0.12)",
              fontSize: 14,
            }}
          >
            Démarrer
          </a>
        </header>

        <div
          style={{
            display: "grid",
            gap: 40,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ textTransform: "uppercase", letterSpacing: "0.22em", fontSize: 12, color: "#5c6b79" }}>
              Conseil digital & produits web
            </p>
            <h1 style={{ fontSize: 52, margin: "16px 0", lineHeight: 1.05 }}>
              MKCM accompagne les PME et équipes ambitieuses vers des sites clairs, rapides et rentables.
            </h1>
            <p style={{ fontSize: 18, color: "#5c6b79", maxWidth: 520, lineHeight: 1.6 }}>
              Nous clarifions vos objectifs, concevons la solution adaptée et livrons un site
              qui inspire confiance et génère des résultats concrets.
            </p>
            <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href="#work"
                style={{
                  backgroundColor: "#101418",
                  color: "#fff",
                  padding: "14px 22px",
                  borderRadius: 999,
                  fontWeight: 600,
                }}
              >
                Voir les études
              </a>
              <a
                href="#contact"
                style={{
                  border: "1px solid rgba(16, 20, 24, 0.16)",
                  padding: "14px 22px",
                  borderRadius: 999,
                  fontWeight: 600,
                }}
              >
                Planifier un appel
              </a>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 28,
              padding: 28,
              border: "1px solid rgba(16, 20, 24, 0.08)",
              boxShadow: "0 20px 60px rgba(16, 20, 24, 0.08)",
              display: "grid",
              gap: 20,
            }}
            className="card-hover"
          >
            <img
              src="/illustrations/hero.svg"
              alt=""
              style={{ width: "100%", borderRadius: 20 }}
            />
            <div style={{ display: "grid", gap: 8 }}>
              <span style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.18em", color: "#5c6b79" }}>
                Focus actuel
              </span>
              <h2 style={{ fontSize: 24, margin: 0 }}>Refonte de parcours client B2B</h2>
              <p style={{ margin: 0, color: "#5c6b79", lineHeight: 1.5 }}>
                Audit, architecture d’information et design d’interface pour une plateforme métier.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gap: 12,
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              }}
            >
              {[
                { label: "Durée", value: "6 semaines" },
                { label: "Livrables", value: "Brand kit + UI" },
                { label: "Équipe", value: "2 designers" },
                { label: "Zone", value: "Europe" },
              ].map((item) => (
                <div key={item.label} style={{ padding: 14, borderRadius: 16, background: "#f8f6f2" }}>
                  <div style={{ fontSize: 12, color: "#5c6b79" }}>{item.label}</div>
                  <div style={{ fontWeight: 600 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
