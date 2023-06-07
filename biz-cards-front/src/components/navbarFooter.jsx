import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";

export function NavbarFooter() {
  const { user } = useAuth();

  return (
    <nav id="footerNav" className="navbar">
      <div className="navbar-nav container justify-content-center gap-md-4 gap-1 flex-column flex-md-row">
        <Link className="navbar-brand me-0 p-0" to="/">
          <i className="bi bi-card-heading me-2"></i>
          <span>BizCards4U</span>
          <span className="me-2">&copy;</span>
          <span>{new Date().getFullYear()}</span>
        </Link>
        <div className="d-flex flex-row gap-4">
          <NavLink className="nav-link" aria-current="page" to="about">
            About
          </NavLink>
          {user?.biz && (
            <NavLink className="nav-link" to="/my-cards">
              My Cards
            </NavLink>
          )}
        </div>
        <div className="d-flex flex-row gap-2 fs-4">
          <Link className="nav-link" target="_blank" to="https://facebook.com">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link className="nav-link" target="_blank" to="https://instagram.com">
            <i className="bi bi-instagram"></i>
          </Link>
          <Link
            className="nav-link"
            target="_blank"
            to="https://www.linkedin.com/"
          >
            <i className="bi bi-linkedin"></i>
          </Link>
          <Link
            className="nav-link"
            target="_blank"
            to="https://www.youtube.com/"
          >
            <i className="bi bi-youtube"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}
