import React from 'react';

import style from './Hero.less';

const Hero = ({background, children}) => (
    <div className={`${style.heroWrap} js-fullheight`} style={{backgroundImage:  "url(" + background + ")", backgroundSize: "cover", backgroundPosition: "center center"}} data-stellar-background-ratio="0.5">
        <div className={style.overlay}></div>
        <div className={style.heroContainer}>
            <div className={style.text}>
                {children}
            </div>
        </div>
    </div>
);

export default Hero;