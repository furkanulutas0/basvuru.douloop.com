import mongoose from "mongoose";

const appPaperSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true }, // Furkan Ulutaş
    studentNumber: { type: String, required: true }, // 202103....00
    email: { type: String, required: true }, // xxxxxxxx@xxxxx.com
    phone: { type: String }, // 5xxxxxxxxx
    department: { type: String }, // Core Yazılım Takımı
    selectedTeam: {type: String, required: true}, // Core Yazılım Takımı
    detail: { type: String }, // Motivation Letter
    status: { type: String, default: "pending" }, // Pending, Accepted, Rejected
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", appPaperSchema);
export default Application;
