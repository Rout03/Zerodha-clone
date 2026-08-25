import React from "react";
import { FaSearch } from "react-icons/fa";

const Heros = () => {
  return (
    <section className="container py-5">

      {/* Main Blue Container */}
      <div
        style={{
          width: "687.2px",
          height: "160px",
          padding: "24px",
          backgroundColor: "#387ed1",
          margin: "0 auto",
          borderRadius: "6px",
        }}
      >
        {/* Top Section */}
        <div className="d-flex justify-content-between align-items-center mb-3">

          {/* Support Portal */}
          <h2
            className="mb-0"
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#000",
            }}
          >
            Support Portal
          </h2>

          {/* My Tickets */}
          <button
            type="button"
            className="btn"
            style={{
              fontSize: "16px",
              padding: "6px 16px",
              color: "#fff",
              backgroundColor: "#000",
              border: "none",
              borderRadius: "5px",
              transition: "all 0.25s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 5px 12px rgba(0, 0, 0, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Show Tickets
          </button>
        </div>

        {/* Search Box */}
        <div
          className="position-relative"
          style={{
            width: "100%",
          }}
        >
          {/* Search Icon */}
          <FaSearch
            className="position-absolute"
            style={{
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#777",
              fontSize: "16px",
              zIndex: 2,
            }}
          />

          {/* Search Input */}
          <input
            type="text"
            className="form-control"
            placeholder="How do I open my account, How do I activate F&O..."
            style={{
              height: "48px",
              paddingLeft: "45px",
              paddingRight: "15px",
              fontSize: "16px",
              border: "none",
              borderRadius: "5px",
              outline: "none",
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default Heros;