import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    roleName: { type: String, required: true, unique: true },
    description: { type: String, default: "" }
}, { timestamps: true });

const Role = mongoose.models.Roles || mongoose.model("Roles", roleSchema);
export default Role;
