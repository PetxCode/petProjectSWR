import mongoose from "mongoose";

interface iFee {
  cash: number;
  studentID: string;
  schoolName: string;
}

interface iFeeData extends iFee, mongoose.Document {}

const feeModel = new mongoose.Schema<iFeeData>(
  {
    cash: {
      type: Number,
    },

    studentID: {
      type: String,
    },

    schoolName: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<iFeeData>("fees", feeModel);
