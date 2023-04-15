import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  let obj = {
  }

  let obj2 = {
    marginTop: "15px",
    marginLeft: "10px",
  }
  if(props.mode === "dark"){
    obj = {
      color : "white",
      fontSize: "25px"
    }
  }else{
    obj={
      color : "white",
      fontSize: "25px"
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-dark bg-dark" >
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={obj}>
          {props.title}
        </a>
        <button
          className="navbar-toggler bg-light"
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
              <a className="nav-link active" aria-current="page" href="#" style={obj}>
                Home
              </a>
            </li>
            <div className="form-check form-switch" style={obj2}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><h3>Dark Mode</h3></label>
      </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  firstLink: PropTypes.string.isRequired,
  secondLink: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "PBG",
  firstLink: "About",
  secondLink: "Contact",
};
