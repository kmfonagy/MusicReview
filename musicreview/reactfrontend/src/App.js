
import Menu from './menu/Menu';
import Login from "./login/login";
import Favorites from './favs/Favs';
import MyReviews from './myReviews/MyReviews';
import Review from './review/Review';
import SignUp from './signUp/SignUp';
import './App.css';
import { Route } from "react-router-dom";
import { Switch } from "react-router";


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/menu' component={Menu} />
        <Route path='/my-favorites' component={Favorites} />
        <Route path='/review' component={Review} />
        <Route path='/album-review' component={Review} />
        <Route path='/my-reviews' component={MyReviews} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
