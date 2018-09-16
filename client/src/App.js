import React, { Component } from 'react';
import DataTable from './components/DataTable'
import Details from './components/Details'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import './static/css/reset.css';
import './static/css/bootstrap.min.css';
import './static/css/font-awesome.min.css';
import './static/css/contact.css';
import './static/css/styles.css';
import './static/css/jquery.fancybox.css';
import './static/css/responsive.css';
import './static/css/flexslider.css';


class App extends Component {
  state = {
  };

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <div className="App">
          <div id="preloader">
            <div id="status">
              <div className="parent">
                <div className="child">
                  <p>loading</p>
                </div>
              </div>
            </div>
          </div>


          <div id="wrap">
            <div id="menu-button">
              <div className="centralizer">
                <div className="cursor">
                  <div id="nav-button">
                    <span className="nav-bar"></span>
                    <span className="nav-bar"></span>
                    <span className="nav-bar"></span>
                  </div>
                </div>
              </div>
            </div>


            <header id="header" className="clearfix">
              <h1 id="logo"><Link to='/'>mereo</Link></h1>

              <nav id="main-nav">
                <ul className="clearfix" id="options">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/'>Methodology</Link></li>
                  <li><Link to='/'>FAQs</Link></li>
                  <li><Link to='/'>About Mereo</Link></li>
                  <li><Link to='/'>Contact Us</Link></li>
                  <li><Link to='/'>Proxy</Link></li>

                </ul>
              </nav>
              <ul className="social-list clearfix">
                <li> <a href=""><i className="fa fa-medium"></i></a> </li>
                <li> <a href=""><i className="fa fa-twitter"></i></a> </li>
              </ul>
            </header>

            <div id="content">
              <div className="container clearfix">
                <Route exact path="/" component={DataTable} />
                <Route path="/:id" component={Details} />
              </div>
            </div>
            <footer id="footer">
              <div className="container clearfix">
                <p className="alignleft">Donations: supportmereo (EOS) or 0xa991C0E97a2B556cEb61b6618A618ac6091e105f (ETH)</p>
                <p className="alignright">Powered by <a href="http://chnkyfire.com/" data-title="CHNKYFIRE">CHNKYFIRE</a>.</p>
              </div>
            </footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
