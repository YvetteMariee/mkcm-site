export default function Process() {
  return (
    <section
      id="process"
      style={{ 
        scrollMarginTop: "90px",
        padding: "96px 24px",
        backgroundColor: "#ffffff",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Titre */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 900,
              color: "#0b1f33",
              marginBottom: 16,
            }}
          >
            Notre processus
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#425466",
              maxWidth: 700,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Une collaboration claire, structurée et orientée résultats pour
            transformer vos idées en solutions numériques concrètes.
          </p>
        </div>

        {/* Étapes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 32,
          }}
        >
          <Step
            number="01"
            title="Analyse du besoin"
            text="Nous échangeons avec vous afin de comprendre vos objectifs, vos contraintes et vos attentes métier."
          />
          <Step
            number="02"
            title="Proposition de solution"
            text="Nous définissons une solution technique adaptée, claire et réaliste, en accord avec votre budget."
          />
          <Step
            number="03"
            title="Développement & mise en œuvre"
            text="Nous concevons et développons la solution en respectant les bonnes pratiques et les délais convenus."
          />
          <Step
            number="04"
            title="Suivi & accompagnement"
            text="Nous assurons le suivi, la maintenance et l’évolution de la solution selon vos besoins."
          />
        </div>

        {/* Call to action */}
        <div style={{ textAlign: "center", marginTop: 72 }}>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              backgroundColor: "#f59e0b",
              color: "white",
              padding: "14px 28px",
              borderRadius: 999,
              fontWeight: 800,
              fontSize: 16,
              textDecoration: "none",
            }}
          >
            Démarrer un projet
          </a>
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        borderRadius: 20,
        padding: 32,
        boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)",
      }}
    >
      <div
        style={{
          fontSize: 32,
          fontWeight: 900,
          color: "#f59e0b",
          marginBottom: 12,
        }}
      >
        {number}
      </div>
      <h3
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: "#0b1f33",
          marginBottom: 10,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 15,
          color: "#425466",
          lineHeight: 1.6,
        }}
      >
        {text}
      </p>
    </div>
  );
}
