import React, { useCallback } from "react";

// ✅ Constants component
const NAVIGATION_LINKS = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "About Me", link: "#about" },
  { id: 3, name: "Skills", link: "#skills" },
  { id: 4, name: "Services", link: "#services" },
  { id: 5, name: "Projects", link: "#projects" },
  { id: 6, name: "Contact", link: "#contact" },
];

// ✅ Nav Item Component
const NavItem = React.memo(({ name, link, onClick }) => (
  <li className="navbar-item">
    <a onClick={onClick} className="navbar-link" href={link}>
      {name}
    </a>
  </li>
));

NavItem.displayName = "NavItem";

function Navbar({ openIcon, closeMenu }) {
  const handleClick = useCallback(() => {
    closeMenu();
  }, [closeMenu]);

  return (
    <nav className="navbar">
      <ul
        className="navbar-container"
        style={{ display: openIcon ? "" : "none" }}
      >
        {NAVIGATION_LINKS.map(({ id, name, link }) => (
          <NavItem key={id} name={name} link={link} onClick={handleClick} />
        ))}
      </ul>
    </nav>
  );
}

export default React.memo(Navbar);
