// configs
const express = require("express");
const app = express();
const cors = require('cors')
const router = require("./routes");


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const listener = app.listen(5000, () => {
	console.log("Server is running on port " + listener.address().port);
});
