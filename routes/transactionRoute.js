const express = require("express");
const {
  addTransaction,
  getAllTransaction,
} = require("../controllers/transactionController");

//router object
const router = express.Router();

//routes
// Add transactions || POST Method
router.post("/add-transaction", addTransaction);

// GET transactions || GET Method
router.post("/get-transaction", getAllTransaction);

module.exports = router;
