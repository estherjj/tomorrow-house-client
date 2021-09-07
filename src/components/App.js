import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import routes from '../routes/routes';
import Header from './Header';
import Home from '../routes/Home';
import Login from '../routes/Login';
import Join from '../routes/Join';
import Cart from '../routes/Cart';
import Category from '../routes/Category';
import Detail from '../routes/Detail';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.login} component={Login} />
        <Route path={routes.join} component={Join} />
        <Route path={routes.cart} component={Cart} />
        <Route path={routes.category} component={Category} />
        <Route path={routes.detail()} component={Detail} />
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
