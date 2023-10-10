import mongoose from "mongoose";

interface iBag {
  bag: number;
  cash: number;
  student: {};
}

interface iBagData extends iBag, mongoose.Document {}

const bagModel = new mongoose.Schema<iBagData>(
  {
    bag: {
      type: Number,
    },
    cash: {
      type: Number,
    },

    student: {
      type: mongoose.Types.ObjectId,
      ref: "bags",
    },
  },
  { timestamps: true }
);

export default mongoose.model<iBagData>("bags", bagModel);
