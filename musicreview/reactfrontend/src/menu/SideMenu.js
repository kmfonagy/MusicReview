import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import tempUsers from '../tempUsers.json';
import './SideMenu.css'

class SideMenu extends Component {
    render() {
        return (
            <div className="SideMenu">
                <div className="UserMenuBtns">
                    <Link to="/my-favorites" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="secondary">
                            My Favorites
                        </Button>
                    </Link>
                    <Link to="/my-reviews" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="secondary">
                            My Reviews
                        </Button>
                    </Link>
                </div>
                <div className="UserMenuInfo">

                </div>
                <div className="LogOutMenuBtns">
                    {tempUsers.user.filter(user => user.ID == this.props.UserID).map((user) => (
                        user.Username
                    ))}
                    <Link to="/" style={{ textDecoration: 'none', backgroundColor: 'inherit' }}>
                        <Button variant="contained" color="secondary">
                            Logout
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default SideMenu;