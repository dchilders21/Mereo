import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'
import client from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.dataset('eos').projectId('j5zwyy1n').image(source)
}


class DataTable extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      rankings: []
    }
  }

  componentWillMount() {

  }

  componentDidMount(){
    axios.get('https://xoai8qe63e.execute-api.us-west-1.amazonaws.com/dev/todos')
    .then(json => this.setState({rankings: json.data.message}))
  }


  render() {

    this.state.rankings.sort(function (a, b) {
      return a.rank - b.rank;
    });

    const data = this.state.rankings;

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
      Header: 'BP Name',
      accessor: 'name' // String-based value accessors!
    },
    {
      Header:() => <div>Voter <br/>Diversity</div>,
      accessor: 'voterDiversity' // String-based value accessors!
    },
    {
      Header:() => <div>Disclosure &<br/>Accessibility</div>,
      accessor: 'disclosure' // String-based value accessors!
    },
    {
      Header:() => <div>Structure &<br/>Leadership</div>,
      accessor: 'structure' // String-based value accessors!
    },
    {
      Header:() => <div>Value-Add <br/>Tools</div>,
      accessor: 'valueAdd' // String-based value accessors!
    },
    {
      Header:() => <div>Total <br/>Score</div>,
      accessor: 'total' // String-based value accessors!
    }]

    return (
      <div id="container">
        <div className="element tile-2 home bg-change">
          <p className="small">About</p>
          <h1 className="header">Transfer value beyond borders instantly, reliably, and at almost no cost. Beaumont is a platform that connects banks, payments systems, and people.</h1>
        </div>
        <div className="element tile-2 tile-table home bg-change">
          <p className="small">Data Table</p>
          <ReactTable
            data={data}
            columns={columns}
            className="-striped -highlight"
          />
        </div>
      </div>
    );
  }
}

export default DataTable;
