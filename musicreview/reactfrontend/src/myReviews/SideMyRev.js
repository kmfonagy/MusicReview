import React, { Component } from 'react';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import tempUsers from '../tempUsers.json';
import './SideMyRev.css'

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
            for(let i = 0; 0 < allUsers.length; i++){
                if(allUsers[i].id == this.props.UserID){
                    console.log(allUsers[i].id, this.props.UserID)
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
        return (
            <div className="SideRevs">
                <div className="UserRevsBtns">
                    <Link to="/menu" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="secondary">
                            Menu
                        </Button>
                    </Link>
                    <Link to="/my-favorites" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="secondary">
                            My Favorites
                        </Button>
                    </Link>
                </div>
                <div className="UserInfo">

                </div>
                <div className="LoginRevsBtns">
                    <Typography>{this.state.user}</Typography>
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