import mongoose from "mongoose";

const userRoleSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    roleId: { type: mongoose.Schema.Types.ObjectId, ref: "Roles", required: true }
}, { timestamps: true });

const UserRole = mongoose.models.UserRoles || mongoose.model("UserRoles", userRoleSchema);
export default UserRole;
