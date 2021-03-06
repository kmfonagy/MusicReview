# 2021Spring_Team2_Repository-

## Issue: Updates to Menu

### Noted changes for other branches

1. Installed packages to account for latest version

```
npm install react-bootstrap bootstrap
```
```
npm install --save react-router
```
```
npm install --save react-router-dom
```

2. Updated App.js with Routes:
```
import Favorites from './favs/Favs';
import Reviews from "./myReviews/MyReviews";
import AlbumReview from './review/Review';
```
```
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/menu' component={Menu} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/reviews' component={Reviews} />
        <Route path='/album-review' component={AlbumReview} />
    </Switch>
```
3. Add Link wrappers to SideMenu.js Buttons, removed &lt;user_information&gt; &ndash; as it&#39;s unneeded.
4. Updated SideMenu.css with latest styles to account for adding Link wrapper to Buttons:
```
.SideMenu {
    background-color: #335080;
    justify-content: center;
    align-content: center;
    display: flex;
    flex-direction: column;
    height: 99vh;
    padding: .2em;
    width: 9rem;
}

.UserBtns {
    background-color: #1E2838;
    justify-content: center;
    align-self: top;
    display: flex;
    flex-direction: column;
    height: 20%;
}

.UserBtns Button {
    background-color: #1E2838;
    width: 100%;
    color: #ffffff;
    border-radius: 0;
    box-shadow: none;
}

.UserBtns Button:hover {
    background-color: #335080;
}

.UserInfo {
    background-color: inherit;
    justify-content: center;
    align-self: center;
    display: flex;
    margin: 0 .2em;
    color: #ffffff;
    font-size: 1rem;
    height: 70%;
}

.LoginBtns {
    background-color: inherit;
    justify-content: center;
    align-self: baseline;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 10%;
    font-size: 1rem;
    text-align: center;
}

.LoginBtns Button {
    color: #ffffff;
    background-color: inherit;
    width: 100%;
    box-shadow: none;
    border-radius: 0;
    margin-top: .25rem;
}

.LoginBtns Button:hover {
    background-color: #1E2838;
}
```