'use strict';


var listOfBirds = require('../../dal');

module.exports = {
  createBird: create,
  findBird: find,
  updateBird: update,
  deleteBird: del,
  getAllBirds: getAllBirds
};

function create(name, type, age) {
  return listOfBirds.push(new Bird(name, type, age));
}

function find(name) {
  return listOfBirds.filter(function(bird) {
    return bird.name === name;
  });
}

function update(name, newName, newType, newAge) {
  del(name);
  return create(newName, newType, newAge);
}

function del(name) {
  listOfBirds.map(function(bird, index) {
    if (bird.name === name) {
      listOfBirds.splice(index, 1)
    }
  });
}

function getAllBirds() {
  return listOfBirds;
}



function Bird(name, type, age) {
  this.name = name;
  this.type = type;
  this.age = age;
}