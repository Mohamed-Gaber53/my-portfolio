import React, { useMemo } from "react";
import useScrollAnimation from "./useScrollAnimation";

const IDEAS_DATA = [
  {
    id: 1,
    title: "Single Page Applications",
    content:
      "I build engaging and high-performing single-page web applications using React.js delivering smooth navigation, instant updates, and dynamic user experiences without full page reloads.",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    content:
      "I design clean, modern, and fully responsive interfaces that adapt perfectly to any screen size desktop, tablet, or mobile. I use tools like Tailwind CSS and Bootstrap to ensure accessibility, speed, and visual consistency.",
  },
  {
    id: 3,
    title: "Performance Optimization",
    content:
      "I enhance website speed and efficiency through smart techniques like lazy loading, code splitting, and caching ensuring every user enjoys a fast, seamless experience.",
  },
];

// ✅ Idea Card Component
const IdeaCard = React.memo(({ title, content }) => (
  <div className="idea-card">
    <h4 className="idea-card-title">- {title}.</h4>
    <p className="idea-card-content">{content}</p>
  </div>
));

IdeaCard.displayName = "IdeaCard";

function WhatIDo() {
  const [ref, isVisible] = useScrollAnimation();
  const ideas = useMemo(() => IDEAS_DATA, []);

  return (
    <section
      id="services"
      ref={ref}
      className={`what-i-do-section  ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <div className="what-i-do-header">
          <h2 className="what-i-do-title">
            I'm passionate about helping <br /> your brand grow and move
            confidently toward success.
          </h2>
          <p className="what-i-do-subtitle">
            Fresh & Creative Ideas To Elevate Your Business.
          </p>
        </div>

        <div className="what-i-do-heading">
          <h3 className="heading-text">WHAT I DO</h3>
        </div>

        <div className="ideas-flex">
          {ideas.map(({ id, title, content }) => (
            <IdeaCard key={id} title={title} content={content} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(WhatIDo);
