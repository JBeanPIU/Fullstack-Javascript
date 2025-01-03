const Restaurants = [
    {
        name: 'The Gourmet Bistro',
        id: 'the-gourmet-bistro',
    },
    {
        name: 'Spicy Kitchen',
        id: 'spicy-kitchen',
    },
    {
        name: 'Healthy Eats',
        id: 'healthy-eats',
    },
    {
        name: 'Comfort Diner',
        id: 'comfort-diner',
    },
    {
        name: 'Sweet Tooth Bakery',
        id: 'sweet-tooth-bakery',
    },
];

const Cuisines = [
    'italian',
    'indian',
    'chinese',
    'vegan',
    'mexican',
];

// Dishes generated courtesy of ChatGPT, I have absolutely no idea if these are real dishes, or if the descriptions are correct.
// ChatGPT comes in clutch again (added prices and specialty: true to each item)
const Dishes = {
    'italian': [
        { name: 'Spaghetti Carbonara', description: 'Classic Roman pasta with eggs, cheese, pancetta, and pepper.', price: 15.99 },
        { name: 'Margherita Pizza', description: 'Simple pizza topped with tomato, mozzarella, and fresh basil.', price: 12.99 },
        { name: 'Lasagna', description: 'Layers of pasta with meat sauce, béchamel, and cheese.', price: 18.99, specialty: true },
        { name: 'Risotto', description: 'Creamy Arborio rice cooked with broth, flavored with saffron.', price: 17.99, specialty: true },
        { name: 'Tiramisu', description: 'Coffee-flavored dessert with layers of mascarpone and cocoa.', price: 6.99 },
        { name: 'Penne Arrabbiata', description: 'Pasta in a spicy tomato sauce with garlic and chili.', price: 14.99 },
        { name: 'Fettuccine Alfredo', description: 'Creamy pasta dish with butter and Parmesan cheese.', price: 16.99 },
        { name: 'Bruschetta', description: 'Toasted bread topped with diced tomatoes, garlic, and basil.', price: 8.99 },
        { name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic.', price: 9.99 },
        { name: 'Gnocchi', description: 'Soft potato dumplings served with various sauces.', price: 15.49 },
        { name: 'Pesto Pasta', description: 'Pasta tossed with basil pesto, garlic, and pine nuts.', price: 14.49 },
        { name: 'Osso Buco', description: 'Braised veal shanks cooked with vegetables and broth.', price: 22.99, specialty: true },
        { name: 'Ribollita', description: 'Tuscan soup made with bread, beans, and vegetables.', price: 10.99 },
        { name: 'Bolognese Sauce', description: 'Rich meat sauce made with ground beef, tomatoes, and herbs.', price: 13.99 },
        { name: 'Arancini', description: 'Fried rice balls filled with cheese or meat.', price: 7.99 },
        { name: 'Panna Cotta', description: 'Creamy dessert made with sweetened cream thickened with gelatin.', price: 5.99 },
        { name: 'Saltimbocca', description: 'Veal wrapped in prosciutto and sage, cooked in white wine.', price: 21.99, specialty: true },
        { name: 'Focaccia', description: 'Flat oven-baked bread topped with herbs and olive oil.', price: 6.49 },
        { name: 'Cioppino', description: 'Seafood stew made with fish, shellfish, and tomato broth.', price: 24.99, specialty: true },
        { name: 'Cacciucco', description: 'Tuscan fish stew with various seafood and bread.', price: 23.99, specialty: true },
      ],
      'chinese': [
        { name: 'Sweet and Sour Pork', description: 'Pork cooked in a tangy sweet and sour sauce.', price: 12.99 },
        { name: 'Kung Pao Chicken', description: 'Spicy stir-fried chicken with peanuts and vegetables.', price: 13.99 },
        { name: 'Spring Rolls', description: 'Crispy rolls filled with vegetables and sometimes meat.', price: 6.99 },
        { name: 'Peking Duck', description: 'Crispy-skinned duck served with pancakes and hoisin sauce.', price: 29.99, specialty: true },
        { name: 'Mapo Tofu', description: 'Spicy tofu dish with minced meat and chili bean paste.', price: 11.49 },
        { name: 'Chow Mein', description: 'Stir-fried noodles with vegetables and meat or tofu.', price: 10.99 },
        { name: 'Dumplings', description: 'Stuffed dough pockets, steamed or fried, often filled with meat or vegetables.', price: 8.99 },
        { name: 'Hot Pot', description: 'Dish where ingredients are cooked in a simmering pot of broth at the table.', price: 25.99, specialty: true },
        { name: 'Fried Rice', description: 'Stir-fried rice with vegetables, eggs, and choice of meat.', price: 9.99 },
        { name: 'Egg Foo Young', description: 'Omelet filled with vegetables and meat, served with gravy.', price: 10.49 },
        { name: 'Char Siu', description: 'Cantonese roasted pork with a sweet and savory glaze.', price: 14.99 },
        { name: 'Wonton Soup', description: 'Soup with wontons filled with meat or shrimp.', price: 7.99 },
        { name: 'Ma Po Tofu', description: 'Tofu in a spicy sauce with minced meat and scallions.', price: 11.49 },
        { name: 'Szechuan Pepper Chicken', description: 'Spicy chicken stir-fried with Szechuan peppercorns.', price: 13.49 },
        { name: 'Beef and Broccoli', description: 'Stir-fried beef with broccoli in a savory sauce.', price: 14.49 },
        { name: 'Sesame Chicken', description: 'Fried chicken in a sweet sesame sauce.', price: 13.99 },
        { name: 'Mongolian Beef', description: 'Beef stir-fried with green onions and soy sauce.', price: 14.99 },
        { name: 'Chili Garlic Shrimp', description: 'Shrimp cooked with garlic and chili sauce.', price: 15.99 },
        { name: 'Buddha Bowl', description: 'Healthy bowl with grains, vegetables, and proteins.', price: 9.99 },
      ],
      'vegan': [
        { name: 'Chickpea Salad', description: 'Fresh salad with chickpeas, tomatoes, and cucumber.', price: 8.99 },
        { name: 'Vegan Tacos', description: 'Tacos filled with seasoned lentils and avocado.', price: 9.99 },
        { name: 'Quinoa Bowl', description: 'Healthy bowl with quinoa, veggies, and tahini dressing.', price: 10.99 },
        { name: 'Cauliflower Wings', description: 'Spicy baked cauliflower florets served with dipping sauce.', price: 7.99 },
        { name: 'Vegan Burger', description: 'Plant-based burger served with lettuce and tomato.', price: 12.49 },
        { name: 'Lentil Soup', description: 'Hearty soup made with lentils, vegetables, and spices.', price: 8.49 },
        { name: 'Stuffed Bell Peppers', description: 'Bell peppers filled with quinoa, beans, and vegetables.', price: 11.99 },
        { name: 'Zucchini Noodles', description: 'Spiralized zucchini tossed with marinara sauce.', price: 9.49 },
        { name: 'Falafel Wrap', description: 'Falafel balls wrapped in pita with lettuce and tahini sauce.', price: 10.99 },
        { name: 'Vegan Pad Thai', description: 'Stir-fried rice noodles with vegetables and peanuts.', price: 11.49 },
        { name: 'Avocado Toast', description: 'Toasted bread topped with smashed avocado and seasonings.', price: 8.49 },
        { name: 'Coconut Curry', description: 'Creamy curry made with coconut milk and vegetables.', price: 12.99, specialty: true },
        { name: 'Vegan Mac and Cheese', description: 'Creamy pasta dish made with cashew cheese.', price: 10.99 },
        { name: 'Chia Seed Pudding', description: 'Pudding made with chia seeds and almond milk.', price: 5.99 },
        { name: 'Roasted Veggie Bowl', description: 'Bowl with roasted seasonal vegetables and grains.', price: 9.99 },
        { name: 'Banana Pancakes', description: 'Fluffy pancakes made with ripe bananas and oats.', price: 7.99 },
        { name: 'Peanut Butter Banana Smoothie', description: 'Smoothie made with banana and peanut butter.', price: 6.49 },
        { name: 'Tofu Stir-fry', description: 'Stir-fried tofu with vegetables and soy sauce.', price: 10.49 },
        { name: 'Ratatouille', description: 'Stewed vegetable dish with zucchini, eggplant, and tomato.', price: 11.99, specialty: true },
      ],
      'mexican': [
        { name: 'Tacos al Pastor', description: 'Tacos filled with marinated pork and pineapple.', price: 11.99 },
        { name: 'Guacamole', description: 'Creamy avocado dip served with tortilla chips.', price: 6.99 },
        { name: 'Chiles en Nogada', description: 'Stuffed peppers topped with walnut sauce.', price: 14.99, specialty: true },
        { name: 'Mole Poblano', description: 'Traditional sauce made with chocolate and spices, served with chicken.', price: 16.99, specialty: true },
        { name: 'Enchiladas', description: 'Rolled tortillas filled with meat or cheese and covered in sauce.', price: 12.49 },
        { name: 'Tamales', description: 'Corn dough filled with meat or vegetables and wrapped in corn husks.', price: 9.99 },
        { name: 'Sopes', description: 'Thick tortillas topped with beans, meat, and salsa.', price: 10.49 },
        { name: 'Quesadillas', description: 'Flour tortillas filled with cheese and grilled.', price: 8.99 },
        { name: 'Elote', description: 'Grilled corn on the cob topped with cheese and spices.', price: 5.99 },
        { name: 'Ceviche', description: 'Fresh seafood cured in citrus juice with vegetables.', price: 13.99, specialty: true },
        { name: 'Fajitas', description: 'Grilled meat served with tortillas and toppings.', price: 14.49 },
        { name: 'Chimichangas', description: 'Fried burritos filled with meat and cheese.', price: 12.99 },
        { name: 'Pozole', description: 'Traditional soup made with hominy and meat.', price: 10.99 },
        { name: 'Carnitas', description: 'Slow-cooked pork served with tortillas.', price: 11.49 },
        { name: 'Pico de Gallo', description: 'Fresh salsa made with tomatoes, onions, and cilantro.', price: 4.99 },
        { name: 'Salsa Verde', description: 'Green salsa made with tomatillos and cilantro.', price: 4.49 },
        { name: 'Tres Leches Cake', description: 'Moist cake soaked in three types of milk.', price: 6.49 },
        { name: 'Churros', description: 'Fried dough pastries rolled in sugar and cinnamon.', price: 5.99 },
        { name: 'Flan', description: 'Creamy caramel custard dessert.', price: 5.49 },
      ],
      'indian': [
        { name: 'Pani Puri', description: 'Crispy puris filled with spiced water, tamarind chutney, and potatoes.', price: 4.99 },
        { name: 'Masala Dosa', description: 'Thin rice crepe filled with spiced potato filling, served with chutney and sambar.', price: 8.49 },
        { name: 'Idli', description: 'Steamed rice cakes often served with sambar and coconut chutney.', price: 5.99 },
        { name: 'Vada', description: 'Savory doughnuts made from fermented lentils, often served with sambar.', price: 3.99 },
        { name: 'Bhindi Masala', description: 'Stir-fried okra cooked with onions, tomatoes, and spices.', price: 7.49 },
        { name: 'Rajma', description: 'Red kidney beans cooked in a spiced tomato gravy.', price: 6.99, specialty: true },
        { name: 'Kofta Curry', description: 'Spiced meat or vegetable balls served in a rich curry.', price: 9.49, specialty: true },
        { name: 'Fish Curry', description: 'Tangy and spicy curry made with fresh fish and coconut milk.', price: 10.99 },
        { name: 'Aloo Paratha', description: 'Stuffed flatbread filled with spiced mashed potatoes, served with yogurt or pickle.', price: 6.49 },
        { name: 'Baingan Bharta', description: 'Roasted eggplant mashed and cooked with onions, tomatoes, and spices.', price: 7.99 },
        { name: 'Paneer Butter Masala', description: 'Paneer cubes cooked in a creamy tomato sauce.', price: 11.49, specialty: true },
        { name: 'Pesarattu', description: 'Green gram (moong dal) crepes served with ginger chutney.', price: 6.99 },
        { name: 'Chicken Chettinad', description: 'Fiery chicken curry made with a variety of spices from the Chettinad region.', price: 12.99, specialty: true },
        { name: 'Gajar Ka Halwa', description: 'Sweet carrot pudding cooked with milk, ghee, and sugar.', price: 4.99 },
        { name: 'Pappadum', description: 'Thin, crispy wafers made from lentil flour, often served as an accompaniment to meals.', price: 2.99 },
        { name: 'Keema', description: 'Minced meat curry, often made with lamb or goat, cooked with peas and spices.', price: 9.99 },
        { name: 'Pulao', description: 'Fragrant rice dish cooked with vegetables, meat, and spices.', price: 7.49 },
        { name: 'Methi Thepla', description: 'Flatbread made with fenugreek leaves and spices, popular in Gujarat.', price: 5.49 },
        { name: 'Sev Puri', description: 'Crispy puris topped with diced potatoes, onions, chutneys, and sev (crunchy noodles).', price: 6.49 },
        { name: 'Rasgulla', description: 'Soft, spongy cheese balls soaked in sugar syrup, a popular Bengali dessert.', price: 3.49 },
    ],
};

module.exports = {
    Cuisines,
    Dishes,
    Restaurants,
}
