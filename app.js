// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

//Required route artesania
const artesaniaRouter = require('./routes/artesania.routes'); // <== has to be added
app.use('/api/artesania', artesaniaRouter); // <== has to be added

//Required route product
const productosBaseRouter = require('./routes/productosbase.routes')
app.use("/api", productosBaseRouter);

//Required to routes comments
const commentsRouter = require('./routes/comments.routes');   
app.use('/api', commentsRouter);  

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);


 


module.exports = app;
