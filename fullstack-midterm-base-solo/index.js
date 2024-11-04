const { Restaurants, Cuisines } = require("./utils/data");
const express = require('express');
const path = require('path');
const { generateRandomMenuItem, generateMenu, selectRandomCuisine, } = require("./utils/restaurantUtils");

const app = express();
let restaurantData = Restaurants.reduce((acc, restaurant) => {
  acc[restaurant.id] = restaurant;
  return acc;
}, {});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

/**
 * GET /
 * Renders the homepage that lists cities and restaurant names.
 */
app.get('/', (request, response) => {
  const randomMenuItem = generateRandomMenuItem(Restaurants); // Generate random menu item first

  response.render('index', {
    restaurants: Restaurants,
    randomMenuItem: randomMenuItem // Pass both restaurants and randomMenuItem
  });
});
  
  /**
   * GET /restaurant/:name
   * Displays a specific restaurant's random menu.
   * The cuisine is randomly selected and a menu is generated based on it.
   */
  app.get('/restaurant', (request, response) => {
    const restaurantId = request.query.restaurantId;
    console.log(`restaurantId: ${restaurantId}`);
  
  });

  //Add any other required routes here
  app.get('/alerts', (request, response) => { // alerts 
    response.render('alerts');
});

  app.get('/index', (request, response) => { // home page
    response.render('index');
});

  app.get('/restaurant', (request, response) => { // restaurant page
    response.render('restaurant');
  });

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
