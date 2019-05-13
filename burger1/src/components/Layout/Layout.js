import React, { Component } from 'react';

import styles from './Layout.module.css';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        // let prevState = this.state;
        this.setState((prevState) => {
           return { showSideDrawer: !prevState.showSideDrawer }
        });
    }
    
    
    render (){
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={styles.content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;