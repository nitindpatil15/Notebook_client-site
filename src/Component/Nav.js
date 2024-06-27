import React from "react";
import video from "../img/play-1173495_960_720.png";
import user from "../img/account-6491185_1280.webp";

const Nav = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid mx-4">
            <a
              className="navbar-brand text-danger"
              href="/"
              style={{ fontSize: "1.4rem" }}
            >
              <img src={video} alt="logo" style={{ width: "2rem" }} /> VideoTube
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container">
              <input
                type="search"
                placeholder="Search"
                className="p-2 text-center"
                style={{
                  width: "40rem",
                  marginLeft: "15rem",
                  borderRadius: "5rem",
                }}
              />
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav ms-auto mb-2 mb-lg-0"
                style={{ fontSize: "1.4rem" }}
              >
                <li className="nav-item">
                  <a
                    className="nav-link mx-2 active"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link mx-2 "
                    aria-current="page"
                    href="/login"
                  >
                    <img src={user} style={{ width: "3rem" }} alt="user" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
