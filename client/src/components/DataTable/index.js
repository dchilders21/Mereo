import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'
import client from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.dataset('eos').projectId('j5zwyy1n').image(source)
}

function toDecimal(numberString) {
    return numberString.toFixed(1);
}


class DataTable extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      rankings: [],
      short: {
        page: []
      }
    }
  }

  componentWillMount() {

  }

  componentDidMount(){
    const { match: { params } } = this.props;
    axios.get('https://xoai8qe63e.execute-api.us-west-1.amazonaws.com/dev/summary')
    .then((response1) => {
      axios.get('https://xoai8qe63e.execute-api.us-west-1.amazonaws.com/dev/todos')
      .then((response2) => {
        this.setState({rankings: response2.data.message, short: response1.data.message})
      })
    })
    //.then(json => this.setState({rankings: json.data.message}))
  }


  render() {



    this.state.rankings.sort(function (a, b) {
      return a.rank - b.rank;
    });

    const data = this.state.rankings;
    const short = this.state.short;

    const serializers = {
      types: {
        code: props => (
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        )
      }
    }

    const columns = [{
      Header: 'Rank',
      accessor: 'rank', // String-based value accessors!
    },
    {
      Header: '',
      accessor: 'logo', // String-based value accessors!
      width: 54,
      Cell: row => (
        <div className="icons"><img src={urlFor(row.value)} alt="" /></div>
      )
    },
    {
      Header:() => <div>Block <br/>Producer</div>,
      accessor: 'name', // String-based value accessors!
      //accessor: d => d.name,
      Cell: props => (
        <Link to={'bp/' + props.original._id}>{props.original.name}</Link>
      )
    },
    {
      Header:() => <div>Voter <br/>Diversity</div>,
      accessor: 'voterDiversity', // String-based value accessors!
      Cell: row => <div> {toDecimal(row.value)} </div>
    },
    {
      Header:() => <div>Disclosure &<br/>Accessibility</div>,
      accessor: 'disclosure', // String-based value accessors!
      Cell: row => <div> {toDecimal(row.value)} </div>
    },
    {
      Header:() => <div>Structure &<br/>Leadership</div>,
      accessor: 'structure', // String-based value accessors!
      Cell: row => <div> {toDecimal(row.value)} </div>
    },
    {
      Header:() => <div>Value-Add <br/>Tools</div>,
      accessor: 'valueAdd', // String-based value accessors!
      Cell: row => <div> {toDecimal(row.value)} </div>
    },
    {
      Header:() => <div>Total <br/>Score</div>,
      accessor: 'total', // String-based value accessors!
      Cell: row => <div> {toDecimal(row.value)} </div>
    },
    {
      Header: 'Last Updated',
      accessor: 'updated' // String-based value accessors!
    }]

    return (
      <div>

      <div className="section home bg-change about-mereo">
        <p className="small">About Mereo</p>
        <BlockContent blocks={short.page} serializers={serializers} />
      </div>

        <div className="section home bg-change">
          <p className="small">EOS Block Producer Performance Summary</p>
          <ReactTable
            data={data}
            columns={columns}
            className="-striped -highlight"
            defaultPageSize={55}
          />
          <p className="disclaimer">Certain components of the Mereo.io ranking methodology require my
          judgement and interpretation, which may be different from yours.
          In addition, my analysis may include unintended errors or miscalculations
          which could significantly affect a Block Producer’s score.
          Please also conduct your own research and due diligence before voting
          for Block Producers or setting proxymereoio as your voter proxy.</p>
        </div>
      </div>
    );
  }
}

export default DataTable;
