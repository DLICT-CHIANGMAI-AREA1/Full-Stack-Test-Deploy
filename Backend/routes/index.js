const router = require("express").Router();

const opm = require("./opm");
const DataStudentEachYear = require("./DataStudent_each_year")
const DataStudentWebService = require("./DataStudentWebService")
router.use("/admin", opm);
router.use("/admin", DataStudentEachYear);
router.use("/admin", DataStudentWebService);

module.exports = router;
