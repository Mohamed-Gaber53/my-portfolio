import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    id: "github",
    href: "https://github.com/Mohamed-Gaber53",
    icon: FaGithub,
    color: "#ffffff",
    label: "GitHub Profile",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/mohamed-gaber-dev/",
    icon: FaLinkedin,
    color: "#0A66C2",
    label: "LinkedIn Profile",
  },
];

// ✅ Social Icon Component
const SocialIcon = React.memo(({ href, Icon, color, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
    aria-label={label}
  >
    <Icon className="icon" style={{ color }} />
  </a>
));

SocialIcon.displayName = "SocialIcon";

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-content">
          <p>© 2025 Mohamed G. Abdelghany. All Rights reserved.</p>
        </div>
        <div className="social-links">
          {SOCIAL_LINKS.map(({ id, href, icon, color, label }) => (
            <SocialIcon
              key={id}
              href={href}
              Icon={icon}
              color={color}
              label={label}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
