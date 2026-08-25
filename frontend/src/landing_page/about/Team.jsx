import React from "react";

const Team = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-5 ml-3">People</h2>

      <div className="row align-items-center justify-content-center">
        {/* Left Side */}
        <div className="col-lg-5 col-md-6 text-center">
          <img
            src="/media/Nithin.jpg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle"
            style={{
              width: "330px",
              height: "330px",
              objectFit: "cover",
            }}
          />

          <h4 className="mt-4">Nithin Kamath</h4>
          <p className="text-muted">Founder, CEO</p>
        </div>
        {/* Right Side */}
        <div className="col-lg-5 col-md-6">
          <p
            className="text-muted lh-lg content-text"
            style={{ fontSize: "17px" }}
          >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p
            className="text-muted lh-lg mt-4 content-text"
            style={{ fontSize: "17px" }}
          >
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p
            className="text-muted lh-lg mt-4 content-text"
            style={{ fontSize: "17px" }}
          >
            Playing basketball is his zen.
          </p>

          <p
            className="text-muted mt-4 content-text"
            style={{ fontSize: "17px" }}
          >
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
        ```
      </div>
    </section>
  );
};

export default Team;
