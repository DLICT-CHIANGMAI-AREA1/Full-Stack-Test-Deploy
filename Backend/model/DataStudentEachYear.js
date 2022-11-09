const mongoose = require("../config/database");
const Schema = mongoose.Schema
const data = require("../model/data.json")

const DataStudent_Each_Year = new Schema({
    name_year:String,
    data:[{
        name:String,
        url:String,
    }],
})

const DataStudent = mongoose.model(" DataStudent_Each_Years",  DataStudent_Each_Year)

const SaveDataStudent = async () => {
	if (0 == (await DataStudent.find())) await DataStudent.insertMany(data);
   
};
SaveDataStudent();

module.exports = DataStudent