// Main routes stored in index.js
const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

// set route for homeRoutes
router.use("/", homeRoutes);

// set route for apiroutes
router.use("/api", apiRoutes);

module.exports = router;
