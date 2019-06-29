'use strict'

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/basicDashboard")

const db = mongoose.connection

db.on("error", (err) => {
  console.error('CONNECTION ERROR:', err);
})

db.once("open", () => {
  console.log("DATABASE CONNECTION SUCCESS!!");
  // all database communication goes here

  db.close()
})




// ------ databse set up without mongoose ----------

// const MongoClient = require('mongodb').MongoClient
//
// MongoClient.connect('mongodb://localhost:27017/basicDashboard', function (err, client) {
//   if (err) throw err
//
//   var db = client.db('basicDashboard')
//
//   db.collection('students').find().toArray(function (err, result) {
//     if (err) throw err
//
//     console.log(result)
//   })
// })
