// Program: restaurantUtils.js, used to setup various functions for use of the restaurant service
// By: Cameron Beanland
// Date: November 3rd, 2024

const { Dishes } = require("./data");

/**--------------------------------------------------------------------------------------------------------------
 * RANDOM MENU ITEM FUNCTION 🔥🔥🔥
 * Generates a random menu item based on a given cuisine.
 * @param {string} cuisine - The desired cuisine for the menu item.
 * @returns {*} A random menu item with a name, description, price, and special status.
 */
function generateRandomMenuItem(cuisine) {
    // filter dishes by cuisine
    const filteredDishes = Dishes.filter(dish => dish.cuisine === cuisine);

    // check if available
    if (filteredDishes.length === 0) {
        return null; // or handle the case where no dishes are found
    }

    const randomIndex = Math.floor(Math.random() * filteredDishes.length);
    
    const randomDish = filteredDishes[randomIndex];

    return {
        name: randomDish.name,
        description: randomDish.description,
        price: randomDish.price,
        special: randomDish.special || false // defaults to false if specialty status is missing
    };
}

/**--------------------------------------------------------------------------------------------------------------
 * RANDOM CUISINE SELECTION FUNCTION 🔥🔥🔥
 * Selects a random cuisine type for a restaurant.
 * @returns {*} A random cuisine type.
 */
function selectRandomCuisine() {
    const cuisines = ['italian', 'indian', 'chinese', 'vegan', 'mexican']; // small function lol
    const randomIndex = Math.floor(Math.random() * cuisines.length);
    return cuisines[randomIndex];
}

/**--------------------------------------------------------------------------------------------------------------
 * GENERATE MENU FUNCTION 🔥🔥🔥
 * Generates a menu for a restaurant, including a random cuisine type and a list of menu items.
 * @returns {*} An object representing the restaurant's menu, including the cuisine type and items.
 */
function generateMenu() {
    // select a random cuisine type
    const selectedCuisine = selectRandomCuisine();

    const itemCount = Math.floor(Math.random() * 6) + 5; // chooses between 5-10
    const menuItems = [];

    // generate random menu items for selected cuisine
    for (let i = 0; i < itemCount; i++) {
        const randomMenuItem = generateRandomMenuItem(selectedCuisine);
        if (randomMenuItem) { // ensure if new item is valid
            menuItems.push({
                ...randomMenuItem,
                isSpecial: Math.random() < 0.5, // 50% chance to be special
            });
        }
    }

    // Return menu
    return {
        cuisine: selectedCuisine,
        menuItems,
    };
}

/**--------------------------------------------------------------------------------------------------------------
 * Additional utility functions can be defined here if needed.
 */

module.exports = { generateRandomMenuItem, selectRandomCuisine, generateMenu };

