const DataStudent = require("../model/DataStudentEachYear");
const axios = require("axios");

module.exports = {
    FindDataStudentEachYear: async (req, res, next) => {
        try {
            return res.status(200).json(await DataStudent.find());
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    AddData: async (req, res, next) => {
        try {
            return res.status(200).json(req.body);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    UpdateData: async (req, res, next) => {
        try {
            //console.log(req.body)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    DeleteData: async (req, res, next) => {
        try {
            const { id, ids } = req.params;
            console.log(id, ids);
            return res.status(200).json(
                await DataStudent.updateOne(
                    { _id: id },
                    {
                        $pull: {
                            data: { _id: ids },
                        },
                    },
                    { safe: true }
                )
            );
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    AddSemester: async (req, res, next) => {
        try {
            console.log(req.body);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
};
