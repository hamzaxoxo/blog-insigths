import mongoose from "mongoose";

const passwordResetTokenSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    token: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    expiresAt: { type: Date, required: true }
});

const PasswordResetToken = mongoose.models.PasswordResetTokens || mongoose.model("PasswordResetTokens", passwordResetTokenSchema);
export default PasswordResetToken;
