import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './js/common/header/Header';
import './scss/main.scss'
import routes from './routes';
import Footer from './js/common/footer/Footer';


function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
