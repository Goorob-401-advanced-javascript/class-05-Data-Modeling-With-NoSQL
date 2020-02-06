'use strict';
const mongoose = require('mongoose');
// const Products = require('./models/products-schema.js');

const MONGOOSE_URI = 'mongodb://localhost:27017/c';
mongoose.connect(MONGOOSE_URI ,{useNewUrlParser : true});

// const apple = new Food({ name: 'apple', type: 'FRUIT', calories: 500 });

// apple.save();
// const Food = require('./models/food-schema.js');