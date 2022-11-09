const DataStudent = require("../model/DataStudentEachYear");
const axios = require("axios");


module.exports = {
    FindDataStudentEachYear: async (req, res, next) => {
        try {
            res.status(200).json(await DataStudent.find());
        } catch (error) {
            res.status(500).json(error);
        }
    },
 
};
