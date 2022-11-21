const DataEachYear = require("../model/DataStudentEachYear");

module.exports = {
    FindDataEachYear: async (req, res, next) => {
        try {
            return res.status(200).json(await DataEachYear.find());
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    FindDataEachYearById: async (req, res, next) => {
        try {
            const { id } = req.params;
            return res.status(200).json(await DataEachYear.findById(id));
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    FindDataEachYearByDate: async (req, res, next) => {
        try {
            const { param1, param2 } = req.params;
            const find = await DataEachYear.find({ "data.date._id": param2 }); // หาข้อมูลว่าอยู่ในไหน เเล้ว ต่อไปก็เจาะลึกลงมาโดยใช่ Filtter
            const data = find[0].data.filter(function (A) {
                return A._id.toString() === param1; // id ขอข้อมูลที่จะเอา เช่น DMC , ครู
            });
            const date = data[0].date.filter(function (B) {
                return B._id.toString() === param2; // id ของวันที่ที่จะเอาข้อมูล (Date)
            });
            return res.status(200).json(date);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    /*
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
            return res.status(200).json(
                await DataStudent.updateOne(
                    { _id: id, "data._id": ids },
                    {
                        $set: {
                            "data.$.name": req.body.name,
                            "data.$.url": req.body.url,
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
    },*/
    DeleteData: async (req, res, next) => {
        try {
            const { param1, id } = req.params;
            return res.status(200).json(
                await DataEachYear.updateOne(
                    { _id: param1 },
                    {
                        $pull: { "data.$[].date.$[].data": { _id: id } },
                    },
                    { safe: true }
                )
            );
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    DeleteDataDate: async (req, res, next) => {
        try {
            const { param1, id } = req.params;
            console.log(param1, id);
            return res.status(200).json(
                await DataEachYear.updateOne(
                    { _id: param1 },
                    {
                        $pull: { "data.$[].date": { _id: id } },
                    },
                    { safe: true }
                )
            );
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    DeleteDataRecordDate: async (req, res, next) => {
        try {
            const { param1, id } = req.params;
            return res.status(200).json(
                await DataEachYear.updateOne(
                    { _id: param1 },
                    {
                        $pull: { data: { _id: id } },
                    },
                    { safe: true }
                )
            );
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    DeleteDataYear: async (req, res, next) => {
        try {
            try {
                const { id } = req.params;
                await DataEachYear.findByIdAndDelete(id);
                return res.status(200).json(await DataEachYear.find());
            } catch (error) {
                return res.status(500).json(error.message);
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
};
