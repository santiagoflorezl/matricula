const express = require("express");
const matricula_routes_access = require("./matricula_routes");
const routes = express.Router();

const app_routes_system = (app) => {
    /* http://localhoste:5000/api/v1 */
    app.use("/api/v1", routes);
    /* http://localhost:5000/api/v1/users */
    routes.use("/factura_mercadolibre", matricula_routes_access);
};

module.exports = app_routes_system;