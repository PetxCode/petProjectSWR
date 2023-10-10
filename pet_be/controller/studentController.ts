import { Request, Response } from "express";
import bcrypt from "bcrypt";
import studentModel from "../model/studentModel";
import { streamUpload } from "../utils/stream";

export const createStudent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password, studentName, schoolName } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const student = await studentModel.create({
      email,
      password: hashed,
      studentName,
      schoolName,
      balance: 0,
    });

    return res.status(201).json({
      message: "created",
      data: student,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const getAllStudent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const student = await studentModel.find();

    return res.status(201).json({
      message: "created",
      data: student,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const getAStudent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { studentID } = req.params;

    const student = await studentModel.findById(studentID);

    return res.status(201).json({
      message: "view one",
      data: student,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const updateStudentInfo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { studentID } = req.params;
    const { HouseAddress, gender, phoneNumber } = req.body;

    const student = await studentModel.findByIdAndUpdate(
      studentID,
      {
        HouseAddress,
        gender,
        phoneNumber,
      },
      { new: true }
    );

    return res.status(201).json({
      message: "view one",
      data: student,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const updateStudentImage = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { studentID } = req.params;

    const { secure_url, public_id }: any = streamUpload(req);

    const student = await studentModel.findByIdAndUpdate(
      studentID,
      {
        studentImage: secure_url,
        studentImageID: public_id,
      },
      { new: true }
    );

    return res.status(201).json({
      message: "view one",
      data: student,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const singinStudent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const student = await studentModel.findOne({ email });

    if (student) {
      const passwordChaeck = await bcrypt.compare(password, student.password);

      if (passwordChaeck) {
        return res.status(201).json({
          message: "view one",
          data: student,
        });
      } else {
        return res.status(404).json({
          message: "Error with password",
        });
      }
    } else {
      return res.status(404).json({
        message: "Error with Student",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};
