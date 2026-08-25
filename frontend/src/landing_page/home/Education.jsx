import React from "react";

function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Side Image */}
        <div className="col-lg-6 d-flex justify-content-start mb-4 mb-lg-0">
          <img
            src="https://zerodha.com/static/images/index-education.svg"
            alt="Varsity"
            className="img-fluid"
            style={{
              width: "80%",
              marginLeft: "-30px",
            }}
          />
        </div>

        {/* Right Side Content */}
        <div className="col-lg-6">
          <h2
            className="fw-semibold mb-4"
            style={{
              fontSize: "2.1rem",
              color: "#424242",
            }}
          >
            Free and open market education
          </h2>

          <p
            className="text-muted mb-4"
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.8",
            }}
          >
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href="#"
            className="text-decoration-none fw-semibold"
            style={{ color: "#387ed1" }}
          >
            Varsity <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>

          <div className="my-5"></div>

          <p
            className="text-muted mb-4"
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.8",
            }}
          >
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a
            href="#"
            className="text-decoration-none fw-semibold"
            style={{ color: "#387ed1" }}
          >
            TradingQ&amp;A <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
