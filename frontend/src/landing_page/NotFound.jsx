function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#a9c0cc",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "white",
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          maxWidth: "450px",
        }}
      >
        <h1
          style={{
            fontSize: "100px",
            margin: "0",
            color: "red",
            fontWeight: "bold",
          }}
        >
          404
        </h1>

        <h2 style={{ marginBottom: "10px", color: "#222" }}>
          Page Not Found 😕
        </h2>

        <p style={{ color: "#777", marginBottom: "30px" }}>
          Oops! The page you're looking for doesn't exist.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
           style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "8px",
            background: "#333",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }} 
        >
          Go Home 🏠
        </button>
      </div>
    </div>
  );
}

export default NotFound;