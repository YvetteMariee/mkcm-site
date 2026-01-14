const items = [
  { title: "Développement de sites web", desc: "Sites vitrine, landing pages, e-commerce. Rapides, responsives, pro.", icon: "🌐" },
  { title: "Développement d’applications web", desc: "Outils internes, tableaux de bord, portails clients, solutions sur mesure.", icon: "🧩" },
  { title: "Conseil en solutions informatiques", desc: "Audit, choix technologiques, accompagnement et cadrage projet.", icon: "💼" },
  { title: "Maintenance & support", desc: "Mises à jour, sécurité, corrections, optimisation et suivi.", icon: "🛠️" },
];

export default function Services() {
  return (
    <section id="services" 
    style={{ scrollMarginTop: "90px", padding: "70px 24px", backgroundColor: "#f5f7fb" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 32, margin: 0, fontWeight: 800, color: "#0b1f33" }}>Nos services</h2>
          <p style={{ marginTop: 10, color: "#425466" }}>Des solutions concrètes, orientées résultat.</p>
        </div>

        <div
          style={{
            marginTop: 34,
            display: "grid",
            gap: 18,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {items.map((it) => (
            <div
              key={it.title}
              style={{
                backgroundColor: "white",
                borderRadius: 16,
                padding: 22,
                border: "1px solid #e6eaf2",
                boxShadow: "0 8px 20px rgba(15, 42, 68, 0.06)",
              }}  

              
            >
              <div style={{ fontSize: 34 }}>{it.icon}</div>
              <h3 style={{ marginTop: 14, marginBottom: 8, fontSize: 18, fontWeight: 800, color: "#0b1f33" }}>
                {it.title}
              </h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "#425466" }}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
