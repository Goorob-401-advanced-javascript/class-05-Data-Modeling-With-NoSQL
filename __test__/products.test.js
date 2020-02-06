'use strict';

require('@code-fellows/supergoose');

const Products = require('../models/products-model.js');
const products = new Products();

describe('Products Model', () => {
  it('get data from database ', () => {
    let newProduct = { name: 'shoes' , prize : 78};
    
    return products.create(newProduct)
      .then(record => {
        return products.get(record._id)
          .then(record => {
            Object.keys(newProduct).forEach(key => {
              expect(record[key]).toEqual(newProduct[key]);
            });
          });
      });
  });
  it('create a new data ', () => {
    let newProduct = { name: 'shoes' , prize : 78 };
    return products.create(newProduct)
      .then(record => {
        Object.keys(newProduct).forEach(key => {
          expect(record[key]).toEqual(newProduct[key]);
        });
      });
  });

  it('update data into database ', () => {
    let obj = {name : 'shoes' , prize : 78};
    let newProduct = {name : 'shirts' , prize : 45};
    return products.create(obj)
      .then( record => {
        return products.update(record._id , newProduct)
          .then(record => {
            expect(newProduct.name).toEqual(record.name);
            expect(newProduct.prize).toEqual(record.prize);
  
          });
      });
  });
  
  it('delete data from database ', () => {
    let obj = {name : 'shoes' , prize : 78};
    return products.create(obj)
      .then( record => {
        return products.delete(record._id)
          .then(() => {
            return products.get(record._id)
              .then(record => {
                expect(record).toEqual(null);
              });
          });
      });
  });
});