'use strict';
const mongoose = require('mongoose');

const products = mongoose.Schema({
  name : {type : String , required : true},
  prize :{ type : Number , required : true},
});

module.exports = mongoose.model('products' , products);