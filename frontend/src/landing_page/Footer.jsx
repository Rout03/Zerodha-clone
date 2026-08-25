import React from "react";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5 py-5">
      <div className="container">
        <div className="row gx-5 gy-5 justify-content-between">
          {/* Left Section */}
          <div className="col-lg-3 col-md-6">
            <img
              src="https://zerodha.com/static/images/logo.svg"
              alt="Zerodha"
              className="img-fluid mb-4"
              style={{ width: "150px" }}
            />

            <p className="text-muted mb-1" style={{ fontSize: "14px" }}>
              © 2010 - 2026, Zerodha Broking Ltd.
            </p>

            <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
              All rights reserved.
            </p>

            <div className="d-flex gap-4 fs-5 text-secondary mb-4">
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>

            <hr className="w-75 my-4" />

            <div className="d-flex gap-4 fs-5 text-secondary mb-4">
              <i className="bi bi-youtube"></i>
              <i className="bi bi-whatsapp"></i>
              <i className="bi bi-telegram"></i>
            </div>

            <div className="d-flex gap-3 align-items-center flex-wrap">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ width: "125px" }}
              />

              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="img-fluid"
                style={{ width: "115px" }}
              />
            </div>
          </div>

          {/* Account */}

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-semibold fs-5 mb-4">Account</h5>

            <ul className="list-unstyled">
              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Open demat account
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Minor demat account
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                NRI demat account
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                HUF demat account
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Commodity
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Dematerialisation
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Fund Transfer
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                MTF
              </li>
            </ul>
          </div>

          {/* Support */}

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-semibold fs-5 mb-4">Support</h5>

            <ul className="list-unstyled">
              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Contact Us
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Support Portal
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                How to file a complaint?
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Status of Complaints
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Bulletin
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Circulars
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Downloads
              </li>
            </ul>
          </div>

          {/* Company */}

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-semibold fs-5 mb-4">Company</h5>

            <ul className="list-unstyled">
              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                About
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Philosophy
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Press & Media
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Careers
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Zerodha Cares (CSR)
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Zerodha.tech
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Open Source
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Referral Program
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 ps-lg-5">
            <h5 className="fw-semibold fs-5 mb-4">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Upcoming IPOs
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Brokerage Charges
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Market Holidays
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Economic Calendar
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Calculators
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Markets
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Sectors
              </li>

              <li className="mb-3 text-muted" style={{ fontSize: "15px" }}>
                Gift Nifty
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-5" />

        <div className="row">
          <div className="col-12">
            <div
              className="text-muted"
              style={{
                fontSize: "13px",
                lineHeight: "1.8",
                textAlign: "justify",
                width: "100%",
              }}
            >
              <p className="mb-3">
                Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
                Registration no.: INZ000031633 CDSL/NSDL: Depository services
                through Zerodha Broking Ltd. – SEBI Registration no.:
                IN-DP-431-2019 Registered Address: Zerodha Broking Ltd.,
                #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
                School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
                India. For any complaints pertaining to securities broking
                please write to complaints@zerodha.com, for DP related to
                dp@zerodha.com. Please ensure you carefully read the Risk
                Disclosure Document as prescribed by SEBI | ICF
              </p>

              <p className="mb-3">
                Registered Office: #153/154, 4th Cross, Dollars Colony, Opp.
                Clarence Public School, J.P. Nagar 4th Phase, Bengaluru –
                560078, Karnataka, India.
              </p>

              <p className="mb-3">
                For complaints pertaining to securities broking please write to
                <a href="#" className="text-decoration-none ms-1">
                  complaints@zerodha.com
                </a>{" "}
                and for DP related queries write to
                <a href="#" className="text-decoration-none ms-1">
                  dp@zerodha.com
                </a>
                .
              </p>

              <p className="mb-3">
                Attention investors: (1) Stock brokers can accept securities as
                margins from clients only by way of pledge in the depository
                system w.e.f September 01, 2020. (2) Update your e-mail and
                phone number with your stock broker / depository participant and
                receive OTP directly from depository on your e-mail and/or
                mobile number to create pledge. (3) Check your securities / MF /
                bonds in the consolidated account statement issued by NSDL/CDSL
                every month.
              </p>

              <h6 className="fw-semibold mt-4 mb-2">Attention Investors</h6>

              <ol className="ps-3 mb-3">
                <li className="mb-2">
                  Stock brokers can accept securities as margins only through
                  pledge in the depository system.
                </li>

                <li className="mb-2">
                  Update your email ID and mobile number with your stock
                  broker/depository participant.
                </li>

                <li className="mb-2">
                  Check your securities, mutual funds and bonds through the
                  consolidated account statement.
                </li>
              </ol>

              <p className="mb-3">
                "Prevent unauthorised transactions in your account. Update your
                mobile numbers/email IDs with your stock brokers/depository
                participants. Receive information of your transactions directly
                from Exchange/Depositories on your mobile/email at the end of
                the day. Issued in the interest of investors. KYC is one time
                exercise while dealing in securities markets - once KYC is done
                through a SEBI registered intermediary (broker, DP, Mutual Fund
                etc.), you need not undergo the same process again when you
                approach another intermediary." Dear Investor, if you are
                subscribing to an IPO, there is no need to issue a cheque.
                Please write the Bank account number and sign the IPO
                application form to authorize your bank to make payment in case
                of allotment. In case of non allotment the funds will remain in
                your bank account. As a business we don't give stock tips, and
                have not authorized anyone to trade on behalf of others. If you
                find anyone claiming to be part of Zerodha and offering such
                services
              </p>

              <p className="mb-3">
                <strong>Insurance Advisory Disclaimer:</strong> *Customers
                availing insurance advisory services offered by Ditto (Tacterial
                Consulting Private Limited | IRDAI Registered Corporate Agent
                (Composite) License No CA0738) will not have access to the
                exchange investor grievance redressal forum, SEBI SCORES/ODR, or
                arbitration mechanism for such products.
              </p>

              <p className="mb-3">
                <strong>Fixed Deposit Disclaimer:</strong> Fixed deposit
                products offered on this platform are third-party products (TPP)
                and are not Exchange traded products. These are offered through
                Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI
                Registration No.: INZ000031633) is acting solely as a
                distributor for these products. Any disputes arising with
                respect to such distribution activity will not have access to
                SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or
                Arbitration mechanism. Fixed deposits are regulated by the
                Reserve Bank of India (RBI).
              </p>
            </div>
          </div>
        </div>
        <hr className="my-4" />

        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <a href="#" className="text-decoration-none text-secondary small">
            NSE
          </a>
          <a href="#" className="text-decoration-none text-secondary small">
            BSE
          </a>
          <a href="#" className="text-decoration-none text-secondary small">
            MCX
          </a>
          <a href="#" className="text-decoration-none text-secondary small">
            MSEI
          </a>
          <a href="#" className="text-decoration-none text-secondary small">
            Terms & Conditions
          </a>
          <a href="#" className="text-decoration-none text-secondary small">
            Policies & Procedures
          </a>
          <a href="#" className="text-decoration-none text-secondary small">
            Privacy Policy
          </a>
          <a href="#" className="text-decoration-none text-secondary small">
            Disclosure
          </a>
          <a href="#" className="text-decoration-none text-secondary small">
            Investor Charter
          </a>
          <a href="#" className="text-decoration-none text-secondary small">
            Sitemap
          </a>
        </div>
      </div>{" "}
      {/* container */}
    </footer>
  );
}

export default Footer;
