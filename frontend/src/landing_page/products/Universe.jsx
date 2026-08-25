import React from "react";

const Universe = () => {
  const products = [
    {
      image: "/media/zerodhaFundhouse.png",
      description:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      image: "/media/sensibulllogo.svg",
      description:
        "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      image: "/media/tijori.svg",
      description:
        "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      image: "/media/streaklogo.png",
      description:
        "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      image: "/media/smallcaselogo.png",
      description:
        "Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.",
    },
    {
      image: "/media/dittologo.png",
      description:
        "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <section
      className="container"
      style={{
        marginTop: "80px",
        marginBottom: "80px",
      }}
    >
      {/* Heading */}
      <div className="row text-center">
        <div className="col-12">
          <h1
            style={{
              fontSize: "38px",
              marginBottom: "18px",
            }}
          >
            The Zerodha Universe
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#555",
              marginBottom: "60px",
            }}
          >
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="row justify-content-center">
        {products.map((product, index) => (
          <div
            className="col-lg-4 col-md-6 col-sm-12 text-center"
            key={index}
            style={{
              marginBottom: "90px",
              padding: "0 35px",
            }}
          >
            {/* Image */}
            <div
              style={{
                height: "75px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "25px",
              }}
            >
              <img
                src={product.image}
                alt="Zerodha product"
                style={{
                  maxWidth: "190px",
                  maxHeight: "65px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.6",
                color: "#666",
                margin: "0 auto",
                maxWidth: "290px",
              }}
            >
              {product.description}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="row">
        <div className="col-12 text-center">
          <button
            className="btn btn-primary"
            style={{
              fontSize: "18px",
              padding: "12px 35px",
              borderRadius: "3px",
              marginTop: "5px",
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Universe;
