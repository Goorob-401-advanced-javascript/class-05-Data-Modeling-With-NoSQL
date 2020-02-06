'use strict';


require('@code-fellows/supergoose') ;
const Categories = require('../models/categories-model');
const Category = new Categories();

describe('Category Model' , ()=> {
  it('get data from database ', () => {
    let newCategory = {name : 'shoes' , prize : 78};
    return Category.create(newCategory)
      .then( data => {
        
        return Category.get(data._id)
          .then(data => {
            expect(newCategory.name).toEqual(data.name);
            expect(newCategory.prize).toEqual(data.prize);

          });
      });
  });
  it('ctear a  new data', () => {
    let newCategory = {name : 'shoes' , prize : 78};
    return Category.create(newCategory )
      .then( data => {
        
        Object.keys(newCategory).forEach(key => {
          expect(data[key]).toEqual(newCategory [key]);
        });
      });
  });




  it('update data into database ', () => {
    let obj = {name : 'shoes' , prize : 78};
    let newCategory = {name : 'shirts' , prize : 45};
    return Category.create(obj)
      .then( data => {
        
        return Category.update(data._id , newCategory)
          .then(data => {
            expect(newCategory.name).toEqual(data.name);
            expect(newCategory.prize).toEqual(data.prize);

          });
      });
  });

  it('delete data from database ', () => {
    let obj = {name : 'shoes' , prize : 78};
    return Category.create(obj)
      .then( data => {
        return Category.delete(data._id)
          .then(() => {
            return Category.get(data._id)
              .then(data => {
                expect(data).toEqual(null);
              });
          });
      });
  });







  
});