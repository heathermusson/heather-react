import React from 'react';

import style from './HalfHero.less';

const HalfHero = ({background, children}) => (
    <div className={`${style.heroWrap}`} style={{backgroundImage:  "url(" + background + ")", backgroundSize: "cover", backgroundPosition: "center center"}} data-stellar-background-ratio="0.5">
        <div className={style.overlay}></div>
        <div className={style.heroContainer}>
            <div className={style.text}>
                {children}
            </div>
        </div>
    </div>
);

export default HalfHero;