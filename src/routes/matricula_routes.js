const express = require("express");
const matricula_model = require("../models/matricula_model");
const matricula_routes_http = express.Router();

matricula_routes_http.post("/", (req, res) => {
    const new_tuition = matricula_model(req.body);
    new_tuition
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

matricula_routes_http.get("/", (req, res) => {
    matricula_model
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

matricula_routes_http.get("/:tuitionId", (req, res) => {
    const {tuitionId} = req.params;
    matricula_model
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

matricula_routes_http.put("/:tuitionId", (req, res) => {
    const {tuitionId} = req.params;
    const {name, id_code, university, tuition_number, subjet } = req.body;
    matricula_model
        .updateOne(
            {_id: tuitionId},
            { $set: { name, id_code, university, tuition_number, subjet }}
        )
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}));
});

matricula_routes_http.delete("/:tuitionId", (req, res) => {
    const {tuitionId} = req.params;
    matricula_model
        .deleteOne({ _id: tuitionId })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}));
});

matricula_routes_http.delete("/", (req, res) => {
    const query = { subjet: { $regex: "Electiva" }};
    matricula_model
        .deleteMany(query)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}));
});

module.exports = matricula_routes_http