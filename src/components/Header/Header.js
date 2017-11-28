import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="Header">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <img src="https://bulma.io/images/bulma-logo.png" alt="TechSmart: a open source applicaation for finding influencial developers to follow and learn from" width="112" height="28" />
            </a>

            <button className="button navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item">
                Contribute
              </a>
              <a className="navbar-item">
                Follow Us
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
