/* Application packages imports. */
import React from 'react';
import { Link } from 'react-router-dom';

/* Application components imports. */
import Routes from '../../routes/web';

class AppLayout extends React.Component { 

    render() {
        return (
            <div className="container" style={{textAlign: "center"}}>
                <Link to="/" style={{padding:10}}>Index</Link>
                <Link to="/home" style={{padding:10}}>Home</Link>
                <Link to="/about" style={{padding:10}}>About</Link>
                <hr />
                <br />

                {/* Rendering all other components in this application as child component of AppLayout component. */}
                <Routes />

                <br />
                <hr />
                <div>Footer &copy; 2018</div>
            </div>
        );
    }
}

export default AppLayout