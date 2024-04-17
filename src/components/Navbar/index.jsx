import meflexlogo from "../../Images/Meflex Logo.png";
import navsearchboxicon from "../../Images/navsearchboxicon.png";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-md container-xxl ">
      <div className="nav-container d-flex align-items-center w-100  ">
        <div className="navbar-logo d-flex">
          <img src={meflexlogo} alt="" />
          <i
            className="bi bi-search  d-md-none d-sm-block ms-4"
            style={{ fontSize: "20px" }}
          ></i>
        </div>

        <span
          style={{ color: "#e3e3e3", marginLeft: "24px" }}
          className="d-none d-xl-block"
        >
          |
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <i
              className="bi bi-list"
              style={{ fontSize: "30px", color: "black" }}
            />
          ) : (
            <i
              className="bi bi-x"
              style={{ fontSize: "30px", color: "black" }}
            ></i>
          )}
        </button>

        <div
          className="collapse navbar-collapse me-0 flex-grow-0 "
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <a className="nav-link " aria-current="page" href="#">
              Explore
            </a>
            <a className="nav-link" href="#">
              Create
            </a>
            <a className="nav-link" href="#">
              Meflex TV
            </a>
            <a className="nav-link " href="#">
              Artist
            </a>
          </div>
        </div>
        <div className="nav-search d-none d-md-block">
          <input type="text" placeholder="Type for collections, NFTs etc" />
          <img src={navsearchboxicon} alt="bag icon" />
        </div>
        <div className="nav-btn d-none d-md-flex ms-xl-auto   ">
          <button>Log In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
