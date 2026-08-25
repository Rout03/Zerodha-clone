import React from "react";

function OpenAccount() {
  return (
    <div className="container py-5 text-center">
      <h2
        className="fw-semibold mb-3"
        style={{
          fontSize: "2.4rem",
          color: "#424242",
        }}
      >
        Open a Zerodha account
      </h2>

      <p
        className="text-muted mb-4"
        style={{
          fontSize: "1.05rem",
          lineHeight: "1.7",
        }}
      >
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
        F&amp;O trades.
      </p>

      <button
        className="btn btn-primary px-5 py-2 fw-semibold mt-3"
        style={{
          fontSize: "1.05rem",
          width: "220px",
        }}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default OpenAccount;
