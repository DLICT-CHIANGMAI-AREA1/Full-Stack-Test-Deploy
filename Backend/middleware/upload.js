const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/images");
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    },
});

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        cb(null, true);
    },
});

module.exports = upload;
