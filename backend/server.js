const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const usermodel = require("./models/register.js");
const imagemodel = require("./models/upload.js");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://suba:suba1409@cluster0.qdh5z.mongodb.net/");

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "uploads");
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {

    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (extName && mimeType) {
      cb(null, true);
    } else {
      cb(new Error("Only images (JPEG, JPG, PNG) are allowed"));
    }
  },
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/images", async (req, res) => {
  try {
    const images = await imagemodel.find();
    res.status(200).json({
      status: "success",
      images,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch images",
    });
  }
});

app.delete("/images/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await imagemodel.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      message: "Image deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Failed to delete image",
    });
  }
});

// API to upload an image
app.post("/upload-image", upload.single("image"), async (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      return res.status(400).json({ status: "error", message: "No file uploaded" });
    }

    const newImage = new imagemodel({ image: `/uploads/${file.filename}` });
    await newImage.save();

    res.status(201).json({
      status: "success",
      message: "Image uploaded successfully",
      imagePath: `/uploads/${file.filename}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Server error while uploading the image",
    });
  }
});

// Other APIs (e.g., register, login)
app.post("/register", async (req, res) => {
  try {
    const { email, password, confirmpassword } = req.body;

    const existingUser = await usermodel.findOne({ email });
    if (existingUser) {
      return res.json({ status: "error", message: "User already exists" });
    }

    if (password !== confirmpassword) {
      return res.json({ status: "error", message: "Passwords do not match" });
    }

    await usermodel.create(req.body);
    res.json({ status: "success", message: "Registration successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  usermodel.findOne({ email: email }).then((users) => {
    if (users) {
      if (users.password === password) {
        res.json("success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("no record exist");
    }
  });
});

app.listen(3001, () => {
  console.log("server connected successfully on port 3001");
});
