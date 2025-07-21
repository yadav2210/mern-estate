
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.routes"); 
const authRouter = require("./routes/auth.route"); 
mongoose.connect("mongodb://localhost:27017/BRICKSHUB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ Connected to MongoDB");
}).catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

const app = express();
app.use(express.json()); 

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
//MIDDLEWARE
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter); 
app.use((err, req, res, next) => {
   const statusCode = err.statusCode || 500;
   const message = err.message || "Internal Server Error";
   return res.status(statusCode).json({
    success: false,
     statusCode,
     message,
   }); 
});
