const express = require('express');
const mysql = require('mysql2/promise');
const router = express.Router();

// READ ALL
router.get('/', async (req, res, next) => {

  try{
    // create the connection to database
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'JollaRaptor11',
    database: 'frigerio2'
  });

  if(connection){
    console.log("connected");
  }else{
    console.log("not connected");
  }

  const [rows, fields] = await connection.execute('SELECT * FROM `anagfor`');

  return res.json(rows);
  }catch(error){
    console.log(error);
    return next()
  }
  
});

module.exports = router;