const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/basicDashboard', function (err, client) {
  if (err) throw err

  var db = client.db('basicDashboard')

  db.collection('students').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})
