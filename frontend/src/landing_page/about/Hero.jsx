import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 mb-5 mt-5">
        <h2 className="fs-3 text-center">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our team expertise.
        </h2>
      </div>
      <hr />
      <section
        className="container"
        style={{
          marginTop: "60px",
          marginBottom: "80px",
        }}
      >
        <div className="row justify-content-center">
          {/* Left Column */}
          <div className="col-lg-5 col-md-6">
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.8",
                marginBottom: "25px",
              }}
            >
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.8",
                marginBottom: "25px",
              }}
            >
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.8",
              }}
            >
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-lg-5 col-md-6">
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.8",
                marginBottom: "25px",
              }}
            >
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.8",
                marginBottom: "25px",
              }}
            >
              <a href="#" className="text-decoration-none">
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.8",
              }}
            >
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our{" "}
              <a href="#" className="text-decoration-none">
                blog
              </a>{" "}
              or see what the media is{" "}
              <a href="#" className="text-decoration-none">
                saying about us
              </a>{" "}
              or learn more about our business and product{" "}
              <a href="#" className="text-decoration-none">
                philosophies
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
