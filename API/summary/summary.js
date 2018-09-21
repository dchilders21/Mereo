'use strict';

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'j5zwyy1n',
  dataset: 'eos'
})

module.exports.getPage = (event, context, callback) => {
  const page = event.pathParameters.page;
  client
  .fetch(
    '*[_type == $type]', // Query
    {
    type: page // Params (optional)
    }
  )
  .then(res => {
    console.log(res);
    const content = {
      page: res[0][page]
    }
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({
        message: content,
        input: event,
      }),
    };

    callback(null, response);
  })
  .catch(err => {
    console.error('Oh no, error occured: ', err)

  })
};

module.exports.getShort = (event, context, callback) => {

  client
  .fetch(
    '*[_type == $type]', // Query
    {type: 'about'} // Params (optional)
  )
  .then(res => {
    const short = {
      page: res[0].short
    }
    //console.log(short);
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({
        message: short,
        input: event,
      }),
    };

    callback(null, response);
  })
  .catch(err => {
    console.error('Oh no, error occured: ', err)

  })
};
