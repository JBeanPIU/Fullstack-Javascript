// Program: restaurantUtils.js, used to setup various functions for use of the restaurant service
// By: Cameron Beanland
// Date: November 3rd, 2024

const {Dishes} = require("./data");

/**--------------------------------------------------------------------------------------------------------------
 * RANDOM MENU ITEM FUNCTION 🔥🔥🔥
 * Generates a random menu item based on a given cuisine.
 * @param {string} cuisine - The desired cuisine for the menu item.
 * @returns {*} A random menu item with a name, description, price, and special status.
 */
function generateRandomMenuItem(cuisine) {
  const cuisineDishes = Dishes[cuisine];
  if (!cuisineDishes) {
    throw new Error('Cuisine lost in the sauce');
  }
  const randomIndex = Math.floor(Math.random() * cuisineDishes.length);
  return cuisineDishes[randomIndex]; 
}

/**--------------------------------------------------------------------------------------------------------------
 * RANDOM CUISINE SELECTION FUNCTION 🔥🔥🔥
 * Selects a random cuisine type for a restaurant.
 * @returns {*} A random cuisine type.
 */
function selectRandomCuisine() {
  const cuisines = Object.keys(Dishes);
  const randomIndex = Math.floor(Math.random() * cuisines.length);
  return cuisines[randomIndex];
}

/**--------------------------------------------------------------------------------------------------------------
 * GENERATE MENU FUNCTION 🔥🔥🔥
 * Generates a menu for a restaurant, including a random cuisine type and a list of menu items.
 * @returns {*} An object representing the restaurant's menu, including the cuisine type and items.
 */
function generateMenu() {
  // starts off with a random cuisine type
  const cuisine = selectRandomCuisine();

  // creates list with 5-10 menu items for user to select
  const lavishItems = Math.floor(Math.random() * 6) + 5; // rng that decides between 5 and 10 menu options
  const menuOptions = [];

  for (let i = 0; i < lavishItems; i++) {
    menuOptions.push(generateRandomMenuItem(cuisine));
  }

  // returns completed menu
  return {
    cuisine,
    items: menuOptions
  };
}

/**--------------------------------------------------------------------------------------------------------------
 * Additional utility functions can be defined here if needed.
 */

module.exports = {generateRandomMenuItem, selectRandomCuisine, generateMenu};
