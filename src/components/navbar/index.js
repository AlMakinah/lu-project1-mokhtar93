import React, { Component } from "react";
import { css } from '@emotion/core';
import "../../styles.css"
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className='header'>
        <div className={'container'}>
          <div className={'row row--3'}>
            <div className={'col--2'}>
            <input />
          <nav className={'header_navbar'}>
            <ul className='header_navbar--list'>
              <li>Dribbles</li>
              <li>Buckets</li>
              <li>Users</li>
              <li>Lists</li>
            </ul>
          </nav>
            </div>
          <div className={'col'}>
          <ul className='header_navbar--register'>
            <li>Signin</li>
            <li>Signup</li>
            </ul>
          </div>
        </div>
          </div>
      </div>
    );
  }
}

export default Navbar;
