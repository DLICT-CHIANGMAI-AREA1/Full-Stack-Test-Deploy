const mongoose = require("../config/database");
const Schema = mongoose.Schema
const Data = require("../src/data.json");

const pdf = new Schema({
    name:String
})

const PDF = mongoose.model("pdfs", pdf)

const saveData = async () => {
	if (0 == (await PDF.find())) await PDF.insertMany(Data);
	
};
saveData();

module.exports = PDF