'use strict';

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'j5zwyy1n',
  dataset: 'eos'
})

module.exports.list = (event, context, callback) => {

  client
  .fetch(
    '*[_type == $type]', // Query
    {type: 'producer'} // Params (optional)
  )
  .then(res => {

    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({
        message: res,
        input: event,
      }),
    };

    callback(null, response);
  })
  .catch(err => {
    console.error('Oh no, error occured: ', err)

  })
};

module.exports.getSummary = (event, context, callback) => {
  //const tempId = '3ee50997-15aa-43fa-a0de-70aec91dbf36';
  client
  .fetch(
    '*[_type == "producer" && _id == $id]{ ..., "details": *[_type=="details" && references(^._id)]}',
    //'*[_type == "producer" && _id == $id]',
    {
    id: event.pathParameters.id // Params (optional)
    //id: tempId, // Local
    } // Params (optional)
  )
  .then(res => {
    console.log(res);
    console.log(' ********* ');
    const producerDetails = {
      name: res[0].name,
      website: res[0].website,
      logo: res[0].logo,
      address: res[0].address,
      voterDiversity: res[0].details[0].voterDiversity,
      disclosureAccessibility: res[0].details[0].disclosureAccessibility,
      structureLeadership: res[0].details[0].structureLeadership,
      valueAdd: res[0].details[0].valueAdd
    }
    console.log(producerDetails);
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({
        message: producerDetails,
        input: event,
      }),
    };

    callback(null, response);
  })
  .catch(err => {
    console.error('Oh no, error occured: ', err)

  })
};
