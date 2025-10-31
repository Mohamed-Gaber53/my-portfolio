import React, { useMemo } from "react";
import useScrollAnimation from "./useScrollAnimation";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaSass,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMui,
  SiTailwindcss,
  SiPostman,
  SiAxios,
  SiReactrouter,
} from "react-icons/si";
import { TbWorldCode } from "react-icons/tb";

const SKILLS_DATA = [
  { id: 1, name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { id: 2, name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { id: 3, name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { id: 4, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { id: 5, name: "Sass", icon: FaSass, color: "#CC6699" },
  { id: 6, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 7, name: "React Router", icon: SiReactrouter, color: "#CA4245" },
  { id: 8, name: "Zustand", icon: FaReact, color: "#FF9800" },
  { id: 9, name: "Material UI", icon: SiMui, color: "#007FFF" },
  { id: 10, name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { id: 11, name: "Git", icon: FaGitAlt, color: "#F05032" },
  { id: 12, name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { id: 13, name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { id: 14, name: "Axios", icon: SiAxios, color: "#5A29E4" },
  { id: 15, name: "i18n", icon: TbWorldCode, color: "#26A69A" },
];

// ✅ Skill Card Component
const SkillCard = React.memo(({ name, Icon, color }) => (
  <div className="skill-card">
    <div className="skill-icon" style={{ color }}>
      <Icon />
    </div>
    <span className="skill-name">{name}</span>
  </div>
));

SkillCard.displayName = "SkillCard";

function Skills() {
  const skills = useMemo(() => SKILLS_DATA, []);
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="skills"
      ref={ref}
      className={`skills  ${isVisible ? "visible" : ""}`}
    >
      <div className="container skills-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="skills-subtitle">
          Technologies I use to build amazing digital experiences
        </p>

        <div className="skills-grid">
          {skills.map(({ id, name, icon, color }) => (
            <SkillCard key={id} name={name} Icon={icon} color={color} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Skills);
