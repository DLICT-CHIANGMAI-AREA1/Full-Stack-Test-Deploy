// configs
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(router);

const listener = app.listen(PORT, () => {
    console.log("Server is running on port " + listener.address().port);
});
