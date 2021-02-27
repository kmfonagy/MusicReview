import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './SideMenu.css'

class SideMenu extends Component {
    render() {
        return (
            <div className="SideMenu">
                <div className="Buttons">
                    <Button>Back</Button>
                    <Link to="/favorites" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="secondary">
                            My Favorites
                        </Button>
                    </Link>
                    <Link to="/MyReviews" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="secondary">
                            My Reviews
                        </Button>
                    </Link>
                </div>
                <div className="UserInfo">
                    
                </div>
                <div className="Logout">
                    &lt;username&gt;
                    <Link to="/" style={{ textDecoration: 'none', backgroundColor: 'inherit' }}>
                        <Button variant="contained" color="secondary">
                            logout
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default SideMenu;