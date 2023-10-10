import { Request, Response } from "express";
import bagModel from "../model/bagModel";
import studentModel from "../model/studentModel";
import mongoose from "mongoose";
import feeModel from "../model/feeModel";

export const createFeeRecord = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { cash, email } = req.body;

    const searchUser = await studentModel.findOne({ email });
    if (searchUser) {
      const bagInfo = await feeModel.create({
        cash,
        studentID: searchUser?._id,
        schoolName: searchUser?.schoolName,
      });

      await studentModel.findByIdAndUpdate(
        searchUser._id,
        {
          balance: searchUser?.balance - bagInfo?.cash,
        },
        { new: true }
      );

      searchUser.feeHistory.push(new mongoose.Types.ObjectId(bagInfo?._id));
      searchUser.save();

      return res.status(201).json({
        message: "created",
        data: bagInfo,
      });
    } else {
      return res.status(404).json({
        message: "no student match",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const viewFeeRecord = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { studentID } = req.params;

    const searchUser = await studentModel.findById(studentID).populate({
      path: "feeHistory",
      options: {
        sort: {
          createdAt: -1,
        },
      },
    });

    return res.status(201).json({
      message: "created",
      data: searchUser,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};
