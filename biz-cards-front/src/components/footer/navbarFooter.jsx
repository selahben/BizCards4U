import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth.context";

export function NavbarFooter() {
  const { user } = useAuth();

  return (
    <nav id="footerNav" className="navbar">
      <div className="navbar-nav container justify-content-center gap-1 flex-column p-0">
        <div className="d-flex flex-row gap-4">
          <NavLink className="nav-link p-0" aria-current="page" to="about">
            About
          </NavLink>
          {user?.biz && (
            <NavLink className="nav-link p-0" to="/my-cards">
              My Cards
            </NavLink>
          )}
        </div>
        <div className="d-flex flex-row gap-3 gap-md-3 align-content-center flex-wrap justify-content-between">
          <Link
            className="navbar-brand d-flex me-0 p-0 pt-1 align-self-center"
            to="/"
          >
            <i
              style={{ fontSize: "14px" }}
              className="bi bi-card-heading me-2"
            ></i>
            <span style={{ fontSize: "14px" }}>BizCards4U</span>
            <span className="me-2" style={{ fontSize: "14px" }}>
              &copy;
            </span>
            <span style={{ fontSize: "14px" }}>{new Date().getFullYear()}</span>
          </Link>

          <div className="d-flex flex-row gap-2 fs-4 footerSocial">
            <Link
              className="nav-link"
              target="_blank"
              to="https://facebook.com"
            >
              <i className="bi bi-facebook"></i>
            </Link>
            <Link
              className="nav-link"
              target="_blank"
              to="https://instagram.com"
            >
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
      </div>
    </nav>
  );
}
