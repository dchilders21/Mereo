import React from 'react';
import axios from 'axios'
import BlockContent from '@sanity/block-content-to-react'
import client from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.dataset('eos').projectId('j5zwyy1n').image(source)
}


class Details extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      details: {
        address: [],
        disclosureAccessibility: [],
        structureLeadership: [],
        valueAdd: [],
        voterDiversity: []
      }
    }
  }

  componentWillMount() {

  }

  componentDidMount(){
    window.jQuery('#container').isotope({
        itemSelector: '.element',
        resizable: false,
        filter: '*',
        transitionDuration: '0.6s',
        layoutMode: 'packery'
    });
    const { match: { params } } = this.props;
    axios.get('https://xoai8qe63e.execute-api.us-west-1.amazonaws.com/dev/todos/' + params.id)
    .then(json => this.setState({details: json.data.message}))
  }


  render() {
    const details = this.state.details;

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
        <div className="element tile-3 home bg-change">
          <p className="small">Block Producer</p>
          <h4 className="header icon-to-the-right">{details.name}</h4>
          <p><a href={"https://www." + details.website} target="_blank" title="">Website</a> <i className="fa fa-external-link"></i></p>
          <p><a href={details.json} target="_blank" title="">BP JSON</a> <i className="fa fa-external-link"></i></p>
          <p><a href={details.ownership} target="_blank" title="">Ownership Disclosure</a> <i className="fa fa-external-link"></i></p>
          <p><a href={details.code} target="_blank" title="">Code of Conduct</a> <i className="fa fa-external-link"></i></p>
          <div className="icons absolute-top-right"><img src={urlFor(details.logo)} alt="" /></div>
        </div>
        <div className="element tile-3 home bg-change">
          <h4 className="header">Disclosure & Accessibility</h4>
          <BlockContent blocks={details.disclosureAccessibility} serializers={serializers} />
        </div>
        <div className="element tile-3 home bg-change">
          <h4 className="header">Leadership and Structure</h4>
          <BlockContent blocks={details.structureLeadership} serializers={serializers} />
        </div>
        <div className="element tile-1 home bg-change tools">
          <h4 className="header">Value-Add Tools</h4>
          <BlockContent blocks={details.valueAdd} serializers={serializers} />
        </div>
        <div className="element tile-1 home bg-change voter">
          <h4 className="header">Voter Diversity</h4>
          <BlockContent blocks={details.voterDiversity} serializers={serializers} />
        </div>
      </div>
    );
  }
}

export default Details;
