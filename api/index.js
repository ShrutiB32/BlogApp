const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors")
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer")

dotenv.config();
app.use(cors());
app.use(express.json());

let corsOptions = {
  origin: [ 'http://localhost:5173', 'http://localhost:3000' ]
};

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


  const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"images")
    },
    filename:(req,file,cb) => {
        cb(null, req.body.name);
    }
  })

  const upload = multer({storage:storage});
  console.log("....upload",upload)
  app.post("/api/upload", upload.single("file"),(req,res)=>{
    console.log("reqqqqq",req)
    res.status(200).json("File has been uploaded");
  })
app.use("/api/auth", cors(corsOptions), authRoute)
app.use("/api/users",cors(corsOptions), userRoute)
app.use("/api/posts",cors(corsOptions), postRoute)
app.use("/api/categories", cors(corsOptions), categoryRoute)

app.listen("5000", () => {
  console.log("Backend is running.");
});
