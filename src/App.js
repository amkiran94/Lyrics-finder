import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './Component/Layout/NavBar'
import Index from './Component/Layout/Index'
import Lyrics from './Component/Tracks/Lyrics'
import { Provider } from './Contex'

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
