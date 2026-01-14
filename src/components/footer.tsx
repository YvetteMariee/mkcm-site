export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e5e5",
        padding: "24px 16px",
        textAlign: "center", 
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            margin: 0,
            fontSize: 14,
            color: "#425466",
          }}
        >
          © {new Date().getFullYear()} MKCM CONSULTING SERVICES. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
