import React, { useState } from "react";

const members = [
  {
    name: "Nikhil Kamath",
    role: "Co-founder & CFO",
    image: "/media/Nikhil.jpg",
    bio: "Nikhil Kamath is the co-founder of Zerodha. He has played an important role in building Zerodha and transforming the way people invest and trade in India.",
  },
  {
    name: "Dr. Kailash Nadh",
    role: "CTO",
    image: "/media/Kailash.jpg",
    bio: "Kailash Nadh is the Chief Technology Officer at Zerodha. He leads the technology team and focuses on building simple, reliable and scalable technology.",
  },
  {
    name: "Venu Madhav",
    role: "COO",
    image: "/media/Venu.jpg",
    bio: "Venu Madhav is the Chief Operating Officer at Zerodha. He oversees operations and helps ensure a smooth experience for Zerodha customers.",
  },
  {
    name: "Austin Joe",
    role: "Chief Technology Officer",
    image: "/media/Austin.jpg",
    bio: "He works closely with the technology team to build reliable and user-friendly products for customers.",
  },
  {
    name: "Seema Sahu",
    role: "Chief Product Officer",
    image: "/media/Seema.jpg",
    bio: "She focuses on product development and creating simple experiences for traders and investors.",
  },
  {
    name: "Karthik Samal",
    role: "Chief Operating Officer",
    image: "/media/karthik.jpg",
    bio: "He manages key business operations and works towards improving the overall customer experience.",
  },
];

const Members = () => {
  const [activeBio, setActiveBio] = useState(null);

  return (
    <section className="container py-5" style={{ marginTop: "80px" }}>
      <div className="row text-center">
        {members.map((member, index) => (
          <div
            className="col-lg-4 col-md-6 mb-5"
            key={index}
            style={{ marginBottom: "60px" }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-circle mb-4"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <h4
              className="mb-3"
              style={{
                fontSize: "24px",
                fontWeight: "400",
                color: "#424242",
              }}
            >
              {member.name}
            </h4>

            <p
              className="mb-3"
              style={{
                fontSize: "18px",
                color: "#666",
              }}
            >
              {member.role}
            </p>

            <button
              className="btn btn-link text-decoration-none"
              onClick={() => setActiveBio(activeBio === index ? null : index)}
              style={{
                color: "#081001",
                fontSize: "17px",
              }}
            >
              Bio <span style={{ fontSize: "14px" }}>⌄</span>
            </button>

            {activeBio === index && (
              <p
                className="text-muted lh-lg mt-3 px-3"
                style={{
                  fontSize: "18px",
                  textAlign: "left",
                }}
              >
                {member.bio}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;