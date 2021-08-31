const express = require("express");
const apiRoute = express.Router();

//student model
let courseModel = require("../models/Course.js");
let criteriaModel = require("../models/Criteria.js");

apiRoute.route("/get-criteria").get((req, res, next) => {
  criteriaModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data[0].criteria);
    }
  })
});


//get course data
apiRoute.route("/get-course").get((req, res, next) => {
  courseModel.find().distinct('course',(error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
});

apiRoute.route("/get-university").get((req, res, next) => {
  courseModel.find().distinct('university',(error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
});

//edit student data
apiRoute.route("/get-detail/:course").get((req, res, next) => {
  courseModel.find({'course':req.params.course}, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

apiRoute.route("/insert-course/").post((req, res, next) =>{
  courseModel.create(req.body.text,(error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
})

/*
//update student data
apiRoute.route("/update-student/:id").put((req, res, next) => {
  courseModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log("Student successfully update");
      }
    }
  );
});

//delete student data
apiRoute.route("/delete-student/:id").delete((req, res, next) => {
  courseModel.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
      console.log("Student successfully delete");
    }
  });
});
*/
module.exports = apiRoute;
