const express = require('express');

const router = express.Router();


const {updateACountry, deleteACountry} = require('../controllers/countries')



router.put("/:id", updateACountry)


router.delete("/:id", deleteACountry)

module.exports = router;