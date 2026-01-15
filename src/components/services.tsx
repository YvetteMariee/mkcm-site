const workItems = [
  {
    title: "Plateforme de ressources",
    desc: "Structure éditoriale claire, navigation filtrée et UI responsive.",
    tag: "Produit",
  },
  {
    title: "Identité pour un collectif",
    desc: "Système visuel, kit social media et micro-site de lancement.",
    tag: "Marque",
  },
  {
    title: "Outil de pilotage interne",
    desc: "Tableaux de bord, composants modulaires et design system léger.",
    tag: "Interface",
  },
];

const expertiseItems = [
  {
    title: "Stratégie de contenu",
    desc: "Positionnement, plan éditorial, hiérarchisation des messages.",
  },
  {
    title: "Design d’interface",
    desc: "Wireframes, prototypes, UI kit et documentation produit.",
  },
  {
    title: "Développement web",
    desc: "Sites rapides, accessibilité, optimisation de performance.",
  },
  {
    title: "Direction artistique",
    desc: "Typographies, palettes, iconographie et guides d’usage.",
  },
];

export default function Services() {
  return (
    <section style={{ backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "96px 24px" }} id="studio">
        <div
          style={{
            display: "grid",
            gap: 32,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ textTransform: "uppercase", letterSpacing: "0.24em", fontSize: 12, color: "#5c6b79" }}>
              Le studio
            </p>
            <h2 style={{ fontSize: 38, margin: "16px 0" }}>
              Une équipe légère pour des projets bien cadrés.
            </h2>
            <p style={{ color: "#5c6b79", lineHeight: 1.7 }}>
              Nous travaillons en cycles courts, avec un point hebdomadaire et des livrables
              validés étape par étape. Chaque mission reste focalisée sur l’essentiel.
            </p>
          </div>
          <div
            style={{
              borderRadius: 24,
              padding: 24,
              background: "#f8f6f2",
              display: "grid",
              gap: 16,
              border: "1px solid rgba(16, 20, 24, 0.06)",
            }}
          >
            {[
              "Cadrage en 2 semaines",
              "Design modulaire",
              "Collaboration asynchrone",
              "Documentation livrée",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 999,
                    backgroundColor: "#ff7a59",
                    display: "inline-block",
                  }}
                />
                <span style={{ fontWeight: 600 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="work" style={{ backgroundColor: "#f8f6f2" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "96px 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div>
              <p style={{ textTransform: "uppercase", letterSpacing: "0.22em", fontSize: 12, color: "#5c6b79" }}>
                Travaux sélectionnés
              </p>
              <h2 style={{ fontSize: 38, margin: "16px 0" }}>Quelques missions récentes.</h2>
            </div>
            <p style={{ color: "#5c6b79", maxWidth: 320 }}>
              Des projets neutres et variés pour des équipes produit, des organismes publics et des PME.
            </p>
          </div>

          <div
            style={{
              marginTop: 32,
              display: "grid",
              gap: 20,
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {workItems.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 22,
                  padding: 24,
                  border: "1px solid rgba(16, 20, 24, 0.08)",
                  display: "grid",
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 12, color: "#ff7a59", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                  {item.tag}
                </span>
                <h3 style={{ margin: 0, fontSize: 20 }}>{item.title}</h3>
                <p style={{ margin: 0, color: "#5c6b79", lineHeight: 1.5 }}>{item.desc}</p>
                <span style={{ fontSize: 13, color: "#101418" }}>Étude synthétique →</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="expertise" style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "96px 24px" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ textTransform: "uppercase", letterSpacing: "0.22em", fontSize: 12, color: "#5c6b79" }}>
              Expertises
            </p>
            <h2 style={{ fontSize: 38, margin: "16px 0" }}>Un spectre complet, sans superflu.</h2>
          </div>
          <div
            style={{
              marginTop: 32,
              display: "grid",
              gap: 20,
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {expertiseItems.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "#f8f6f2",
                  borderRadius: 20,
                  padding: 24,
                  border: "1px solid rgba(16, 20, 24, 0.06)",
                }}
              >
                <h3 style={{ margin: "0 0 12px", fontSize: 18 }}>{item.title}</h3>
                <p style={{ margin: 0, color: "#5c6b79", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
