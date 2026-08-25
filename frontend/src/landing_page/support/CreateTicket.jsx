import React from "react";

const CreateTicket = () => {
  return (
    <div className="container">
      <div className="row p-4 mt-4 mb-4">

        {/* Main Heading */}
        <h1
          className="text-center mb-4"
          style={{
            fontSize: "32px",
            fontWeight: "500",
            color: "#222222",
            letterSpacing: "0.2px",
            lineHeight: "1.4",
          }}
        >
          To create a ticket, select a relevant topic
        </h1>

        {/* 1st heading */}
        <div className="col-4 p-4 mt-2 mb-2 text-center">
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "#424242",
              marginBottom: "12px",
            }}
          >
            <i
              className="fa fa-plus-circle me-3"
              aria-hidden="true"
            ></i>
            Account Opening
          </h4>

          <div style={{ fontSize: "15px", fontWeight: "400" }}>
            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Online Account opening
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Offline Account opening
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Companies, partnership and Huf account
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Opening
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              NRI account opening
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              charges at Zerodha
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Getting started
            </a>
            <br/>
            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              KYC & Verification
            </a>
            <br />
          </div>
        </div>

        {/* 2nd heading */}
        <div className="col-4 p-4 mt-2 mb-2 text-center">
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "#424242",
              marginBottom: "12px",
            }}
          >
            <i className="fa-solid fa-user me-3"></i>
            Your Zerodha Account
          </h4>

          <div style={{ fontSize: "15px", fontWeight: "400" }}>
            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Login credentials
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Account modifiaction
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Your profile photo
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Transfer to SBI Bank
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Dp Id and Name
            </a>
            <br/>
            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Profie & personal details
            </a>
            <br/>
            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Account statements
            </a>
            <br/>
            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Trading & Demat Account
            </a>
            <br/>
          </div>
        </div>

        {/* 3rd heading */}
        <div className="col-4 p-4 mt-2 mb-2 text-center">
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "#424242",
              marginBottom: "12px",
            }}
          >
            <i className="fa-solid fa-money-bill-trend-up me-3"></i>
            Your Zerodha Account
          </h4>

          <div style={{ fontSize: "15px", fontWeight: "400" }}>
            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Margin/leverage, product and order types
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Kite web and mobile
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Trading FAQS
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Corporate actions
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Sentinel
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Kite API
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              pi and other platforms
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              GTT
            </a>
          </div>
        </div>

        {/* 4th heading */}
        <div className="col-4 p-4 mt-2 mb-2 text-center">
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "#424242",
              marginBottom: "12px",
            }}
          >
            <i className="fa-solid fa-money-check-dollar me-3"></i>
            Funds
          </h4>

          <div style={{ fontSize: "15px", fontWeight: "400" }}>
            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Adding funds
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Fund Withdrawal
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Companies, partnership and Huf account
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              eMandates
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Adding Bank Accounts
            </a>
          </div>
        </div>

        {/* 5th heading */}
        <div className="col-4 p-4 mt-2 mb-2 text-center">
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "#424242",
              marginBottom: "12px",
            }}
          >
            <i className="fa-brands fa-xbox me-3"></i>
            Console
          </h4>

          <div style={{ fontSize: "15px", fontWeight: "400" }}>
            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Reports
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Ledger
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Portfolio
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Opening
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Challenges
            </a>
          </div>
        </div>

        {/* 6th heading */}
        <div className="col-4 p-4 mt-2 mb-2 text-center">
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "#424242",
              marginBottom: "12px",
            }}
          >
            <i className="fa-solid fa-coins me-3"></i>
            Coin
          </h4>

          <div style={{ fontSize: "15px", fontWeight: "400" }}>
            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Understanding mutual
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              About Coin
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Starting an sip
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              All sells
            </a>
            <br />

            <a href="" style={{ textDecoration: "none", lineHeight: "2.3" }}>
              Getting started
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreateTicket;