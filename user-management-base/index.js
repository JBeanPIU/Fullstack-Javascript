// BASE REPOSITORY (AS SHOWN IN PACKAGE.JSON) BY MATTHEW ENGLISH
// Project: User Management System - building a ums using Express and EJS
// By: Cameron Beanland
// Date: Nov. 29th, 2024

const express = require("express");
const path = require("path");
const session = require("express-session");
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;
const SALT_ROUNDS = 10;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
    session({
        secret: "replace_this_with_a_secure_key",
        resave: false,
        saveUninitialized: true,
    })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const USERS = [
    {
        id: 1,
        username: "AdminUser",
        email: "admin@example.com",
        password: bcrypt.hashSync("admin123", SALT_ROUNDS), //In a database, you'd just store the hashes, but for 
                                                            // our purposes we'll hash these existing users when the 
                                                            // app loads
        role: "admin",
    },
    {
        id: 2,
        username: "RegularUser",
        email: "user@example.com",
        password: bcrypt.hashSync("user123", SALT_ROUNDS),
        role: "user", // Regular user
    },
    {
        id: 3,
        username: "IceCold",
        email: "ichowler@example.com",
        password: bcrypt.hashSync("ich123", SALT_ROUNDS),
        role: "user" // Regular user
    },
    {
        id: 4,
        username: "JBean",
        email: "the_j@example.com",
        password: bcrypt.hashSync("jbean123", SALT_ROUNDS),
        role: "user" // Regular user
    }
];

// FUNCTIONS
let failedLogins = {}; // Initializing failedLogins here

const isAdmin = (request, response, next) => {
    if (request.session.user && request.session.user.role === 'admin') {
        return next();
    } else {
        return response.status(403).send('Access denied: Admins only');
    }
};

const isUser = (request, response, next) => {
    if (request.session.user && request.session.user.role === 'user') {
        return next();
    } else {
        return response.status(403).send('Access denied: Users only');
    }
};


// GET /login - Render login form
app.get("/login", (request, response) => {
    response.render("login", { error: null });
});

app.post("/login", (request, response) => {
    const { email, password } = request.body;
    const user = USERS.find(u => u.email === email);
    const ip = request.ip;

    failedLogins[ip] = failedLogins[ip] || { attempts: 0, timestamp: null };
    const { attempts, timestamp } = failedLogins[ip];
    const now = Date.now();

    if (attempts >= 3 && now - timestamp < 10 * 60 * 1000) { 
        const remainingTime = ((timestamp + 10 * 60 * 1000) - now) / 1000;
        return response.status(429).render("login", { error: `You have been locked out temporarily. Please check back in ${Math.ceil(remainingTime)} seconds.` });
    }

    if (!user || !bcrypt.compareSync(password, user.password)) {
        failedLogins[ip].attempts++;
        failedLogins[ip].timestamp = now;
        return response.status(401).render("login", { error: 'Invalid email or password' });
    }

    failedLogins[ip] = { attempts: 0, timestamp: null };
    request.session.user = user;
    return response.redirect('/landing');
});


// POST /login - Allows a user to login
app.post("/login", (request, response) => {
    const { email, password } = request.body;
    const user = USERS.find(u => u.email === email);
    const ip = request.ip;
    
    failedLogins[ip] = failedLogins[ip] || { attempts: 0, timestamp: null };
    const { attempts, timestamp } = failedLogins[ip];
    const now = Date.now();

    if (attempts >= 3 && now - timestamp < 10 * 60 * 1000) { // lord have mercy on the poor souls who get it wrong three times in a row
        const remainingTime = ((timestamp + 10 * 60 * 1000) - now) / 1000;
        return response.status(429).render("login", { error: `You have been locked out temporarily. Please check back in ${Math.ceil(remainingTime)} seconds.` });
    }

    if (!user || !bcrypt.compareSync(password, user.password)) {
        failedLogins[ip].attempts++;
        failedLogins[ip].timestamp = now;
        return response.status(401).render("login", { error: 'Invalid email or password' });  // basic error message, kept ambiguous so it's harder to figure out
    }

    failedLogins[ip] = { attempts: 0, timestamp: null };
    request.session.user = user;
    return response.redirect('/landing');
});

app.get("/login", (request, response) => {
    response.render("login", { error: null });
});


// GET /signup - Render signup form
app.get("/signup", (request, response) => {
    response.render("signup");
});

// POST /signup - Allows a user to signup
app.post("/signup", (request, response) => {
    
});

// GET / - Render index page or redirect to landing if logged in
app.get("/", (request, response) => {
    if (request.session.user) {
        return response.redirect("/landing");
    }
    response.render("index");
});

// GET /landing - Shows a welcome page for users, shows the names of all users if an admin
app.get("/landing", (request, response) => {
    if (!request.session.user) {
        return response.redirect("/");
    }
    
    if (request.session.user.role === 'admin') {
        return response.redirect("/admin");
    } else if (request.session.user.role === 'user') {
        return response.redirect("/user");
    }
});

app.get("/admin", isAdmin, (request, response) => {
    response.render("admin", { users: USERS });
});

app.get("/user", isUser, (request, response) => {
    response.render("user", { user: request.session.user });
});


// GET /logout - A custom route made by me to reroute users back to the initial index.ejs page upon logging out
app.post("/logout", (request, response) => {
    request.session.destroy((err) => {  
        if (err) { return response.status(500).send("Failed to log out"); 
        } response.redirect("/"); }); });

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
