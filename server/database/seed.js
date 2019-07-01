'use strict'

const mongoose = require('mongoose')
const Student = require('./models')
const sortedStudents = require('./sortedStudents')

mongoose.connect('mongodb://localhost:27017/basicDashboard2', {useNewUrlParser: true});

const db = mongoose.connection
const handleError = (err) => {
  console.log(err);
}

async function seed() {
  await Student.insertMany(sortedStudents, (err) => {
    if (err) return handleError(err)
  })
  console.log("DATABSE SEEDED")
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

db.on("error", (err) => {
  console.error('CONNECTION ERROR:', err);
})

db.once("open", () => {
  console.log("DATABASE CONNECTION SUCCESS!!");
  runSeed()
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
