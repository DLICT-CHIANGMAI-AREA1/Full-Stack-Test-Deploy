const mongoose = require("../config/database");
const Schema = mongoose.Schema
const data = require("../model/webservice.json")

const DataStudent_WebService = new Schema({
    name_year:String,
    data:[{
        name:String,
        csv_url:String,
        json_url:String,
    }],
})

const DataStudentWebService = mongoose.model(" DataStudentWebService",  DataStudent_WebService)

const SaveDataStudent = async () => {
	if (0 == (await DataStudentWebService.find())) await DataStudentWebService.insertMany(data);
   
};
SaveDataStudent();

module.exports = DataStudentWebService