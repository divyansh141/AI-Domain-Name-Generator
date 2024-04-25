import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>NameButler</h1>
        </div>
        <ul>
          <li>
            <NavLink to="/" className="navlink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navlink">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
