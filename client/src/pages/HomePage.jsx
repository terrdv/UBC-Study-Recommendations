import {Link} from "react-router-dom";

function HomePage() {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to bottom, #0a174e 0%, #101935 100%)", // Darker, subtle gradient
      fontFamily: "'Inter', Arial, sans-serif"
    }}>
      <h1 style={{
        color: "#fff",
        fontWeight: 700,
        fontSize: "2.5rem",
        margin: 0
      }}>
        UBC Study AI
      </h1>
      <p style={{
        fontSize: "1.2rem",
        color: "#cfd8dc",
        marginTop: "12px",
        marginBottom: "32px"
      }}>
        Analyze your study habits and get personalized location and method recommendations
      </p>
      <Link to='/questions'
        style={{
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          padding: "14px 36px",
          borderRadius: "32px",
          fontSize: "1.1rem",
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(25, 118, 210, 0.18)",
          transition: "background 0.2s"
        }}
      >
        Take the Questionnaire
      </Link>
    </div>
  );
}

export default HomePage;