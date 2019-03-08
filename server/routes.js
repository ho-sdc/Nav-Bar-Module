const router = require('express').Router();
const controller = require('./controller.js');

router
  .get('/search/:keyword', controller.get)
  // .post(controller.post)
  // .delete(controller.delete)
  // .put(controller.put)

  module.exports = router;