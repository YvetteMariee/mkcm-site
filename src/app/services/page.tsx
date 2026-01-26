const serviceSections = [
  {
    title: "Développement Web",
    description:
      "Processus d’écriture d’un site ou d’une page web dans un langage technique, une étape incontournable pour qu’un contenu soit mis en ligne et atteigne ses lecteurs.",
    cards: [
      {
        title: "Développement d'applications web",
        text: "Création d’application web SPA et PWA pour offrir la meilleure expérience utilisateur.",
        icon: "/illustrations/service-web.svg",
      },
      {
        title: "Développement de sites web et e-commerce",
        text: "Création de site internet, blog et e-commerce basé sur les technologies web modernes.",
        icon: "/illustrations/service-ecommerce.svg",
      },
      {
        title: "Développement d'applications mobile",
        text: "Applications mobiles natives & hybrides pour fidéliser vos clients.",
        icon: "/illustrations/service-mobile.svg",
      },
    ],
  },
  {
    title: "Design & Conception",
    description:
      "Processus de conception graphique pour créer une identité claire et cohérente sur tous vos supports.",
    cards: [
      {
        title: "Design graphique",
        text: "Création de logos, affiches, brochures, cartes de visite et supports print.",
        icon: "/illustrations/service-graphic.svg",
      },
      {
        title: "Design UI (Interface Utilisateur)",
        text: "Conception d’interfaces logicielles ou web claires et agréables à utiliser.",
        icon: "/illustrations/service-ui.svg",
      },
      {
        title: "Design UX (Expérience Utilisateur)",
        text: "Conception d’expériences centrées sur l’utilisateur et ses besoins.",
        icon: "/illustrations/service-ux.svg",
      },
    ],
  },
];

const collaborationSteps = [
  {
    title: "Découvrir",
    text: "Nous explorons votre vision, réfléchissons à vos idées et apprenons les besoins de votre entreprise.",
  },
  {
    title: "Conseiller",
    text: "Nous proposons des solutions qui alignent vos objectifs avec les besoins de vos clients.",
  },
  {
    title: "Développer",
    text: "Nous mettons en œuvre votre solution avec un objectif clairement défini.",
  },
  {
    title: "Analyser",
    text: "Nous suivons et testons vos KPI pour analyser les performances après mise en œuvre.",
  },
  {
    title: "Optimiser",
    text: "Nous ajustons votre stratégie pour faire progresser votre vision.",
  },
];

const stats = [
  { value: "+20", label: "Sites e-commerce réalisés", image: "/illustrations/stat-commerce.svg" },
  { value: "+80", label: "Branding graphiques réalisés", image: "/illustrations/stat-branding.svg" },
  { value: "+30", label: "Applications web réalisées", image: "/illustrations/stat-web.svg" },
  { value: "+15", label: "Applications mobiles réalisées", image: "/illustrations/stat-mobile.svg" },
];

export const metadata = {
  title: "Nos services – MKCM Consult",
  description: "Découvrez les services numériques et sécurisés proposés par MKCM Consult.",
};

export default function ServicesPage() {
  return (
    <main>
      <section style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "96px 24px", display: "grid", gap: 48, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: 44, margin: 0, lineHeight: 1.1, color: "#101418" }}>
              Nous avons tout ce dont vous avez besoin
            </h1>
            <p style={{ marginTop: 18, color: "#5c6b79", lineHeight: 1.7 }}>
              Nous nous occupons de la création de votre identité numérique, de votre site web, de votre image de marque
              et de votre communication digitale afin d’améliorer la performance de votre entreprise.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                marginTop: 24,
                backgroundColor: "#ff7a59",
                color: "#ffffff",
                padding: "12px 28px",
                borderRadius: 12,
                fontWeight: 600,
              }}
            >
              Demander un devis
            </a>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="/illustrations/services-hero.svg" alt="" style={{ width: "100%", maxWidth: 420 }} />
          </div>
        </div>
      </section>

      {serviceSections.map((section) => (
        <section key={section.title} style={{ backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <div>
                <h2 style={{ margin: 0, fontSize: 28 }}>{section.title}</h2>
                <p style={{ marginTop: 12, maxWidth: 520, color: "#5c6b79", lineHeight: 1.7 }}>{section.description}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #cbd5e1", display: "grid", placeItems: "center", color: "#94a3b8" }}>←</div>
                <span style={{ color: "#5c6b79", fontSize: 14 }}>1 - 3</span>
                <div style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #ff7a59", display: "grid", placeItems: "center", color: "#ff7a59" }}>→</div>
              </div>
            </div>

            <div style={{ marginTop: 32, display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {section.cards.map((card) => (
                <div
                  key={card.title}
                  style={{
                    border: "1px solid rgba(16, 20, 24, 0.16)",
                    borderRadius: 18,
                    padding: 28,
                    backgroundColor: "#ffffff",
                    textAlign: "center",
                    display: "grid",
                    gap: 16,
                  }}
                  className="card-hover"
                >
                  <img src={card.icon} alt="" style={{ width: 64, height: 64, margin: "0 auto" }} />
                  <h3 style={{ margin: 0, fontSize: 18, color: "#2d3640" }}>{card.title}</h3>
                  <p style={{ margin: 0, color: "#5c6b79", lineHeight: 1.6, fontSize: 14 }}>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section id="collaboration" style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 24px" }}>
          <h2 style={{ textAlign: "center", margin: 0, fontSize: 32 }}>Notre collaboration</h2>
          <p style={{ marginTop: 16, color: "#5c6b79", lineHeight: 1.7 }}>
            Nous sommes très attachés à la qualité des prestations que nous proposons. Nous vous accompagnons en cinq
            temps, en débutant par une analyse fine et méthodique de vos objectifs.
          </p>

          <div style={{ marginTop: 32, display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
            {collaborationSteps.map((step) => (
              <div
                key={step.title}
                style={{
                  backgroundColor: "#8fa6b1",
                  borderRadius: 16,
                  padding: 20,
                  color: "#ffffff",
                  display: "grid",
                  gap: 12,
                }}
                className="card-hover"
              >
                <div style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: "rgba(255,255,255,0.2)", display: "grid", placeItems: "center" }}>★</div>
                <h3 style={{ margin: 0, fontSize: 18 }}>{step.title}</h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6 }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 24px" }}>
          <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 18,
                  border: "1px solid rgba(16, 20, 24, 0.08)",
                  padding: 24,
                  textAlign: "center",
                  display: "grid",
                  gap: 12,
                }}
                className="card-hover"
              >
                <img src={stat.image} alt="" style={{ width: "100%", maxWidth: 160, margin: "0 auto" }} />
                <div style={{ fontSize: 36, color: "#ff7a59", fontWeight: 700 }}>{stat.value}</div>
                <div style={{ color: "#5c6b79" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
