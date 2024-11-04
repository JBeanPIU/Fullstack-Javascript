// Program: Just a program for testing purposes
// By: Cameron Beanland
// Date: November 3rd, 2024

// Features of this .js file requires Jest!! 

const {Cuisines, Dishes} = require("../../utils/data");
const {generateRandomMenuItem, generateMenu, selectRandomCuisine} = require("../../utils/restaurantUtils");


/**--------------------------------------------------------------------------------------------------------------**/
//* RANDOM MENU ITEM TESTINGGGGGGG
describe('generateRandomMenuItem', () => {
  const Dishes = {
      'italian': [ // only using these five for testing purposes
          { name: 'Spaghetti Carbonara', description: 'Classic Roman pasta with eggs, cheese, pancetta, and pepper.', price: 15.99 },
          { name: 'Margherita Pizza', description: 'Simple pizza topped with tomato, mozzarella, and fresh basil.', price: 12.99 },
          { name: 'Lasagna', description: 'Layers of pasta with meat sauce, béchamel, and cheese.', price: 18.99, specialty: true },
          { name: 'Risotto', description: 'Creamy Arborio rice cooked with broth, flavored with saffron.', price: 17.99, specialty: true },
          { name: 'Tiramisu', description: 'Coffee-flavored dessert with layers of mascarpone and cocoa.', price: 6.99 },
      ]
  };

  it('should return random dish from provided menu', () => {
      const randomDish = generateRandomMenuItem(Dishes.italian);
      expect(Dishes.italian).toContainEqual(randomDish);
  });

  it('should return dish with correct properties', () => {
      const randomDish = generateRandomMenuItem(Dishes.italian);
      expect(randomDish).toHaveProperty('name');
      expect(randomDish).toHaveProperty('description');
      expect(randomDish).toHaveProperty('price');
  });

  it('should handle menu items with specialty property', () => {
      const randomDish = generateRandomMenuItem(Dishes.italian);
      if (randomDish.specialty) {
          expect(randomDish.specialty).toBe(true); // checks if it correctly identifies itself
      }
  });

  it('should return undefined for empty menu', () => {
      const emptyMenu = [];
      const menuItem = generateRandomMenuItem(emptyMenu);
      expect(menuItem).toBeUndefined(); // or whatever the expected behavior is
  });
});


/**--------------------------------------------------------------------------------------------------------------**/
//* GENERATE MENU TESTINGGGGGGGGGGGGG
describe('generateMenu', () => {
  const Dishes = {
      italian: [ // took two examples of the first three i seen, mostly to keep it simple
          { name: 'Spaghetti Carbonara', description: 'Classic Roman pasta with eggs, cheese, pancetta, and pepper.', price: 15.99 },
          { name: 'Margherita Pizza', description: 'Simple pizza topped with tomato, mozzarella, and fresh basil.', price: 12.99 },
      ],
      chinese: [
          { name: 'Sweet and Sour Pork', description: 'Pork cooked in a tangy sweet and sour sauce.', price: 12.99 },
          { name: 'Kung Pao Chicken', description: 'Spicy stir-fried chicken with peanuts and vegetables.', price: 13.99 },
      ],
      vegan: [
          { name: 'Chickpea Salad', description: 'Fresh salad with chickpeas, tomatoes, and cucumber.', price: 8.99 },
          { name: 'Vegan Tacos', description: 'Tacos filled with seasoned lentils and avocado.', price: 9.99 },
      ],
  };

  it('should generate menu for Italian cuisine type', () => {
      const menu = generateMenu('italian', Dishes);
      expect(menu).toBeInstanceOf(Array); 
      expect(menu.length).toBeGreaterThan(0); 
      menu.forEach(item => {
          expect(item).toHaveProperty('name');
          expect(item).toHaveProperty('description');
          expect(item).toHaveProperty('price');
      });
  });

  it('should generate a menu for the Chinese cuisine type', () => {
      const menu = generateMenu('chinese', Dishes);
      expect(menu).toBeInstanceOf(Array); 
      expect(menu.length).toBeGreaterThan(0); 
      menu.forEach(item => {
          expect(item).toHaveProperty('name');
          expect(item).toHaveProperty('description');
          expect(item).toHaveProperty('price');
      });
  });

  it('should generate a menu for the Vegan cuisine type', () => {
      const menu = generateMenu('vegan', Dishes);
      expect(menu).toBeInstanceOf(Array); 
      expect(menu.length).toBeGreaterThan(0); 
      menu.forEach(item => {
          expect(item).toHaveProperty('name');
          expect(item).toHaveProperty('description');
          expect(item).toHaveProperty('price');
      });
  });

  it('should return an empty array for an invalid cuisine type', () => {
      const menu = generateMenu('invalidCuisine', Dishes);
      expect(menu).toEqual([]); // expects empty array for invalid inputs
  });

  it('should handle empty dishes input gracefully', () => {
      const menu = generateMenu('italian', {}); 
      expect(menu).toEqual([]); 
  });
});


/**--------------------------------------------------------------------------------------------------------------**/
//* RANDOM CUISINE SELECTION TESTINGGGGGGGGGGGGGGGGGGGGGGGGGG
describe('selectRandomCuisine', () => {
  Cuisines.forEach(cuisine => {
      it(`should return between 5 to 10 random dishes from ${cuisine} cuisine`, () => {
          const randomDishes = selectRandomCuisine(cuisine);
          expect(randomDishes.length).toBeGreaterThanOrEqual(5);
          expect(randomDishes.length).toBeLessThanOrEqual(10);

          randomDishes.forEach(dish => {
              expect(Dishes[cuisine]).toContainEqual(dish);
          });
      });
  });

  it('should handle cases with fewer than 5 dishes gracefully', () => {
      const cuisine = 'chinese';
      const randomDishes = selectRandomCuisine(cuisine);
      expect(randomDishes.length).toBeLessThanOrEqual(2);
      randomDishes.forEach(dish => {
          expect(Dishes[cuisine]).toContainEqual(dish);
      });
  });
});
