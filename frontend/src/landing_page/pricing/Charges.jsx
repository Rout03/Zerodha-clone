import React from "react";

const Charges = () => {
  return (
    <section className="container py-5">
      {/* Center Column */}
      <div
        style={{
          width: "85%",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <h1
          className="fw-semibold mb-4"
          style={{
            fontSize: "32px",
            lineHeight: "1.3",
            color: "#333",
            letterSpacing: "-0.4px",
            display: "inline-block",
            borderBottom: "2px solid #333",
            paddingBottom: "6px",
          }}
        >
          Charges for account opening
        </h1>

        {/* Table */}
        <div
          className="table-responsive"
          style={{
            border: "1px solid #ddd",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          <table
            className="table mb-0"
            style={{
              width: "100%",
            }}
          >
            {/* Header */}
            <thead>
              <tr
                style={{
                  backgroundColor: "#f8f8f8",
                }}
              >
                <th
                  style={{
                    padding: "17px 22px",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#424242",
                    width: "65%",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  Type of account
                </th>

                <th
                  style={{
                    padding: "17px 22px",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#424242",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  Charges
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Individual */}
              <tr>
                <td
                  style={{
                    padding: "17px 22px",
                    fontSize: "16px",
                    color: "#424242",
                    verticalAlign: "middle",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  Individual account
                </td>

                <td
                  style={{
                    padding: "17px 22px",
                    fontSize: "16px",
                    verticalAlign: "middle",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#4caf50",
                      fontSize: "13px",
                      fontWeight: "400",
                      padding: "6px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    FREE
                  </span>
                </td>
              </tr>

              {/* Minor */}
              <tr>
                <td
                  style={{
                    padding: "17px 22px",
                    fontSize: "16px",
                    color: "#424242",
                    verticalAlign: "middle",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  Minor account
                </td>

                <td
                  style={{
                    padding: "17px 22px",
                    fontSize: "16px",
                    verticalAlign: "middle",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#4caf50",
                      fontSize: "13px",
                      fontWeight: "400",
                      padding: "6px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    FREE
                  </span>
                </td>
              </tr>

              {/* NRI */}
              <tr>
                <td
                  style={{
                    padding: "17px 22px",
                    fontSize: "16px",
                    color: "#424242",
                    verticalAlign: "middle",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  NRI account
                </td>

                <td
                  style={{
                    padding: "17px 22px",
                    fontSize: "16px",
                    color: "#424242",
                    verticalAlign: "middle",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  ₹ 500
                </td>
              </tr>

              {/* HUF */}
              <tr>
                <td
                  style={{
                    padding: "17px 22px",
                    fontSize: "16px",
                    color: "#424242",
                    verticalAlign: "middle",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  HUF account
                </td>

                <td
                  style={{
                    padding: "17px 22px",
                    fontSize: "16px",
                    color: "#424242",
                    verticalAlign: "middle",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#4caf50",
                      fontSize: "13px",
                      fontWeight: "400",
                      padding: "6px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    FREE
                  </span>

                  <span
                    style={{
                      marginLeft: "10px",
                      fontSize: "16px",
                    }}
                  >
                    (online) / ₹ 500 (offline)
                  </span>
                </td>
              </tr>

              {/* Partnership */}
              <tr>
                <td
                  style={{
                    padding: "17px 22px",
                    fontSize: "16px",
                    color: "#424242",
                    verticalAlign: "middle",
                  }}
                >
                  Partnership, LLP, and Corporate accounts (offline only)
                </td>

                <td
                  style={{
                    padding: "17px 22px",
                    fontSize: "16px",
                    color: "#424242",
                    verticalAlign: "middle",
                  }}
                >
                  ₹ 500
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Charges;
