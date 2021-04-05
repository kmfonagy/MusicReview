import React, { Component } from 'react';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './SideMenu.css';

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
        }
    }

    componentDidMount() {
        Promise.all([
            fetch('/api/getAllUsers').then(res => res.json())
        ]).then(([allUsers]) => {
            console.log(allUsers)

            for (let i = 0; 0 < allUsers.length; i++) {
                if (allUsers[i].id == localStorage.getItem("userID")) {
                    console.log(allUsers[i].id, localStorage.getItem("userID"))
                    this.setState({
                        user: allUsers[i].name
                    })
                    console.log("User name is " + this.state.user)
                }
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    render() {
        console.log(this.state.user)
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
                    <Typography>{this.state.user}</Typography>
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