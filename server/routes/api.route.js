const express = require("express");
const apiRoute = express.Router();
const axios = require("axios");
const url = "https://pskdream.pythonanywhere.com/fahp";

//model
let courseModel = require("../models/Course.js");
let criteriaModel = require("../models/Criteria.js");
let logModel = require("../models/Model_log.js");
let codeModel = require("../models/Code.js");

apiRoute.route('/code').get((req, res, next) => {
  codeModel.find().distinct('code',(error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

apiRoute.route("/fahp").post(async (req, res, next) => {
  //console.log(req.body.text);
  try {
    let data = await axios.post(url,req.body.text);
    //console.log(data.data);
    res.json(data.data);
  } catch (error) {
    return next(error);
  }

  /* await axios
    .post(url, req.body.text)
    .then(function (result) {
      console.log("Logging result " + result);
      res.json(result);
    })
    .catch(function (error) {
      console.log("What happened? " + error);
      return next(error);
    });*/
});

//get all data
apiRoute.route("/get-course-data").get((req, res, next) => {
  courseModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//get criteria distinct
apiRoute.route("/get-criteria").get((req, res, next) => {
  criteriaModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data[0].criteria);
    }
  });
});

//get course distinct
apiRoute.route("/get-course").get((req, res, next) => {
  courseModel.find().distinct("course", (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//get university distinct
apiRoute.route("/get-university").get((req, res, next) => {
  courseModel.find().distinct("university", (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//get by course
apiRoute.route("/get-detail/:course").get((req, res, next) => {
  courseModel.find({ course: req.params.course }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//insert course
apiRoute.route("/insert-course/").post((req, res, next) => {
  //console.log(req.body.text)
  courseModel.create(req.body.text, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

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

//insert model
apiRoute.route("/insert-model-log/").post((req, res, next) => {
  //console.log(req.body.text)
  logModel.create(req.body.text, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
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
