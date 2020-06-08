import React from 'react';

import style from './Logo.less';

const Logo = ({value}) => (
    <h1 className={style.logo}>
        <a href="index.html">
            {value}<span>.</span>
        </a>
    </h1>
);

export default Logo;