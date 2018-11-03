import React from 'react';
import axios from 'axios'
import BlockContent from '@sanity/block-content-to-react'
import WufooForm from 'react-wufoo-embed';

class Pages extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      content: {
        page: []
      },
    }
  }

  componentWillReceiveProps(nextProps) {
      // Should be an easier way to do this... we'll see
      this.props = nextProps;
      const { match: { params } } = this.props;
      axios.get('https://vlihxbj1cl.execute-api.us-west-1.amazonaws.com/dev/summary/' + params.page)
      .then(json => {
        this.setState({content: json.data.message})
        window.jQuery('#container').isotope({
            itemSelector: '.element',
            resizable: false,
            filter: '*',
            transitionDuration: '0.6s',
            layoutMode: 'packery'
        });
      })
  }

  componentWillMount() {

  }

  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get('https://vlihxbj1cl.execute-api.us-west-1.amazonaws.com/dev/summary/' + params.page)
    .then(json => this.setState({content: json.data.message}))

    console.log('componentDidMount');

    /*window.$(document).ready(function () {
      console.log(' ===== ');
      let zqa4ez2166fxaw;
      let d = document;
      let t = "script";

      let s = d.createElement(t), options = {
      'userName':'blockchainkid',
      'formHash':'zqa4ez2166fxaw',
      'autoResize':true,
      'height':'517',
      'async':true,
      'host':'wufoo.com',
      'header':'show',
      'ssl':true};
      s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
      s.onload = s.onreadystatechange = function() {
      var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
      try { zqa4ez2166fxaw = new WufooForm();zqa4ez2166fxaw.initialize(options);zqa4ez2166fxaw.display(); } catch (e) {}};
      var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr)
      console.log(scr), console.log(par);
      console.log(s);
    });*/

  }


  render() {
    const content = this.state.content;
    //console.log(content);
    const page = this.props.match.params.page;
    //console.log(page);
    const serializers = {
      types: {
        code: props => (
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        )
      }
    }

    var styles = {
      width: 'inherit',
      fontSize: 'small',
      color: '#a7a7a7',
      textAlign: 'center',
      display: 'block'
    };

    let astyles = {
      width: '100%',
      border: 'none'
    }

    return (
      <div id="container">
        <div className="element tile-2 home bg-change pages">
          <p className="small">{page}</p>
          <BlockContent blocks={content.page} serializers={serializers} />
          {(page === "contact") &&
          <div>
          <iframe height="517"
        allowTransparency="true"
        frameborder="0"
        scrolling="no"
        style={astyles}
        src="https://blockchainkid.wufoo.com/embed/zqa4ez2166fxaw/">
          <a href="https://blockchainkid.wufoo.com/forms/zqa4ez2166fxaw/">
            Fill out my Wufoo form!
          </a>
        </iframe>
        </div>
          }
        </div>
      </div>
    );
  }
}

/*window.$(document).ready(function () {
    console.log('here');
});*/

export default Pages;
