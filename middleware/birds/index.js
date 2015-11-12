'use strict';

module.exports = {
  verify: verify
};

function verify(req, res, next) {
  console.log(req.body);
  if (req.body.name && req.body.age && req.body.type) {
    next();
  } else {
    res.status(400).send('Not Enough Data');
  }
}