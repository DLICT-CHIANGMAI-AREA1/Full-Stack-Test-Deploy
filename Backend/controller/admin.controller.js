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
                    res.json({ message: "Add Success" });
                })
                .catch((err) => {
                    res.json({ message: "An error Occured" });
                });
        } catch (error) {
            res.json({ message: error.message });
        }
    },
    getMessageFormat: async (req, res, next) => {
        try {
            res.send("こんにちは　GetPDFPath です");
            //res.status(200).json(await Book.find());
        } catch (error) {
            res.status(500).json(error);
        }
    },
    FindOP: async (req, res, next) => {
        try {
            res.status(200).json(await OP.find());
        } catch (error) {
            res.status(500).json(error);
        }
    },
};
