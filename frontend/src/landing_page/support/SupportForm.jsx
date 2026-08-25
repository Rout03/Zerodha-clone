import React, { useState } from "react";

const SupportForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917735613751";

    const whatsappMessage = `
Hello, I need support.

Name: ${formData.name}
Email: ${formData.email}

Question:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Animation CSS */}
      <style>
        {`
          .support-section {
            animation: fadeUp 0.7s ease;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .support-card {
            border: 1px solid #eeeeee !important;
            transition: all 0.35s ease;
          }

          .support-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.10) !important;
          }

          .support-input {
            border: 1px solid #d9d9d9;
            transition: all 0.3s ease;
          }

          .support-input:focus {
            border-color: #387ed1;
            box-shadow: 0 0 0 3px rgba(56, 126, 209, 0.12);
            transform: translateY(-1px);
          }

          .support-button {
            transition: all 0.3s ease;
          }

          .support-button:hover {
            background-color: #2f6fba !important;
            transform: translateY(-2px);
            box-shadow: 0 7px 18px rgba(56, 126, 209, 0.25);
          }

          .support-button:active {
            transform: translateY(0);
          }

          .support-icon {
            width: 55px;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 15px;
            border-radius: 50%;
            background: rgba(56, 126, 209, 0.10);
            color: #387ed1;
            font-size: 23px;
          }

          .question-box {
            resize: vertical;
            min-height: 130px;
          }
        `}
      </style>

      <section
        className="container support-section"
        style={{
          paddingTop: "70px",
          paddingBottom: "60px",
          marginBottom: "20px",
        }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9">
            {/* Heading */}
            <div
              className="text-center"
              style={{
                marginBottom: "35px",
              }}
            >
              <div className="support-icon">
                <i className="fa-solid fa-headset"></i>
              </div>

              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "600",
                  color: "#111111",
                  letterSpacing: "-0.5px",
                  lineHeight: "1.3",
                  marginBottom: "8px",
                }}
              >
                Contact Support
              </h2>

              {/* Small black line */}
              <div
                style={{
                  width: "45px",
                  height: "3px",
                  backgroundColor: "#111111",
                  borderRadius: "10px",
                  margin: "0 auto 12px",
                }}
              ></div>

              <p
                style={{
                  color: "#777",
                  fontSize: "15px",
                  marginBottom: "0",
                }}
              >
                Have a question? Send us your query and we'll help you.
              </p>
            </div>

            {/* Form Card */}
            <div
              className="card support-card border-0 shadow-sm"
              style={{
                borderRadius: "14px",
                backgroundColor: "#fff",
                marginBottom: "25px",
              }}
            >
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="mb-4">
                    <label
                      className="form-label"
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#333",
                      }}
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      className="form-control support-input"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        height: "48px",
                        borderRadius: "7px",
                        fontSize: "14px",
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label
                      className="form-label"
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#333",
                      }}
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      className="form-control support-input"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        height: "48px",
                        borderRadius: "7px",
                        fontSize: "14px",
                      }}
                    />
                  </div>

                  {/* Question */}
                  <div className="mb-4">
                    <label
                      className="form-label"
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#333",
                      }}
                    >
                      Your Question
                    </label>

                    <textarea
                      name="message"
                      className="form-control support-input question-box"
                      rows="5"
                      placeholder="Write your question here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{
                        borderRadius: "7px",
                        fontSize: "14px",
                        padding: "12px 14px",
                      }}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn support-button"
                      style={{
                        background: "linear-gradient(135deg, #387ed1, #2f6fba)",
                        color: "#fff",
                        fontSize: "14px",
                        fontWeight: "500",
                        borderRadius: "7px",
                        border: "none",
                        height: "44px",
                        padding: "0 25px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 12px rgba(56, 126, 209, 0.20)",
                      }}
                    >
                      <i className="fa-brands fa-whatsapp me-2"></i>
                      Send Query on WhatsApp
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Bottom Text */}
            <p
              className="text-center"
              style={{
                fontSize: "13px",
                color: "#888",
                marginBottom: "0",
              }}
            >
              We'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportForm;
