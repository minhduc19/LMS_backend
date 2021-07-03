import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import csrf from "csurf";
import cookieParser from "cookie-parser";
//import multer from "multer"
//const bodyParser = require('body-parser');

const morgan = require("morgan");
require("dotenv").config();
const mongodb = require("./mongodb/mongodb.connect");

//upload with multer
// upload = multer().single('avatar');

const csrfProtection = csrf({ cookie: true });

mongodb.connect();

// create express app
const app = express();

// apply middlewares
app.use(cors());
app.use(express.json());
//app.use(upload)

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 


app.use(cookieParser());
app.use(morgan("dev"));

// route
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
// csrf
app.use(csrfProtection);

app.get("/api/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
