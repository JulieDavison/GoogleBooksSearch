const router = require("express").Router();
const bookRoutes = require("./book");

// Book routes - pref - /api
router.use("/books", bookRoutes);

module.exports = router;
