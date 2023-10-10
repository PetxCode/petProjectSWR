import express from "express";

import { createBagRecord, viewBagRecord } from "../controller/bagController";

const Router = express.Router();

Router.route("/create-bag-record").post(createBagRecord);
Router.route("/:studentID/view-student-bag").get(viewBagRecord);

export default Router;
