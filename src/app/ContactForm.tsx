// pages/contact.tsx
"use client";

import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      firstName: formData.get("firstName")?.toString() || "",
      lastName: formData.get("lastName")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      service: formData.get("service")?.toString() || "",
      date: formData.get("date")?.toString() || "",
    };

    try {
      const response = await fetch("/api/saveToSheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true); // Show the success message and animation

        // Optional: Delay clearing the form and resetting the submission state
        setTimeout(() => {
          if (e.currentTarget) {
            e.currentTarget.reset(); // Clear the form 
          } else {
            console.warn("Form element not found. Unable to reset.");
          }
          setIsSubmitted(false); // Hide the success message and animation
        }, 3000); // Adjust the delay as needed (3 seconds in this example)

      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  const styles = {
    container: {
      backgroundColor: "#FFF5EE",
      padding: "30px",
      borderRadius: "12px",
      fontFamily: "Poppins, sans-serif",
      color: "#333",
      maxWidth: "800px",
      margin: "0 auto",
    },
    title: {
      textAlign: "center" as const,
      marginBottom: "20px",
    },
    heading: {
      color: "#FF0000",
      fontWeight: "bold" as const,
      marginBottom: "10px",
    },
    subheading: {
      color: "#FFB400",
      fontSize: "18px",
      fontWeight: "500" as const,
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      marginBottom: "20px",
    },
    label: {
      fontWeight: "bold" as const,
      color: "#FF6A00",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginTop: "5px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "14px",
    },
    buttonContainer: {
      textAlign: "center" as const,
    },
    button: {
      backgroundColor: "#FF0000",
      color: "#FFFFFF",
      fontSize: "16px",
      fontWeight: "bold" as const,
      padding: "10px 30px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
    },
    successMessage: {
      textAlign: "center" as const,
      fontSize: "18px",
      color: "#008000", // Green color
      fontWeight: "bold" as const,
      marginTop: "20px",
    },
    animation: {
      width: "50px",
      height: "50px",
      margin: "20px auto",
      border: "4px solid #FF0000", // Red color
      borderRadius: "50%",
      animation: "spin 2s linear infinite", // Animation name and duration
    },
    // You'll need to add this to your global CSS or a <style> tag
    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <h2 style={styles.heading}>GET IN TOUCH</h2>
        <p style={styles.subheading}>
          HAVE QUESTIONS ABOUT YOUR JOURNEY? <br /> WE’RE HERE TO GUIDE YOU.
        </p>
      </div>

      {isSubmitted ? ( 
        <div style={styles.successMessage}>
          <p>Thank you for submitting! We will get back to you soon.</p>
          <div style={styles.animation}></div> 
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={styles.formGrid}>
            <div>
              <label style={styles.label}>FIRST NAME*</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter Your First Name"
                style={styles.input}
                required
              />
            </div>
            <div>
              <label style={styles.label}>LAST NAME*</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Your Last Name"
                style={styles.input}
                required
              />
            </div>
            <div>
              <label style={styles.label}>YOUR PHONE*</label>
              <input
                type="tel"
                name="phone"
                placeholder="+44 3737 838xxx"
                style={styles.input}
                required
              />
            </div>
            <div>
              <label style={styles.label}>YOUR EMAIL*</label>
              <input
                type="email"
                name="email"
                placeholder="youremail@domain.com"
                style={styles.input}
                required
              />
            </div>
            <div>
              <label style={styles.label}>SERVICES*</label>
              <select name="service" style={styles.input} required>
                <option value="">Choose services</option>
                <option value="Homa">Homa</option>
                <option value="Pooja">Pooja</option>
                <option value="Abhishekam">Abhishekam</option>
              </select>
            </div>
            <div>
              <label style={styles.label}>DATE*</label>
              <input type="date" name="date" style={styles.input} required />
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>
              Book Now
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;