import React from "react";

const DematAMC = () => {
  return (
    <section className="container py-5">
      {/* ================= DEMAT AMC ================= */}

      <h2
  className="fw-semibold mb-4"
  style={{
    fontSize: "30px",
    lineHeight: "1.3",
    color: "#333",
    letterSpacing: "-0.4px",
    display: "inline-block",
    borderBottom: "2px solid #333",
    paddingBottom: "6px",
  }}
>
  Demat AMC (Annual Maintenance Charge)

</h2>
    
      

      {/* Description */}
      <p
        className="mb-4"
        style={{
          fontSize: "15px",
          color: "#424242",
        }}
      >
        From second year onwards, for BSDA accounts:
      </p>

      {/* ================= AMC TABLE ================= */}

      <div className="table-responsive mb-4">
        <table
          className="table mb-0"
          style={{
            border: "1px solid #ddd",
            fontSize: "15px",
            color: "#424242",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "17px 20px",
                  fontWeight: "500",
                  width: "32%",
                  borderBottom: "1px solid #ddd",
                }}
              >
                Value of holdings
              </th>

              <th
                style={{
                  padding: "17px 20px",
                  fontWeight: "500",
                  borderBottom: "1px solid #ddd",
                }}
              >
                AMC
              </th>
            </tr>
          </thead>

          <tbody>
            {/* Row 1 */}
            <tr>
              <td style={{ padding: "17px 20px" }}>Up to ₹4 lakh</td>

              <td style={{ padding: "17px 20px" }}>
                <span
                  className="badge"
                  style={{
                    backgroundColor: "#4caf50",
                    fontSize: "12px",
                    padding: "5px 10px",
                    fontWeight: "400",
                    borderRadius: "3px",
                  }}
                >
                  FREE
                </span>
              </td>
            </tr>

            {/* Row 2 */}
            <tr style={{ backgroundColor: "#fafafa" }}>
              <td style={{ padding: "17px 20px" }}>₹4 lakh – ₹10 lakh</td>

              <td style={{ padding: "17px 20px" }}>
                ₹100 per year + 18% GST, charged quarterly
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td style={{ padding: "17px 20px" }}>Above ₹10 lakh</td>

              <td style={{ padding: "17px 20px" }}>
                ₹300 per year + 18% GST, charged quarterly
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Non-BSDA Information */}
      <p
        className="mb-3"
        style={{
          fontSize: "15px",
          color: "#424242",
          lineHeight: "1.7",
        }}
      >
        For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of
        holdings value, charged quarterly.
      </p>

      {/* Links */}
      <p
        className="mb-4"
        style={{
          fontSize: "15px",
          lineHeight: "1.7",
          color: "#424242",
        }}
      >
        To learn more about BSDA,{" "}
        <a
          href="#"
          style={{
            color: "#387ed1",
            textDecoration: "none",
          }}
        >
          click here
        </a>
        . To learn more about AMC,{" "}
        <a
          href="#"
          style={{
            color: "#387ed1",
            textDecoration: "none",
          }}
        >
          click here
        </a>
        .
      </p>

      {/* Footnote */}
      <p
        style={{
          fontSize: "13px",
          color: "#555",
        }}
      >
        *Resident individual accounts only.
      </p>

      {/* ================================================= */}
      {/* OPTIONAL VALUE ADDED SERVICES                     */}
      {/* ================================================= */}

      <div
        style={{
          marginTop: "80px",
        }}
      >
        <h2
          className="fw-semibold mb-4"
          style={{
            fontSize: "30px",
            lineHeight: "1.3",
            color: "#424242",
            letterSpacing: "-0.3px",
            display: "inline-block",
            borderBottom: "3px solid #387ed1",
            paddingBottom: "8px",
          }}
        >
          Charges for optional value added services
        </h2>

        {/* Services Table */}
        <div className="table-responsive">
          <table
            className="table mb-0"
            style={{
              border: "1px solid #ddd",
              fontSize: "15px",
              color: "#424242",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    padding: "17px 20px",
                    fontWeight: "500",
                    width: "20%",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  Service
                </th>

                <th
                  style={{
                    padding: "17px 20px",
                    fontWeight: "500",
                    width: "38%",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  Billing Frequency
                </th>

                <th
                  style={{
                    padding: "17px 20px",
                    fontWeight: "500",
                    width: "42%",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  Charges
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Row 1 */}
              <tr>
                <td style={{ padding: "17px 20px" }}>Tickertape</td>

                <td style={{ padding: "17px 20px" }}>
                  Monthly / Quarterly / Annual
                </td>

                <td style={{ padding: "17px 20px" }}>
                  Free: 0 | Pro: 249/699/2399
                </td>
              </tr>

              {/* Row 2 */}
              <tr style={{ backgroundColor: "#fafafa" }}>
                <td style={{ padding: "17px 20px" }}>Smallcase</td>

                <td style={{ padding: "17px 20px" }}>Per transaction</td>

                <td style={{ padding: "17px 20px" }}>
                  Buy &amp; Invest More: 100 | SIP: 10
                </td>
              </tr>

              {/* Row 3 */}
              <tr>
                <td style={{ padding: "17px 20px" }}>Kite Connect</td>

                <td style={{ padding: "17px 20px" }}>Monthly</td>

                <td style={{ padding: "17px 20px" }}>
                  Connect: 500 | Personal: Free
                </td>
              </tr>

              {/* Row 4 - Added */}
              <tr style={{ backgroundColor: "#fafafa" }}>
                <td style={{ padding: "17px 20px" }}>Console</td>

                <td style={{ padding: "17px 20px" }}>Monthly</td>

                <td style={{ padding: "17px 20px" }}>Free</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DematAMC;
