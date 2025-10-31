import React, { useMemo } from "react";
import { certificates } from "../data/certificates";
import useScrollAnimation from "./useScrollAnimation";

// ✅ Certificate Card Component
const CertificateCard = React.memo(({ cert }) => (
  <div className="certificate-card">
    <div className="cert-icon">📜</div>
    <h4 className="cert-title">{cert.title}</h4>
    <p className="cert-issuer">{cert.issuer}</p>
    <p className="cert-date">{cert.date}</p>
    {cert.id && (
      <p className="cert-id">
        <small>ID: {cert.id}</small>
      </p>
    )}
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="cert-link"
    >
      View Certificate →
    </a>
  </div>
));

CertificateCard.displayName = "CertificateCard";

function About() {
  const certificatesList = useMemo(() => certificates, []);
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <h2 className="section-title">About Me</h2>
        {/* Bio Section */}
        <div className="about-bio">
          <p className="bio-text">
            Passionate Frontend Developer specializing in building exceptional
            digital experiences with React and TypeScript. I create responsive,
            user-friendly web applications that combine clean code with
            intuitive design.
          </p>
        </div>
        {/* Education Section */}
        <div
          ref={ref}
          className={`education-section  ${isVisible ? "visible" : ""}`}
        >
          <h3 className="subsection-title">Education</h3>
          <div className="education-card">
            <div className="education-header">
              <h4 className="degree-title">Bachelor of Veterinary Medicine</h4>
              <span className="education-year">2024</span>
            </div>
            <p className="institution">Beni-Suef University</p>
            <p className="education-description">
              Developed exceptional analytical and problem-solving skills
              through rigorous scientific training. This unique background
              enables me to approach frontend development with systematic
              thinking, attention to detail, and a commitment to continuous
              learning.
            </p>
          </div>
        </div>
        {/* Certificates Section */}
        <div
          ref={ref}
          className={`certificates-section   ${isVisible ? "visible" : ""}`}
        >
          <h3 className="subsection-title">Certifications</h3>
          <div className="certificates-grid">
            {certificatesList.map((cert, index) => (
              <CertificateCard key={cert.id || index} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(About);
