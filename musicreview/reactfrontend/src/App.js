
import Menu from './menu/Menu';
import Login from "./login/login";
import Favorites from './favs/Favs';
import MyReviews from './myReviews/MyReviews';
import Review from './review/Review';
import SignUp from './signUp/SignUp';
import './App.css';
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import React from 'react';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      UserID: localStorage.getItem("userID"),

      AlbumID: localStorage.getItem('albumID')
    }
    console.log("App.js AlbumID" + this.state.AlbumID)
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={
            props => <Login {...props} setUserID={this.UpdateUserID} />
          } />
          <Route path='/menu' render={
            props => <Menu {...props} userID={this.state.UserID} />
          } />
          <Route path='/my-favorites' render={
            props => <Favorites {...props} userID={this.state.UserID} />
          } />
          <Route path='/album-review/:id' render={
            props => <Review {...props} userID={this.state.UserID} />
          } />
          <Route path='/my-reviews' render={
            props => <MyReviews {...props} userID={this.state.UserID} />
          } />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
