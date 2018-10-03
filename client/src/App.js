import React, { Component } from 'react';
import DataTable from './components/DataTable'
import Details from './components/Details'
import Pages from './components/Pages'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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
                  <li><Link to={{
                    pathname: '/methodology',
                    state: {
                        page: 'methodology'
                      }
                    }}>Methodology</Link></li>
                  <li><Link to='/about'>About Mereo</Link></li>
                  <li><Link to='/contact'>Contact Us</Link></li>
                  <li><Link to='/proxy'>Proxy</Link></li>
                  <li><Link to='/faqs'>FAQs</Link></li>
                </ul>
              </nav>
              <ul className="social-list clearfix">
                <li> <a href="https://medium.com/@blockchainkid"><i className="fa fa-medium"></i></a> </li>
                <li> <a href="https://twitter.com/blockchainkid"><i className="fa fa-twitter"></i></a> </li>
              </ul>
            </header>

            <div id="content">
              <div className="container clearfix">
                <Switch>
                  <Route exact path="/" component={DataTable} />
                  <Route exact path='/:page' component={Pages}/>
                  <Route exact path="/bp/:id" component={Details} />
                </Switch>
              </div>
            </div>
            <footer id="footer">
              <div className="container clearfix">
                <div className="alignleft">
                  <p>Donations: supportmereo (EOS) or 0xa991C0E97a2B556cEb61b6618A618ac6091e105f (ETH)</p>
                  <p>Top 5 Voter Concentration has been calculated by aggregating votes across all Bitfinex voting accounts</p>
                </div>
                <div className="alignright">
                  <p>Powered by <a href="http://chnkyfire.com/" data-title="CHNKYFIRE">CHNKYFIRE</a>.</p>
                </div>
                <div className="alignleft">
                  <p>Scoring under Disclosure & Accessibility and Leadership & Structure is generally based on proper and sufficient onsite (or linked) disclosure of these items. For example, some BPs provide links to a Code of Conduct which is in fact their Candidacy Introduction post. Often, these lack proper discussion of BP values and operating guidelines. Therefore, under this scenario, a BP would receive a “Not Disclosed” (ND) designation next to the Code of Conduct scoring component.</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
