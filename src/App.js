import './App.css';
import './globalStyles.css';
import Header from './components/header';

import {
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Team from './pages/team';


function App() {
  return (
    <div className="App">
      <Header />
        <div className="pages">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
          </Switch>
        </div>

    </div>
  );
}

export default App;
