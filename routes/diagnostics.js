const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  readFromFile('../db/diagnostics.json', (err,data)=>{
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
  let data = req.body;
  data.error_id = v4();
  readAndAppend(data, '../db/diagnostics.json');
});

module.exports = diagnostics;
