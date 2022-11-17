const DataStudentWebService = require("../model/DataStudentWebService");
const axios = require("axios");

module.exports = {
    FindDataStudentWebService: async (req, res, next) => {
        try {
            return res.status(200).json(await DataStudentWebService.find());
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    DeleteDataWebService: async (req, res, next) => {
        try {
            const { id, ids } = req.params;
            return res.status(200).json(
                await DataStudentWebService.updateOne(
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
    AddSemesterDataWebService: async (req, res, next) => {
        try {
            const data = req.body;
            let SaveData = new DataStudentWebService(data);
            await SaveData.save(async (err, data) => {
                if (err) return res.status(400).json("Bad Request");
                return res.status(200).json(data);
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    AddDataDataWebService: async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = req.body;
            return res.status(200).json(
                await DataStudentWebService.updateOne(
                    { _id: id },
                    {
                        $push: { data },
                    },
                    { safe: true }
                )
            );
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    UpdateDataDataWebService: async (req, res, next) => {
        try {
            const { id, ids } = req.params;   
            return res.status(200).json(await DataStudentWebService.updateOne(
                { _id: id ,"data._id":ids},
                {
                    $set: {
                        "data.$.name": req.body.name,
                        "data.$.csv_url": req.body.csv_url,
                        "data.$.json_url":req.body.json_url
                     }
                },
                { safe: true }
            ));
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    DeleteDataRecordByYearDataWebService: async (req, res, next) => {
        try {
            const { id } = req.params;
            await DataStudentWebService.findByIdAndDelete(id);
            return res.status(200).json(await DataStudentWebService.find());
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
};
