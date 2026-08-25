import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Side */}
        <div className="col-lg-7 col-md-6 mb-5 mb-md-0">
          <h2 className="fw-semibold mb-4" style={{ fontSize: "2.5rem" }}>
            Unbeatable pricing
          </h2>

          <p
            className="text-muted"
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.8",
            }}
          >
            We pioneered the concept of discount broking and price transparency
           <br></br> in India. Flat fees and no hidden charges.
          </p>

          <a
            href="#"
            className="text-decoration-none fw-semibold"
            style={{ fontSize: "1.1rem" }}
          >
            See pricing
            <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </div>

        {/* Right Side */}
        <div className="col-lg-5 col-md-6">
          <div className="row gx-2 gy-4">
            {/* Item 1 */}
            <div className="col-6">
              <div className="d-flex align-items-center">
                <h1
                  className="text-warning fw-semibold me-2 mb-0"
                  style={{ fontSize: "3.8rem" }}
                >
                  ₹0
                </h1>

                <p
                  className="text-muted mb-0"
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                  }}
                >
                  Free account <br />
                  opening
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="col-6">
              <div className="d-flex align-items-center">
                <h1
                  className="text-warning fw-semibold me-2 mb-0"
                  style={{ fontSize: "3.8rem" }}
                >
                  ₹0
                </h1>

                <p
                  className="text-muted mb-0"
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                  }}
                >
                  Free equity delivery <br />
                  and direct mutual funds
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="col-6">
              <div className="d-flex align-items-center">
                <h1
                  className="text-warning fw-semibold me-2 mb-0"
                  style={{ fontSize: "3.8rem" }}
                >
                  ₹20
                </h1>

                <p
                  className="text-muted mb-0"
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                  }}
                >
                  Intraday and <br />
                  F&amp;O
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
