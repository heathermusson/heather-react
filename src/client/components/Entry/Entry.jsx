import React from 'react';
import {  Link } from "react-router-dom";


import style from './Entry.less';

import { FaAngleRight } from 'react-icons/fa';

const Hero = ({link, isExternal, type, image, title, description, btn}) => {
  const fLink = isExternal ? <a href={link}>{btn}<FaAngleRight /></a> : <Link to={'/' + link}>{btn}<FaAngleRight /></Link>;

  return (
    <div className={style.entry}>
      <img href={link} className={style.entryImg} src={image}/>
      <div className={style.entryText}>
          <span className={style.type}>{type}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <div class="meta-wrap align-items-center">
              <div class="half">
                  <p className={style.btn}>{fLink}</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;