
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';


function App() {
  return (
    <div className="App">
      {/* <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/friends">Friends</a></li>
        <li><a href="/about">About</a></li>
      </ul> */}

      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/friends'>
            <Friends></Friends>
          </Route>
          <Route path='/friend/:friendId'>
            <FriendDetail></FriendDetail>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/about/culture">
            <Culture></Culture>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;
