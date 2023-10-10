import express from "express";

import { createFeeRecord, viewFeeRecord } from "../controller/feeController";

const Router = express.Router();

Router.route("/create-fee-record").post(createFeeRecord);
Router.route("/:studentID/view-student-fee").get(viewFeeRecord);

export default Router;
