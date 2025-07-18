// CommonJS syntax (works without "type": "module")
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BRICKSHUB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {         
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});


const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
