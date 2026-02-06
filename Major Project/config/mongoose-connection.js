const mongoose = require("mongoose");
const config = require("config");
const dbg = require("debug")("development:mongoose");

const dbURI = config.get("MONGODB_URI") || "mongodb://127.0.0.1:27017/scatch";

mongoose.connect(dbURI)
.then(() => dbg("✅ MongoDB connected"))
.catch((err) => dbg("❌ Connection error: " + err.message));

module.exports = mongoose;
