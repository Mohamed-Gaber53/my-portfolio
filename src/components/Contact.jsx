import React, { useState, useCallback } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import useScrollAnimation from "./useScrollAnimation";

const EMAILJS_CONFIG = {
  serviceId: "service_2jo8q8p",
  templateId: "template_c2n9tdf",
  publicKey: import.meta.env.VITE_API_KEY,
  toName: "Mohamed Gaber",
};

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setIsLoading(true);

      try {
        const result = await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: EMAILJS_CONFIG.toName,
          },
          EMAILJS_CONFIG.publicKey
        );

        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "my-custom-button",
          },
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        alert("❌ Error:", error);

        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Please try again.",
          icon: "error",
        });
      } finally {
        setIsLoading(false);
      }
    },
    [formData]
  );

  return (
    <section
      id="contact"
      className={`contact-section ${isVisible ? "visible" : ""}`}
      ref={ref}
    >
      <div className="container contact-container">
        <div className="contact-title">
          <p className="title">
            Contact Me <span>→</span>
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="input-box">
            <label htmlFor="name">Name :</label>
            <input
              id="name"
              type="text"
              className="field"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email :</label>
            <input
              id="email"
              type="email"
              className="field"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              disabled={isLoading}
            />
          </div>
          <div className="input-box">
            <label htmlFor="message">Your Message :</label>
            <textarea
              className="field mess"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              disabled={isLoading}
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default React.memo(Contact);
