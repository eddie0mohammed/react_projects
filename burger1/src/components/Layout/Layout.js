import React from 'react';

import styles from './Layout.module.css';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className={styles.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;