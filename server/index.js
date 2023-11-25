const express = require("express");
const connectDb = require("./config/DbConnection");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;
connectDb();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(require("./routes"));

app.listen(port,()=>{
    console.log("listening on port",port);
})