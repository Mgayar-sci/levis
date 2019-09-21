import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './js/common/header/Header';
import './scss/main.scss'
import routes from './routes';
import Footer from './js/common/footer/Footer';


function App() {
  return (
    <HashRouter basename="/" >
      <Header />
      <Switch>
        {
          routes.map(({ route, Component }) => (
            <Route
              exact={true}
              path={route}
              component={Component}
            />))
        }
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
