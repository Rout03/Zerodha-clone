import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Navbar Animation CSS */}
      <style>
        {`
          .custom-navbar {
            transition: all 0.3s ease;
            background-color: #ffffff;
          }

          .custom-navbar:hover {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
          }

          /* Logo */
          .navbar-logo {
            transition: transform 0.3s ease;
          }

          .navbar-logo:hover {
            transform: scale(1.04);
          }

          /* Navbar Links */
          .custom-nav-link {
            position: relative;
            color: #424242 !important;
            font-size: 14px;
            font-weight: 400;
            transition: color 0.3s ease;
          }

          .custom-nav-link:hover {
            color: #387ed1 !important;
          }

          /* Underline Animation */
          .custom-nav-link::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 3px;
            width: 0;
            height: 2px;
            background-color: #387ed1;
            border-radius: 10px;
            transform: translateX(-50%);
            transition: width 0.3s ease;
          }

          .custom-nav-link:hover::after {
            width: 55%;
          }

          /* Menu Icon */
          .menu-icon {
            display: inline-block;
            font-size: 21px;
            color: #424242;
            transition: all 0.3s ease;
          }

          .menu-icon:hover {
            color: #387ed1;
            transform: rotate(90deg);
          }

          /* Mobile Toggle */
          .navbar-toggler {
            transition: transform 0.3s ease;
          }

          .navbar-toggler:hover {
            transform: scale(1.08);
          }

          /* Mobile Responsive */
          @media (max-width: 991px) {
            .navbar-nav {
              padding-top: 15px;
              padding-bottom: 10px;
            }

            .custom-nav-link {
              padding: 10px 15px !important;
            }

            .custom-nav-link::after {
              display: none;
            }

            .nav-item {
              width: 100%;
              text-align: center;
            }

          }
        `}
      </style>

      <nav
        className="navbar navbar-expand-lg bg-white border-bottom py-1 sticky-top custom-navbar"
      >
        <div className="container">

          {/* Logo */}
          <a
            className="navbar-brand m-0 p-0"
            href="https://zerodha.com/"
          >
            <img
              src="https://zerodha.com/static/images/logo.svg"
              alt="Zerodha Logo"
              width="120"
              className="img-fluid navbar-logo"
            />
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-center">

              {/* Signup */}
              <li className="nav-item">
                <Link
                  className="nav-link custom-nav-link px-3"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>

              {/* About */}
              <li className="nav-item">
                <Link
                  className="nav-link custom-nav-link px-3"
                  to="/about"
                >
                  About
                </Link>
              </li>

              {/* Product */}
              <li className="nav-item">
                <Link
                  className="nav-link custom-nav-link px-3"
                  to="/product"
                >
                  Product
                </Link>
              </li>

              {/* Pricing */}
              <li className="nav-item">
                <Link
                  className="nav-link custom-nav-link px-3"
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>

              {/* Support */}
              <li className="nav-item">
                <Link
                  className="nav-link custom-nav-link px-3"
                  to="/support"
                >
                  Support
                </Link>
              </li>

              {/* Menu */}
              <li className="nav-item ms-2 menu-item">
                <a
                  className="nav-link text-dark"
                  href="#"
                >
                  <span className="menu-icon">
                    ☰
                  </span>
                </a>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;