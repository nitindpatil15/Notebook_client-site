import React from "react";

const Nav = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid mx-4">
            <a className="navbar-brand text-danger" href="/" style={{fontSize:"1.4rem"}}>
              VideoTube
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{fontSize:"1.4rem"}}>
                <li className="nav-item">
                  <a className="nav-link mx-2 active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="/register">
                    Playlist
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2 " aria-current="page" href="/login">
                    Login
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
