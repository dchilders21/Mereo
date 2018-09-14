import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
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

    return (
      <div id="container">
        <div className="element tile-2 home bg-change">
          <p className="small">About</p>
          <h1 className="header">Transfer value beyond borders instantly, reliably, and at almost no cost. Beaumont is a platform that connects banks, payments systems, and people.</h1>
        </div>
        <div className="element tile-2 tile-table home bg-change">
          <p className="small">Data Table</p>
          <Table className="table">
            <Thead>
              <Tr>
                <Th scope="col">Rank</Th>
                <Th scope="col"></Th>
                <Th scope="col">BP Name</Th>
                <Th scope="col">Voter Diversity</Th>
                <Th scope="col">Disclosure & Accessibility</Th>
                <Th scope="col">Structure & Leadership</Th>
                <Th scope="col">Value-Add Tools</Th>
                <Th scope="col">Total Score</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                  this.state.rankings.map(function(rank){
                    //console.log(urlFor(rank.logo));
                    //const url = urlFor(rank.logo);
                    return (
                      <Tr key={rank._id}>
                        <Th scope="row">{rank.rank}</Th>
                        <Td><div className="icons"><img src={urlFor(rank.logo)} alt="" /></div></Td>
                        <Td><Link to={'/' + rank._id}>{rank.name}</Link></Td>
                        <Td>{rank.voterDiversity}</Td>
                        <Td>{rank.disclosure}</Td>
                        <Td>{rank.structure}</Td>
                        <Td>{rank.valueAdd}</Td>
                        <Td>{rank.total}</Td>
                      </Tr>
                    );
                  })
                }
            </Tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default DataTable;
