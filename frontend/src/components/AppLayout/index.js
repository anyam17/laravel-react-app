/* Application packages imports. */
import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

/* Application components imports. */
import Routes from '../../routes/web';
import Header from './Header';

class AppLayout extends React.Component { 

    render() {
        return (
            <div className="container" style={{textAlign: "center"}}>
                <Header />
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Link to="/" style={{padding:10}}>Index</Link>
                        <Link to="/home" style={{padding:10}}>Home</Link>
                        <Link to="/about" style={{padding:10}}>About</Link>
                        <hr />
                        <br />

                        {/* Rendering all other components in this application as child component of AppLayout component. */}
                        <Routes />

                        <Button variant="outlined" style={{textTransform:'capitalize'}} color='primary'>Get Started</Button>

                        <br />
                        <hr />
                        <div>Footer &copy; 2018</div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default AppLayout