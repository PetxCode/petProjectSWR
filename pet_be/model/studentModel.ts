import mongoose from "mongoose";

interface iStudent {
  email: string;
  password: string;
  studentName: string;
  phoneNumber: string;
  schoolName: string;
  HouseAddress: string;
  studentImage: string;
  studentImageID: string;
  gender: string;
  balance: number;
  feeHistory: {}[];
  bagHistory: Array<{}>;
}

interface iStudentData extends iStudent, mongoose.Document {}

const studentModel = new mongoose.Schema<iStudentData>(
  {
    studentName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    schoolName: {
      type: String,
    },
    HouseAddress: {
      type: String,
    },
    studentImage: {
      type: String,
    },
    studentImageID: {
      type: String,
    },
    gender: {
      type: String,
    },
    balance: {
      type: Number,
    },
    bagHistory: [
      {
        type: mongoose.Types.ObjectId,
        ref: "bags",
      },
    ],
    feeHistory: [
      {
        type: mongoose.Types.ObjectId,
        ref: "fees",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<iStudentData>("students", studentModel);
