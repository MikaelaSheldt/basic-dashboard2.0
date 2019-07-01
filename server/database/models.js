'use strict'

const mongoose = require('mongoose')


//SCHEMAS
const Schema = mongoose.Schema

// const NoteSchema = new Schema({
//   author: String,
//   content: String,
//   createdAt: {
//     type: Date, default: Date.now
//   }
// })

const StudentSchema = new Schema({
  firstName: String,
  lastName: String,
  studentId: String,
  schoolName: String,
  schoolId: String,
  district: String,
  email: String,
  grade: Number,
  cohort: Number,
  attendancePercentage: Number,
  guidanceCounselor: String,
  guidanceCounselorEmail: String,
  homePhoneNumber: String,
  advisor: String,
  officialClass: String,
  totalCreditsEarned: Number,
  hasPassedRegents: Boolean,
  status: String,
  adminDate: String,
  notes: [Schema.Types.Mixed]
})

// MODELS
const Student = mongoose.model("Student", StudentSchema)



module.exports = Student
