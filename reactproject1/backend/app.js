const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const corsOptions = {
    origin: "http://localhost:5173"
}
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.status(201).json({ message: "Connected to backend!" });
})