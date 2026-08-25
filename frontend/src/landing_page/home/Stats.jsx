import React from "react";

const Stats = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Side */}
        <div className="col-lg-6 pe-5">
          <h1 className="mb-5">Trust with confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India's largest broker,
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-4 mt-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4 mt-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4 mt-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Right Side */}
        <div className="col-lg-6 text-center">
          <img
            src="/media/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />

          <div className="mt-4">
            <a
              href=""
              className="me-5"
              style={{ textDecoration: "none" }}
            >
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </a>

            <a
              href=""
              style={{ textDecoration: "none" }}
            >
              Try Kite Demo{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stats;