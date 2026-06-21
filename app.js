const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch(err => console.log("MongoDB Error:", err));

app.use(cors());
app.use(express.json());

app.use("/api/notes", require("./routes/noteRoutes"));

app.listen(3000, () => {
  console.log("Server Running");
});