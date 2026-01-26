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

const stats = [
  { value: "+20", label: "Sites e-commerce réalisés", image: "/illustrations/stat-commerce.svg" },
  { value: "+80", label: "Branding graphiques réalisés", image: "/illustrations/stat-branding.svg" },
  { value: "+30", label: "Applications web réalisées", image: "/illustrations/stat-web.svg" },
  { value: "+15", label: "Applications mobiles réalisées", image: "/illustrations/stat-mobile.svg" },
];

const aboutCards = [
  {
    title: "Notre mission",
    text:
      "Accompagner vos projets digitaux avec une vision claire, une exécution soignée et des résultats mesurables.",
    image: "/illustrations/mission.svg",
  },
  {
    title: "Nos objectifs",
    text:
      "Apporter des solutions fiables et évolutives, adaptées à vos enjeux de communication et de croissance.",
    image: "/illustrations/objectives.svg",
  },
];

const processCards = [
  {
    title: "Découvrir",
    text: "Nous explorons votre vision, réfléchissons à vos idées et apprenons vos besoins.",
  },
  {
    title: "Conseiller",
    text: "Nous proposons des solutions qui alignent vos objectifs avec vos ressources.",
  },
  {
    title: "Développer",
    text: "Nous mettons en œuvre votre solution avec un objectif clairement défini.",
  },
  {
    title: "Analyser",
    text: "Nous suivons et testons vos KPI pour analyser les performances.",
  },
  {
    title: "Optimiser",
    text: "Nous ajustons votre stratégie pour faire progresser votre vision.",
  },
];

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

export const metadata = {
  title: "Nos services – MKCM Consult",
  description: "Découvrez les services numériques et sécurisés proposés par MKCM Consult.",
};

export default function ServicesPage() {
  return (
    <main>
      <section id="collaboration" style={{ backgroundColor: "#ffffff" }}>
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

      <section style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 24px" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ textTransform: "uppercase", letterSpacing: "0.22em", fontSize: 12, color: "#5c6b79" }}>
              En savoir plus sur nous
            </p>
            <h2 style={{ fontSize: 32, margin: "16px 0" }}>Un accompagnement fiable et humain.</h2>
          </div>
          <div
            style={{
              marginTop: 32,
              display: "grid",
              gap: 24,
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {aboutCards.map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "#f8f6f2",
                  borderRadius: 24,
                  padding: 28,
                  border: "1px solid rgba(16, 20, 24, 0.08)",
                  display: "grid",
                  gap: 16,
                  textAlign: "center",
                }}
                className="card-hover"
              >
                <img src={card.image} alt="" style={{ width: "100%", maxWidth: 220, margin: "0 auto" }} />
                <h3 style={{ margin: 0, fontSize: 20 }}>{card.title}</h3>
                <p style={{ margin: 0, color: "#5c6b79", lineHeight: 1.6 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 24px" }}>
          <h2 style={{ textAlign: "center", margin: 0, fontSize: 32 }}>Notre collaboration</h2>
          <p style={{ marginTop: 16, color: "#5c6b79", lineHeight: 1.7 }}>
            Nous vous proposons une collaboration en cinq temps visant à protéger votre projet.
          </p>
          <div
            style={{
              marginTop: 32,
              display: "grid",
              gap: 18,
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            }}
          >
            {processCards.map((card) => (
              <div
                key={card.title}
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
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  ★
                </div>
                <h3 style={{ margin: 0, fontSize: 18 }}>{card.title}</h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6 }}>{card.text}</p>
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

      <section style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 24px" }}>
          <h2 style={{ textAlign: "center", margin: 0, fontSize: 32 }}>Ils nous font confiance</h2>
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
      </section>

    </main>
  );
}
