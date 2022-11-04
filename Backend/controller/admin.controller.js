const OP = require("../model/Operating_Manual");
const axios = require("axios");

module.exports = {
    CreatePDF: async (req, res, next) => {
        try {
            let PDF = new OP({
                filename: req.body.filename,
            });
            if (req.file) {
                PDF.file = req.file.path;
            }

            PDF.save()
                .then((response) => {
                    return res.status(200).json(response);
                })
                .catch((error) => {
                    return res.status(500).json(error.message);
                });
        } catch (error) {
            res.json({ message: error.message });
        }
    },
    UpdateOPM: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { filename, file } = req.body;

            const data = {
                filename: filename,
                file: file,
            };
            console.log(data)
            let update = await OP.findByIdAndUpdate(id, data, { new: true })
            return res.status(200).json(update);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
    FindOP: async (req, res, next) => {
        try {
            res.status(200).json(await OP.find());
        } catch (error) {
            res.status(500).json(error);
        }
    },
    DeleteOPM: async (req, res, next) => {
        try {
            const { id } = req.params;
            await OP.findByIdAndDelete(id);
            return res.status(200).json(await OP.find());
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
};
