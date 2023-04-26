const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
// const diagFile = require('../db/diagnostics.json');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  readFromFile('/Users/evan/Documents/UCB-Code-Bootcamp/unit-11_miniproject/db/diagnostics.json', 'utf8', (err,data)=>{
    if (err){
      console.error(err)
    } else{
      res.json(data)
    }
  })
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  let data = {};
  data.time = Date.now();
  data.error_id = uuidv4();
  data.errors = req.body;
  console.log(data);
  readAndAppend(data, '/Users/evan/Documents/UCB-Code-Bootcamp/unit-11_miniproject/db/diagnostics.json');

  let response = {
    status: 'success',
    body: data
  }
  res.status(201).json(response);
});

module.exports = diagnostics;
