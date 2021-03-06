import React from 'react';

import style from './Social.less';

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithubAlt, FaMediumM } from 'react-icons/fa';


const Social = ({children}) => (
  <ul className={style.social}>
    <li class="ftco-animate"><a href="https://www.facebook.com/heather.musson2"><FaFacebookF /></a></li>
    <li class="ftco-animate"><a href="https://www.linkedin.com/in/heather-m-004517122/"><FaLinkedinIn /></a></li>
    <li class="ftco-animate"><a href="https://medium.com/@heathermusson"><FaMediumM /></a></li>
    <li class="ftco-animate"><a href="https://github.com/heathermusson"><FaGithubAlt /></a></li>
    <li class="ftco-animate"><a href="https://www.instagram.com/heather_musson/"><FaInstagram /></a></li>
  </ul>
);

export default Social;