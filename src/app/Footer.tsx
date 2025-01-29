import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #FF9900, #FF5E00)",
        color: "white",
        padding: "40px 20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Footer Content */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {/* Logo and About Section */}
          <div style={{ flex: "1", minWidth: "250px" }}>
            <Image
              src="/images/Logo.png"
              alt="Sunshine Astro Logo"
              width={300}
              height={100}
              style={{ marginBottom: "15px" }}
            />
            <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
              Astro Services offers professional astrology consultations,
              helping people understand their destinies and make informed life
              choices.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ flex: "1", minWidth: "150px" }}>
            <h4 style={{ marginBottom: "15px", fontWeight: "bold" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
              {["Home", "Consult", "Horoscope", "Astrology", "Services", "About Us"].map((item) => (
                <li key={item}>
                  <a href="#" style={{ textDecoration: "none", color: "white" }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div style={{ flex: "1", minWidth: "150px" }}>
            <h4 style={{ marginBottom: "15px", fontWeight: "bold" }}>
              Customer Support
            </h4>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
              {["Help Center", "Contact Us", "FAQs"].map((item) => (
                <li key={item}>
                  <a href="#" style={{ textDecoration: "none", color: "white" }}>
                    {item}
                  </a>
                </li>
              ))}
              <li>We are now available 24x7</li>
            </ul>
          </div>

          {/* Social Media and Contact */}
          <div style={{ flex: "1", minWidth: "150px" }}>
            <h4 style={{ marginBottom: "15px", fontWeight: "bold" }}>
              Stay Connected
            </h4>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61570851951757"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sunshinecosma/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCN7AV_ZzGuushLRJBfzeycA"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  YouTube
                </a>
              </li>
              <li>Phone: +1 (234) 567-890</li>
              <li>Email: support@astroservices.com</li>
            </ul>
          </div>

          {/* Secure Section */}
          <div style={{ flex: "1", minWidth: "150px" }}>
            <h4 style={{ marginBottom: "15px", fontWeight: "bold" }}>Secure</h4>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
              <li>Verified Expert Astrologers</li>
              <li>100% Secure Payments</li>
            </ul>
          </div>
        </div>

        {/* App Store and Newsletter */}
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <h4 style={{ fontWeight: "bold", marginBottom: "10px" }}>
            Coming Soon on
          </h4>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <Image
              src="/images/google-play-badge.png"
              alt="Google Play Store"
              width={135}
              height={50}
            />
            <Image
              src="/images/app-store-badge.png"
              alt="Apple App Store"
              width={135}
              height={50}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <h4 style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Subscribe to Our Newsletter
            </h4>
            <p>
              Get updates on new services, special offers, and astrological
              insights delivered to your inbox.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  padding: "10px",
                  borderRadius: "4px",
                  border: "none",
                  width: "300px",
                  fontSize: "14px",
                }}
              />
              <button
                style={{
                  padding: "10px 20px",
                  background: "#FFB400",
                  borderRadius: "4px",
                  border: "none",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            paddingTop: "10px",
          }}
        >
          <p style={{ fontSize: "12px", lineHeight: "1.5" }}>
            &copy; 2024 Sunshine Astro. All Rights Reserved.
            <br />
            Your trusted partner for astrological guidance and spiritual
            insights.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
