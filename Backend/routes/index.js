const router = require("express").Router();

const opm = require("./opm");
const DataEachYear = require("./DateEacahYear")
const DataStudentWebService = require("./DataStudentWebService")
router.use("/admin", opm);
router.use("/admin", DataEachYear);
router.use("/admin", DataStudentWebService);

module.exports = router;
