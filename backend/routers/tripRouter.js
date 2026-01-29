const express = require("express");
const tripController = require("../controllers/tripController");

const routes = express.Router();

routes.get("/", tripController.getFilterTrips);

module.exports = routes;
