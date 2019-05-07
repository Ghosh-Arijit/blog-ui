import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PostList from './components/posts/PostList'
import PostShow from './components/posts/PostShow'
import UserList from './components/User/UserList'
import UserShow from './components/User/UserShow'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light mg-3">
            <Link to="/" className="navbar-brand">Blog-UI</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/post" className="nav-link">Post</Link>
                </li>
                <li className="nav-item">
                  <Link to="/user" className="nav-link">User</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
          
          <Route path="/" component={Home} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/post" component={PostList} exact={true} />
          <Route path="/post/:id" component={PostShow} />
          <Route path="/user" component={UserList} exact={true} /> 
          <Route path="post/user/:id" component={UserShow} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;