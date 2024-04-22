const express = require("express");

const router = express.Router();
const { getMaterial, getDepartemen, getProvider } = require("../controllers/Fina");


router.get('/fina/material', getMaterial);
router.get('/fina/departemen', getDepartemen);
router.get('/fina/provider', getProvider);

exports.route = router; 