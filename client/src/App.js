import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './components/Login';
import Logout from './components/Logout';
import GasPrices from './components/GasPrices';

function App() {
  const isloggedIn = localStorage.getItem('token');
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            {!isloggedIn ? <Link to="/login">Login</Link>: <div></div>}
          </li>
          <li>
            {isloggedIn ? <Link to="/logout">Logout</Link>: <div></div>}
          </li>
          <li>
            {isloggedIn ? <Link to="/protected">Protected Page</Link>: <div></div>}
          </li>
          {isloggedIn ? <li> Welcome {localStorage.getItem('username')}!</li>: <div></div>}
        </ul>
        <Switch>
          <ProtectedRoute exact path="/protected" component={GasPrices} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />    
        </Switch>
      </div>
    </Router>
  );
}

export default App;
