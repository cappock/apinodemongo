const express = require("express");
const app = express();
const studentsRoutes = express.Router();
// Require Business model in our routes module
const Student = require("../models/Student");

// Defined store route
studentsRoutes.route("/add").post(function (req, res) {
  let student = new Student(req.body);
  student
    .save()
    .then((student) => {
      res.status(200).json({ student: "student in added successfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
studentsRoutes.route("/").get(function (req, res) {
  Student.find(function (err, students) {
    if (err) {
      console.log(err);
    } else {
      res.json(students);
    }
  });
});
// Defined edit route
studentsRoutes.route("/edit/:id").get(function (req, res) {
  let id = req.params.id;
  Student.findById(id, function (err, student) {
    res.json(students);
  });
});
// Defined update route
studentsRoutes.route("/update/:id").post(function (req, res) {
  Student.findById(req.params.id, function (err, next, student) {
    if (!student) return next(new Error("Could not load Document"));
    else {
      student.name = req.body.name;
      student.id = req.body.id;
      student.grades = req.body.grades;
      student
        .save()
        .then((student) => {
          res.json("Update complete");
        })
        .catch((err) => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});
// Defined delete | remove | destroy route
studentsRoutes.route("/delete/:id").get(function (req, res) {
    Student.findByIdAndRemove({ _id: req.params.id }, function (err, student) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});
module.exports = studentsRoutes;
