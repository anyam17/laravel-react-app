import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import logo from '../../assets/images/lara.png';

const styles = {
  flex: {
    float: "left",
  },
  menuButton: {
    float: "right",
    marginRight: 20,
  },
};

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" style={styles.flex}>
                            <img src={logo} width="40" height="40" alt={'Laravel-React-App'}/>
                        </Typography>
                        <Button variant="outlined" color='inherit' style={styles.menuButton}>Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
