import express from "express";

const router = express.Router();


// controllers
//import { register } from "../controllers/auth";
const {register} = require("../controllers/auth") 

router.post("/register", register);

module.exports = router;
