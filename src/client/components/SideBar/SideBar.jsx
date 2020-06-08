import React from 'react';

import style from './SideBar.less';

import Logo from './Logo/Logo.jsx';
import Nav from './Nav/Nav.jsx';
import NavLink from './NavLink/NavLink.jsx';

const SideBar = () => (
  <div className={style.aside}>
      <Logo value='heather'/>
      <Nav>
          <NavLink value="Home" link="#" />
          <NavLink value="About" link="about" />
          <NavLink value="Contact" link="contact" />
      </Nav>
  </div>
);

export default SideBar;