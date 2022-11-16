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
            const { id } = req.params;
            const data = req.body;
            return res.status(200).json(
                await DataStudent.updateOne(
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
    UpdateData: async (req, res, next) => {
        try {
            const { id, ids } = req.params;
            return res.status(200).json(await DataStudent.updateOne(
                { _id: id ,"data._id":ids},
                {
                    $set: {
                        "data.$.name": req.body.name,
                        "data.$.url": req.body.url,
                     }
                },
                { safe: true }
            ));
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    DeleteData: async (req, res, next) => {
        try {
            const { id, ids } = req.params;
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
            const data = req.body;
            let SaveData = new DataStudent(data);
            await SaveData.save(async (err, data) => {
                if (err) return res.status(400).json("Bad Request");
                return res.status(200).json(data);
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    DeleteDataRecordByYear: async (req, res, next) => {
        try {
            const { id } = req.params;
            await DataStudent.findByIdAndDelete(id);
            return res.status(200).json(await DataStudent.find());
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
};
