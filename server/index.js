const express=require("express");
const connectDb = require("./config/DbConnection");
const app = express();
const cors=require("cors");
const port=3001;
const bodyParser = require("body-parser");


connectDb();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(require("./routes"));


app.listen(port,()=>{
    console.log("listening on port: ", port)
})