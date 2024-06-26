import React from 'react';
import { PropTypes } from 'prop-types';

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">          
          <a className="navbar-brand" href="/">{props.text}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse text-${props.mode === 'light' ? 'dark' : 'light'}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">{props.about}</a>
              </li>
            </ul>
            <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.darkMode}</label>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

Navbar.propTypes={
  text : PropTypes.string.isRequired,
  about : PropTypes.string
}

Navbar.defaultProps={
  text : 'Set Title Here',
  about : 'Set About text Here'
}
