import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth.context";
import { useState } from "react";

export function Navbar() {
  const { user } = useAuth();

  /*Mobile navbar collapse functionality*/
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <nav id="navContainer" className="navbar navbar-expand-sm gap-2 gap-md-5">
      <Link className="navbar-brand me-0" to="/">
        <i className="bi bi-card-heading me-2"></i>BizCards4U
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse ${!isNavCollapsed && "show"}`}
        id="mainNav"
      >
        <ul className="navbar-nav me-auto mb-2 mb-sm-0 justify-content-start">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              aria-current="page"
              to="about"
              onClick={() => setIsNavCollapsed(true)}
            >
              About
            </NavLink>
          </li>
          {user?.biz && (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/my-cards"
                onClick={() => setIsNavCollapsed(true)}
              >
                My Cards
              </NavLink>
            </li>
          )}
        </ul>
        <ul className="navbar-nav mb-2 mb-sm-0 ms-auto justify-content-end">
          {user ? (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/sign-out"
                onClick={() => setIsNavCollapsed(true)}
              >
                Sign Out
              </NavLink>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/sign-in"
                  onClick={() => setIsNavCollapsed(true)}
                >
                  Sign In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/sign-up"
                  onClick={() => setIsNavCollapsed(true)}
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
