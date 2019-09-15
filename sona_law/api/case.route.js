const express = require('express');
const caseRoutes = express.Router();

// require Case model in our routes module.
let Case = require('./case.model');

// defined store route
caseRoutes.route('/add').post(function (req, res) {
  let theCase = new Case(req.body);
  theCase.save()
    .then(theCase => {
      res.status(200).json({'case': 'case added successfully: ' + theCase });
    })
    .catch(err => {
      res.status(400).send("unable to save to database.");
    });
});

// defined get data (index or listing) route
caseRoutes.route('/').get(function (req, res) {
  Case.find( function(err, cases) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(cases);
    }
  });
});

// Defined edit route
caseRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Case.findById(id, function (err, theCase){
    res.json(theCase);
  });
});

// defined update route
caseRoutes.route('/update/:id').post(function (req, res) {
  Case.findById(req.params.id, function(err, theCase) {
    if (!theCase) {
      res.status(404).send("Data was not found.");
    } else {
      theCase.client_name = req.body.client_name;
      theCase.case_limitation_date = req.body.case_limitation_date;

      theCase.save().then(theCase => {
        res.json('Update complete.');
      })
      .catch(err => {
        res.status(400).send("Unable to update the database.");
      });
    }
  });
});

// defined delete route
caseRoutes.route('/delete/:id').get(function (req, res) {
  Case.findByIdAndRemove({ _id: req.params.id}, function(err, theCase) {
    if (err) {
      res.json(err);
    } else {
      res.json('successfully removed entry.');
    }
  });
});

module.exports = caseRoutes;
