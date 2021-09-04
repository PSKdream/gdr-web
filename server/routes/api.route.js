const express = require("express");
const apiRoute = express.Router();

//model
let courseModel = require("../models/Course.js");
let criteriaModel = require("../models/Criteria.js");

//get all data
apiRoute.route("/get-course-data").get((req, res, next) => {
  courseModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
});

//get criteria distinct
apiRoute.route("/get-criteria").get((req, res, next) => {
  criteriaModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data[0].criteria);
    }
  })
});


//get course distinct
apiRoute.route("/get-course").get((req, res, next) => {
  courseModel.find().distinct('course',(error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
});

//get university distinct
apiRoute.route("/get-university").get((req, res, next) => {
  courseModel.find().distinct('university',(error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
});

//get by course
apiRoute.route("/get-detail/:course").get((req, res, next) => {
  courseModel.find({'course':req.params.course}, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//insert course
apiRoute.route("/insert-course/").post((req, res, next) =>{
  courseModel.create(req.body.text,(error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
})

//delete course data
apiRoute.route("/delete-course/:id").delete((req, res, next) => {
  courseModel.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
      //console.log("successfully delete");
    }
  });
});
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
});*/



module.exports = apiRoute;
