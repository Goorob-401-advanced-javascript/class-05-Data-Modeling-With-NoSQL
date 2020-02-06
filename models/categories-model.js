'use strict';

const Model = require('./model.js');
const schema = require('./categories-schema.js') ;
class Catagories extends Model {
  constructor(){
    super(schema);
  }
}

module.exports = Catagories ;