const express = require("express");
const router = express.Router();
const authRouter = require("./authRoute");

router.use("/user", authRouter);

module.exports = router;
