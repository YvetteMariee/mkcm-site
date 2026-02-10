const inputStyle: React.CSSProperties = {
  padding: "14px 16px",
  fontSize: 15,
  borderRadius: 4,
  border: "1px solid #D1D5DB",
  outline: "none",
};

export default function Home() {
  return (
    <main>

      {/* SECTION 1 — HERO */}
<section
  style={{
    backgroundColor: "#0B1F33",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  }}
>
  <div
    style={{
      maxWidth: 1160,
      margin: "0 auto",
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      gap: 64,
    }}
  >
    {/* GAUCHE — TEXTE */}
    <div style={{ flex: 1 }}>
      <h1
        style={{
          color: "white",
          fontSize: 56,
          fontWeight: 600,
          lineHeight: 1.2,
          marginBottom: 32,
        }}
      >
        DONNER TOUTE SA MESURE <br />
        À VOTRE ENTREPRISE
      </h1>

      <a
        href="/contact"
        style={{
          display: "inline-block",
          backgroundColor: "#F58220",
          color: "white",
          padding: "16px 36px",
          fontWeight: 600,
          fontSize: 16,
          borderRadius: 4,
          textDecoration: "none",
        }}
      >
        Nos services
      </a>
    </div>

    {/* DROITE — VISUEL */}
   <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src="/illustration.png"
              alt="Illustration IT"
              style={{
                maxWidth: "100%",
                animation: "float 6s ease-in-out infinite",
              }}
            />
          </div>
  </div>
</section>

      {/* SECTION 2 — EXPERTISES (STYLE KEVMAX) */}
      <section
        style={{
          backgroundColor: "#F8F6F2",
          padding: "120px 24px",
        }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 32,
            }}
          >
            {[
              {
                title: "Développement d'applications web",
                text: "Création d'applications web adaptées à vos besoins pour améliorer votre performance, en utilisant les dernières technologies pour des applications performantes et conviviales.",
              },
              {
                title: "Développement d'applications mobile",
                text: "Création d'applications mobiles natifs & hybrides pour tout vos besoins qui vous aideront à fidéliser vos clients en leur offrant une expérience utilisateur optimale.",
              },
              {
                title: "Développement de sites web et e-commerce",
                text: "Création de sites web, blog et e-commerce professionnels pour votre entreprise, adaptés à vos besoins pour améliorer votre performance commerciale.",
              },
              {
                title: "Transformation numérique",
                text: "Modernisation des outils et accompagnement stratégique.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "white",
                  padding: 32,
                  borderRadius: 8,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>
                  {item.title}
                </h3>
                <p style={{ color: "#5C6B79" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


 {/*section 3*/}
 <section
  style={{
    background: "linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)",
    padding: "120px 24px",
  }}
>
  <div style={{ maxWidth: 1200, margin: "0 auto" }}>
    {/* HEADER */}
    <div style={{ marginBottom: 80 }}>
      <h2
        style={{
          fontSize: 44,
          fontWeight: 700,
          marginBottom: 16,
          letterSpacing: "-0.02em",
        }}
      >
        Notre mission & nos objectifs
      </h2>

      <div
        style={{
          width: 80,
          height: 4,
          backgroundColor: "#F58220",
          marginBottom: 32,
        }}
      />

      <p
        style={{
          maxWidth: 760,
          fontSize: 18,
          lineHeight: 1.7,
          color: "#4B5563",
        }}
      >
        MKCM Consulting accompagne les entreprises dans la conception et la
        modernisation de leurs systèmes d’information afin de soutenir leur
        croissance, renforcer leur sécurité et améliorer leur performance
        opérationnelle.
      </p>
    </div>

    {/* OBJECTIFS */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 32,
      }}
    >
      {[
        {
          title: "Créer de la valeur",
          text: "Aligner les solutions IT avec les enjeux métiers pour générer un impact mesurable.",
        },
        {
          title: "Sécuriser les systèmes",
          text: "Renforcer la fiabilité, la conformité et la résilience des infrastructures numériques.",
        },
        {
          title: "Accélérer la transformation",
          text: "Accompagner les organisations dans leurs projets de transformation digitale.",
        },
        {
          title: "Apporter de la clarté",
          text: "Structurer la gouvernance IT et faciliter la prise de décision stratégique.",
        },
      ].map((item) => (
        <div
          key={item.title}
          style={{
            backgroundColor: "#FFFFFF",
            padding: "32px 28px",
            borderRadius: 12,
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.04)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          className="card-hover"
        >
          <h3
            style={{
              fontSize: 20,
              marginBottom: 12,
              fontWeight: 600,
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "#6B7280",
            }}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* SECTION 4 — NOTRE COLLABORATION */}
<section
  style={{
    backgroundColor: "#0F3D3E",
    padding: "96px 24px",
  }}
>
  <div
    style={{
      maxWidth: 1160,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "center",
    }}
  >
    {/* GAUCHE — TEXTE */}
    <div style={{ color: "white" }}>
      <h2
        style={{
          fontSize: 40,
          fontWeight: 700,
          marginBottom: 24,
        }}
      >
        Notre collaboration
      </h2>

      <p
        style={{
          fontSize: 18,
          lineHeight: 1.6,
          color: "#E6F2F2",
        }}
      >
        MKCM Consulting accompagne les entreprises avec une approche
        stratégique, structurée et orientée résultats.  
        Nous travaillons en étroite collaboration avec nos clients afin
        de sécuriser leurs projets, accélérer leur transformation et
        créer de la valeur durable.
      </p>
    </div>

    {/* DROITE — FORMULAIRE VISUEL */}
    <div
      style={{
        backgroundColor: "white",
        padding: 32,
        borderRadius: 8,
        boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
      }}
    >
      <h3
        style={{
          fontSize: 24,
          fontWeight: 700,
          marginBottom: 24,
        }}
      >
        Demander un avis
      </h3>

      <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <input placeholder="Nom / Entreprise" style={inputStyle} />
        <input placeholder="Email" style={inputStyle} />
        <input placeholder="Téléphone" style={inputStyle} />
        <textarea
          placeholder="Message"
          rows={4}
          style={inputStyle}/>

        <button
          type="button"
          style={{
            marginTop: 16,
            backgroundColor: "#0B1F33",
            color: "white",
            border: "none",
            padding: "14px 20px",
            fontSize: 16,
            fontWeight: 600,
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Demander
        </button>
      </form>
    </div>
  </div>
</section>


    </main>
  );
}
