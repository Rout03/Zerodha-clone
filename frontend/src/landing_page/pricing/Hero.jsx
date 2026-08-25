import React from "react";

const Hero = () => {
  return (
    <section className="container py-5">

      {/* ================= HEADING ================= */}
      <div
        className="text-center"
        style={{
          marginBottom: "100px",
        }}
      >
        <h1
          className="fw-semibold mb-3"
          style={{
            fontSize: "50px",
            lineHeight: "1.2",
            letterSpacing: "-0.5px",
            color: "#424242",
          }}
        >
          All Prices
        </h1>

        <p
          className="text-secondary mb-0"
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          List of all charges and taxes
        </p>
      </div>

      {/* ================= CHARGES ROW ================= */}
      <div className="row justify-content-center text-center">

        {/* ================= CARD 1 ================= */}
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="px-3">

            {/* ₹0 Image */}
            <img
              src="/media/pricingeq.svg"
              alt="₹0"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />

            {/* Title */}
            <h3
              className="fw-semibold mb-3"
              style={{
                fontSize: "25px",
                lineHeight: "1.4",
                color: "#333",
                letterSpacing: "-0.2px",
              }}
            >
              Free equity delivery
            </h3>

            {/* Description */}
            <p
              className="text-secondary mx-auto"
              style={{
                maxWidth: "350px",
                fontSize: "16px",
                lineHeight: "1.7",
                marginBottom: "0",
              }}
            >
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>

          </div>
        </div>

        {/* ================= CARD 2 ================= */}
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="px-3">

            {/* ₹20 Image */}
            <img
              src="/media/othertrades.svg"
              alt="₹20"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />

            {/* Title */}
            <h3
              className="fw-semibold mb-3"
              style={{
                fontSize: "25px",
                lineHeight: "1.4",
                color: "#333",
                letterSpacing: "-0.2px",
              }}
            >
              Intraday and F&amp;O trades
            </h3>

            {/* Description */}
            <p
              className="text-secondary mx-auto mb-3"
              style={{
                maxWidth: "390px",
                fontSize: "16px",
                lineHeight: "1.7",
              }}
            >
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
            </p>

          </div>
        </div>

        {/* ================= CARD 3 ================= */}
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="px-3">

            {/* ₹0 Image */}
            <img
              src="/media/pricingeq.svg"
              alt="₹0"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />

            {/* Title */}
            <h3
              className="fw-semibold mb-3"
              style={{
                fontSize: "25px",
                lineHeight: "1.4",
                color: "#333",
                letterSpacing: "-0.2px",
              }}
            >
              Free direct MF
            </h3>

            {/* Description */}
            <p
              className="text-secondary mx-auto"
              style={{
                maxWidth: "350px",
                fontSize: "16px",
                lineHeight: "1.7",
                marginBottom: "0",
              }}
            >
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions &amp; DP charges.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;