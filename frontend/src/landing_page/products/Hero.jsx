import React from "react";

const Hero = () => {
  return (
    <div className="container">
  <div className="row p-5 mb-5 mt-5">
    <h2 className="text-center">
      <span style={{ fontSize: "35px" }}>
        Zerodha Products
      </span>
      <br />

      <span style={{ fontSize: "18px", color: "#666" }}>
        Sleek, modern, and intuitive trading platforms
      </span>
      <br />

      <span style={{ fontSize: "18px",color: "#666" }}>
        Check out our{" "}
        <a href="#" style={{ textDecoration: "none" }}>
          investment offerings →
        </a>
      </span>
    </h2>
  </div>

  <hr />
</div>
  );
};

export default Hero;
