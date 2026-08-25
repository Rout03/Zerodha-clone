import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center py-5">

        {/* Left Content */}
        <div className="col-lg-5 col-md-6">
          <h1
            style={{
              fontSize: "32px",
              marginBottom: "25px",
              fontWeight: "500",
            }}
          >
            {productName}
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.9",
              marginBottom: "25px",
            }}
          >
            {productDescription}
          </p>

          <a
            href={learnMore}
            style={{
              color: "#387ed1",
              fontSize: "18px",
              textDecoration: "none",
            }}
          >
            Learn more&nbsp; →
          </a>
        </div>

        {/* Right Image */}
        <div className="col-lg-6 col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default RightSection;