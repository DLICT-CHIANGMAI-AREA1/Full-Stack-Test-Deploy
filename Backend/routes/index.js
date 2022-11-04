const router = require("express").Router();

const opm = require("./opm");

router.use("/admin", opm);

module.exports = router;
