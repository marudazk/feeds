import React from 'react';
import VideosSection from './components/Videos/VideosSection/VideosSection';
import HomeSection from './components/Home/HomeSection/HomeSection';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div id="container">
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/youtube">Youtube</Link>
          </li>
        </ul>
      </nav>
      <h1>Feed app</h1>
      <Switch>
        <Route exact path="/">
          <HomeSection />
        </Route>

        <Route path="/youtube">
          <VideosSection />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
