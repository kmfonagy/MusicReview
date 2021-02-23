import Menu from './menu/Menu';
import Login from "./login/login";
import MyReviews from "./myReviews/MyReviews";
import './App.css';
import { Route } from "react-router-dom";
import { Switch } from "react-router";


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/menu' component={Menu} />
      </Switch>


      { /* <MyReviews /> */}
    </div>
  );
}

export default App;
