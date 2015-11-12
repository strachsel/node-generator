'use strict';

var BirdModel = require('../../models').Birds;

module.exports = {
  getAllBirds: getAllBirds,
  getBird: getBird,
  postBird: postBird,
  putBird: putBird,
  deleteBird: deleteBird
};


function getAllBirds(req, res) {
  res.send(BirdModel.getAllBirds())
}

function getBird(req, res) {
  var name = req.params.name;
  res.send(BirdModel.findBird(name));
}

function postBird(req, res) {
  var name = req.body.name,
      age  = req.body.age,
      type = req.body.type;

  res.send(BirdModel.createBird(name, type, age));
}

function putBird(req, res) {
  var name    = req.params.name,
      newName = req.body.name,
      newType = req.body.type,
      newAge  = req.body.age;

  res.send(BirdModel.updateBird(name, newName, newType, newAge));
}

function deleteBird(req, res) {
  console.log('Goo2');
  var name = req.params.name;

  res.send(BirdModel.deleteBird(name));
}