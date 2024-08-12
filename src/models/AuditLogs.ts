import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema({
    action: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Posts" },
    commentId: { type: mongoose.Schema.Types.ObjectId, ref: "Comments" },
}, { timestamps: true });

const AuditLog = mongoose.models.AuditLogs || mongoose.model("AuditLogs", auditLogSchema);
export default AuditLog;
