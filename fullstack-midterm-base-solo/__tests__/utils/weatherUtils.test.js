// Program: Just a program for testing purposes
// By: Cameron Beanland
// Date: November 3rd, 2024

const {Cuisines, Dishes} = require("../../utils/data");
const {generateRandomMenuItem, generateMenu, selectRandomCuisine} = require("../../utils/restaurantUtils");

describe('Restaurant Functions', () => {
    describe('generateRandomMenuItem', () => {
      test('if this was done right, it should generate a random menu item with Italian food', () => {
        const cuisine = 'Italian'; // chose this because i love italian food
        const menuItem = generateRandomMenuItem(cuisine);

        // checks to verify that menu item has required attributes
        expect(menuItem).toHaveProperty('name');
        expect(menuItem).toHaveProperty('description');
      })
    });

    describe('generateMenu', () => {
      // Test implementations go here
    });

    describe('selectRandomCuisine', () => {
      // Test implementations go here
    });
});
