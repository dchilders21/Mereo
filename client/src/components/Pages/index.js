import React from 'react';
import axios from 'axios'
import BlockContent from '@sanity/block-content-to-react'
import client from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.dataset('eos').projectId('j5zwyy1n').image(source)
}

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
      axios.get('https://xoai8qe63e.execute-api.us-west-1.amazonaws.com/dev/summary/' + params.page)
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
    axios.get('https://xoai8qe63e.execute-api.us-west-1.amazonaws.com/dev/summary/' + params.page)
    .then(json => this.setState({content: json.data.message}))
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

    return (
      <div id="container">
        <div className="element tile-2 home bg-change pages">
          <p className="small">{page}</p>
          <BlockContent blocks={content.page} serializers={serializers} />
        </div>
      </div>
    );
  }
}

export default Pages;
