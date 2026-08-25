import React from "react";

const Maps = () => {
  return (
    <section
      className="container"
      style={{
        paddingTop: "50px",
        paddingBottom: "70px",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-4">
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
          Find Us
        </h2>

        <p
          style={{
            fontSize: "15px",
            color: "#777",
            marginBottom: "0",
          }}
        >
          Visit our location or get directions from Google Maps.
        </p>
      </div>

      {/* Map */}
      <div
        className="shadow-sm"
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid #e5e5e5",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6717.899166367044!2d86.7387901402167!3d21.517109852187428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1c5cb5096234d7%3A0x6af3603b919dfcad!2sBadbil%2C%20Odisha%20756041!5e1!3m2!1sen!2sin!4v1786615917412!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{
            border: "0",
            display: "block",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Google Maps Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Maps;
