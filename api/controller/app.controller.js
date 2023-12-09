import Application from "../models/application.model.js";
import { errorHandler } from "../utils/error.js";

export const addApplication = async (req, res, next) => {
  const { fullname, studentNumber, email, phone, department, selectedTeam, status } = req.body;
  const newApplication = new Application({
    fullname,
    studentNumber,
    email,
    phone,
    department,
    selectedTeam,
    status,
  });
  await newApplication
    .save()
    .then(() => {
      res.json({
        success: true,
        message: "Application added successfully",
        data: newApplication,
      });
    })
    .catch((err) => {
      next(errorHandler(404, "Application not added"));
    });
};

export const getApplication = async (req, res, next) => {
  try {
    const { studentNumber, phone } = req.body; // Örnek giriş metni
    const application = await Application.findOne({ studentNumber: studentNumber, phone: phone });
    console.log(application);
    if (application === null) {
      return next(errorHandler(404, "Başvuru Formu Bulunamadı!"));
    }
    res.status(200).json({
      success: true,
      data: application,
    });
  } catch (err) {
    next(501 , "Bir hata oluştu. Tekrar deneyin!");
  }
};
