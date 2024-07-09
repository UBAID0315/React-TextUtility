import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [icon, setIcon] = useState("fa fa-moon-o");

  const changeIcon = () => {
    if (icon === 'fa fa-moon-o') {
      setIcon("fa fa-sun-o");
    } else {
      setIcon("fa fa-moon-o");
    }
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" to="/">{props.title}</a>
          <div className="d-flex">
            <a onClick={() => { props.toggleStyle(); changeIcon() }}>
              <i style={{ color: props.mode === 'light'? 'black' : 'white', fontSize: '35px' }} className={`${icon} mx-4 mt-1`}></i>
            </a>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll">
              <span className="navbar-toggler-icon"></span>
            </button> */}
          </div>
          {/* <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Services</a>
              </li>
            </ul>
            {props.searchBar? (
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-success" type="submit">Search</button>
              </form>
            ) : ""}
          </div> */}
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  searchBar: PropTypes.bool,
};