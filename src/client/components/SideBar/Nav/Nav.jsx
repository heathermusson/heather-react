import React from 'react';

import style from './Nav.less';

const Nav = ({children}) => (
    <nav role="navigation">
        <ul>
            {children}
        </ul>
    </nav>
);

export default Nav;