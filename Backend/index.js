import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import StonexRoute from "../Backend/route/Stonexroute.js"
import userRoute from "./route/user.route.js"

const app = express();

app.use(cors(
));
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to MongoDB

try {
  mongoose.connect(URI, {
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error:", error);
}

//defining Routes
app.use("/Stonex", StonexRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
