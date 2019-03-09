const faker = require('faker');

const generateWord = (userContext, events, done) => {
  const word = faker.random.word();
  userContext.vars.word = word;
  return done();
}

module.exports = {
  generateWord
  };