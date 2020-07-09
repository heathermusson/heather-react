import React from 'react';
import {  Link } from "react-router-dom";


import style from './Entry.less';

import { FaAngleRight } from 'react-icons/fa';

const FLink =({showLink, link, isExternal, btn}) => {
  if (!showLink) {
    return (<p className={style.btn}>{btn}</p>);
  } else if(isExternal) {
    return (<p className={style.btn}><a href={link} target="_blank">{btn}<FaAngleRight /></a></p>);
  } else {
    return (<p className={style.btn}><Link to={'/' + link}>{btn}<FaAngleRight /></Link></p>);
  }
}

const Hero = ({showLink = true, link, isExternal, type, image, title, description, btn}) => (
  <div className={style.entry}>
    <img href={link} className={style.entryImg} src={image}/>
    <div className={style.entryText}>
        <span className={style.type}>{type}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div class="meta-wrap align-items-center">
            <div class="half">
              <FLink
                showLink={showLink}
                link={link}
                isExternal={isExternal}
                btn={btn}
              />
            </div>
        </div>
    </div>
  </div>
);

export default Hero;