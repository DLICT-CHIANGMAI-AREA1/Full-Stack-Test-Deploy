const router = require("express").Router();

const opm = require("./opm");
const DataStudentEachYear = require("./DataStudent_each_year")
router.use("/admin", opm);
router.use("/admin", DataStudentEachYear);

module.exports = router;
