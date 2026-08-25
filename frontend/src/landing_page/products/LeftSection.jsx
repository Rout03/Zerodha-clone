import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div
      className="container"
      style={{
        marginLeft: "-15px",
      }}
    >
      <div className="row align-items-center py-5">

        {/* Left Image */}
        <div className="col-lg-7 col-md-6 text-center">
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

        {/* Right Content */}
        <div
          className="col-lg-5 col-md-6"
          style={{
            paddingLeft: "60px",
          }}
        >
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

          {/* Links */}
          <div className="mb-4">
            <a
              href={tryDemo}
              style={{
                color: "#387ed1",
                fontSize: "18px",
                textDecoration: "none",
                marginRight: "70px",
              }}
            >
              Try demo&nbsp; →
            </a>

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

          {/* App Badges */}
          <div className="d-flex align-items-center gap-4">
            <a href={googlePlay}>
              <img
                src="/media/googleplaybadge.svg"
                alt="Google Play"
                style={{
                  width: "140px",
                  height: "49px",
                }}
              />
            </a>

            <a href={appStore}>
              <img
                src="/media/appstorebadge.svg"
                alt="App Store"
                style={{
                  width: "140px",
                  height: "49px",
                }}
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeftSection;