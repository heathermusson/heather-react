import React from 'react';
import {  Link } from "react-router-dom";

import style from './NavLink.less';

const NavLink = ({value, link, active}) => (
  <li><Link to={'/' + link}>{value}</Link></li>
);

export default NavLink;