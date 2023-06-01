import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { useEffect, useState } from "react";

export function Navbar() {
  const { user } = useAuth();

  /*Light/Dark Mode BTN Functionality*/
  const [themeMode, setThemeMode] = useState("light");
  const htmlTag = document.getElementsByTagName("html")[0];
  useEffect(() => {
    htmlTag.setAttribute("data-bs-theme", themeMode);
  }, [themeMode]);

  /*Mobile navbar collapse functionality*/
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <nav
      id="header"
      className="navbar navbar-expand-sm shadow-sm border-bottom position-fixed w-100"
    >
      <div className="container">
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
          <ul className="navbar-nav mx-auto mb-2 mb-sm-0">
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
          <ul className="navbar-nav mx-auto mb-2 mb-sm-0">
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
        <div>
          <p className="my-0 text-center lh-1">
            {user ? (
              <i style={{ fontSize: "20px" }} className="bi bi-person-fill"></i>
            ) : (
              <i
                style={{ fontSize: "20px" }}
                className="bi bi-person-x-fill"
              ></i>
            )}
          </p>
          <p style={{ fontSize: "12px" }} className="my-0 text-center lh-1">
            {!user
              ? null
              : !user?.biz
              ? "Regular"
              : user?.biz
              ? "Business"
              : null}
          </p>
        </div>

        <button
          className="btn"
          onClick={() => {
            setThemeMode(themeMode === "light" ? "dark" : "light");
            setIsNavCollapsed(true);
          }}
        >
          {themeMode === "light" ? (
            <i className="bi bi-moon"></i>
          ) : (
            <i className="bi bi-brightness-high"></i>
          )}
        </button>
      </div>
    </nav>
  );
}
