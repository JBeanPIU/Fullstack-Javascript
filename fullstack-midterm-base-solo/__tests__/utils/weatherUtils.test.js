// Program: Just a program for testing purposes
// By: Cameron Beanland
// Date: November 3rd, 2024


const {Cuisines, Dishes} = require("../../utils/data");
const {generateRandomMenuItem, generateMenu, selectRandomCuisine} = require("../../utils/restaurantUtils");


/**--------------------------------------------------------------------------------------------------------------**/
//* RANDOM MENU ITEM TESTINGGGGGGG
describe('Restaurant Functions', () => {
  describe('generateRandomMenuItem', () => { // 1st test
    test('should generate a random menu item with Italian food', () => {
      const cuisine = 'Italian'; // chose this because I love Italian food
      const menuItem = generateRandomMenuItem(cuisine);

      // checks to verify that menu item has required attributes
      expect(menuItem).toHaveProperty('name');
      expect(menuItem).toHaveProperty('description');
    });

    test('should select a random cuisine type from data.js', () => { // 2nd test
      const cuisine = selectRandomCuisine(); 
      
      // verifies that selected cuisine comes from data.js
      expect(Object.keys(Dishes)).toContain(cuisine);
    });

    test('should throw an error for invalid cuisine', () => { // 3rd test
      expect(() => generateRandomMenuItem('FakeCuisine')).toThrow('Cuisine lost in the sauce');
    });
  });



/**--------------------------------------------------------------------------------------------------------------**/
//* GENERATE MENU TESTINGGGGGGGGGGGGG
    describe('generateMenu', () => {
      // Test implementations go here
    });


/**--------------------------------------------------------------------------------------------------------------**/
//* RANDOM CUISINE SELECTION TESTINGGGGGGGGGGGGGGGGGGGGGGGGGG
    describe('selectRandomCuisine', () => {
      // Test implementations go here
    });
});
