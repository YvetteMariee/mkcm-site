const steps = [
  {
    number: "01",
    title: "Cadrer",
    text: "Nous clarifions votre besoin, vos priorités et les résultats attendus.",
  },
  {
    number: "02",
    title: "Concevoir",
    text: "Nous proposons une solution claire, avec un design sobre et efficace.",
  },
  {
    number: "03",
    title: "Livrer",
    text: "Nous déployons rapidement, avec un suivi et des recommandations actionnables.",
  },
];

const stats = [
  { label: "Projets livrés", value: "40+" },
  { label: "Délai moyen", value: "5 semaines" },
  { label: "Satisfaction", value: "4,9/5" },
  { label: "Formats", value: "Web · Brand" },
];

const processCards = [
  {
    title: "Découvrir",
    text: "Nous explorons votre vision et comprenons les besoins clés de votre entreprise.",
  },
  {
    title: "Conseiller",
    text: "Nous proposons une stratégie alignée sur vos objectifs et vos ressources.",
  },
  {
    title: "Développer",
    text: "Nous mettons en œuvre la solution avec un objectif clair pour toutes les parties prenantes.",
  },
  {
    title: "Analyser",
    text: "Nous suivons les KPI pour optimiser les performances après la mise en œuvre.",
  },
  {
    title: "Optimiser",
    text: "Nous ajustons la stratégie pour faire progresser votre vision.",
  },
];

export default function Process() {
  return (
    <section id="approach" style={{ padding: "96px 24px", backgroundColor: "#f8f6f2" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ textTransform: "uppercase", letterSpacing: "0.22em", fontSize: 12, color: "#5c6b79" }}>
            Méthode
          </p>
          <h2 style={{ fontSize: 38, margin: "16px 0" }}>Un process clair, sans frictions.</h2>
          <p style={{ color: "#5c6b79", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
            Nous privilégions une structure simple : cadrer, produire, transmettre. Chaque phase est
            documentée et compréhensible pour vos équipes.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 24,
                padding: 28,
                border: "1px solid rgba(16, 20, 24, 0.08)",
                boxShadow: "0 20px 50px rgba(16, 20, 24, 0.08)",
              }}
            >
              <div style={{ fontSize: 14, color: "#ff7a59", fontWeight: 700 }}>{step.number}</div>
              <h3 style={{ margin: "12px 0 10px", fontSize: 20 }}>{step.title}</h3>
              <p style={{ margin: 0, color: "#5c6b79", lineHeight: 1.6 }}>{step.text}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 48,
            backgroundColor: "#101418",
            borderRadius: 28,
            padding: "28px 32px",
            color: "#fff",
            display: "grid",
            gap: 20,
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: 22, fontWeight: 700 }}>{stat.value}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 48,
            display: "grid",
            gap: 18,
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          }}
        >
          {processCards.map((card) => (
            <div
              key={card.title}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 18,
                padding: 20,
                border: "1px solid rgba(16, 20, 24, 0.08)",
                display: "grid",
                gap: 10,
              }}
              className="card-hover"
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  backgroundColor: "#ff7a59",
                  color: "#ffffff",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                ✓
              </div>
              <div style={{ fontWeight: 700 }}>{card.title}</div>
              <p style={{ margin: 0, color: "#5c6b79", fontSize: 13, lineHeight: 1.6 }}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
