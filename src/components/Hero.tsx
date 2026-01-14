export default function Hero() {
  return (
    <section
      id="Home"
      style={{
        scrollMarginTop: "120px",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #0b1f33 0%, #0f2a44 55%, #143a5f 100%)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          paddingTop: 120,
          paddingBottom: 120,
        }}
      >
        <h1 style={{ fontSize: 56, margin: 0, lineHeight: 1.05, fontWeight: 800 }}>
          MKCM Consulting Services
        </h1>

        <p
          style={{
            fontSize: 18,
            marginTop: 18,
            maxWidth: 760,
            lineHeight: 1.6,
            opacity: 0.9,
          }}
        >
          Conseil et développement de solutions numériques pour accompagner votre
          transformation digitale.
        </p>

        <div
          style={{
            marginTop: 28,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <a
            href="/services"
            style={{
              backgroundColor: "white",
              color: "#0b1f33",
              padding: "14px 20px",
              borderRadius: 12,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Voir nos services
          </a>

          <a
            href="/contact"
            style={{
              backgroundColor: "#f59e0b",
              color: "white",
              padding: "14px 20px",
              borderRadius: 12,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Nous contacter
          </a>
        </div>
      </div>

      {/* Transition vague */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -1,
          pointerEvents: "none",
        }}
      >
        <svg viewBox="0 0 1440 200" style={{ width: "100%", height: 160 }}>
          <path
            d="M0,120 C240,190 480,190 720,140 C960,90 1200,90 1440,150 L1440,200 L0,200 Z"
            fill="rgba(255,255,255,0.08)"
          />
          <path
            d="M0,135 C240,205 480,205 720,155 C960,105 1200,105 1440,165"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}
