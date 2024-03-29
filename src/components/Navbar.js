import React from "react";

export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light " style={{background: "#21D192"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NetBuys
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a className="dropdown-item" href="/">
                          Automobiles
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Electronics
                        </a>
                      </li>
                      <li>
                        {/* <hr className="dropdown-divider" /> */}
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Furniture
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Fashion
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Hardware
                        </a>
                      </li>
                </ul>
              </li>
              
            </ul>

            <button type="button" className="btn btn-primary " style={{borderRadius:"40px",color:"#000",backgroundColor:"#0ab176", border:"2px solid #39e2a7"}}>Login</button>
              {/* for Search */}
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
