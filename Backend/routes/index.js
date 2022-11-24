const router = require("express").Router();

const opm = require("./opm");
const DataEachYear = require("./DataEacahYear")
router.use("/admin", opm);
router.use("/admin", DataEachYear);


module.exports = router;
