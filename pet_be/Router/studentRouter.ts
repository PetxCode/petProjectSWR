import express from "express";
import {
  createStudent,
  getAStudent,
  getAllStudent,
  singinStudent,
  updateStudentImage,
  updateStudentInfo,
} from "../controller/studentController";
import multer from "multer";

const upload = multer().single("avatar");

const Router = express.Router();

Router.route("/create-student").post(createStudent);
Router.route("/all-student").get(getAllStudent);
Router.route("/:studentID/one-student").get(getAStudent);
Router.route("/:studentID/update-student-info").patch(updateStudentInfo);
Router.route("/:studentID/upload-student-image").patch(
  upload,
  updateStudentImage
);
Router.route("/sign-in-student").post(singinStudent);

export default Router;
