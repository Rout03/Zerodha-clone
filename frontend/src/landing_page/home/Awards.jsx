import React from "react";

const Awards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src="public/media/largestBroker.svg" alt="largestBroker image" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in india</h1>
          <p className="mb-5">
            2+ million zerodha clients contributes to over 15% of all over
            india.
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual fund</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="public/media/pressLogos.png"
            alt="presslogo img"
            style={{ width: "80%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;
