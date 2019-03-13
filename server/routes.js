const router = require('express').Router();
const path = require('path');
const controller = require('./controller.js');

router
  .get('/search', controller.get)
  .get('/loaderio-69bebea9d65d4b51d5b2167c2a11b200/', (req, res) => {
    res.sendFile(path.join(__dirname, 'loaderio-69bebea9d65d4b51d5b2167c2a11b200.txt'));
  })
  // .post(controller.post)
  // .delete(controller.delete)
  // .put(controller.put)

  module.exports = router;