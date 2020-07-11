import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Home, About, Order, Produk } from './views'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header className="topnav">
          <a href="/">Home</a>
          <a href="/produk">Produk</a>
          <a href="/order">Order</a>
          <a href="/about">About</a>

        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/produk">
            <Produk />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/about">
            <About />
          </Route>

        </Switch>
      </div>

      <div>

      </div>
    </Router >

  );
}

export default App;
