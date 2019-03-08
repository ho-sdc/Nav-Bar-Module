const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/:keyword')
  .get(controller.get)
  // .post(controller.post)
  // .delete(controller.delete)
  // .put(controller.put)

  module.exports = router;