import mongoose from "mongoose";

const subCommentReplySchema = new mongoose.Schema({
    subCommentId: { type: mongoose.Schema.Types.ObjectId, ref: "SubComments", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    content: { type: String, required: true }
}, { timestamps: true });

const SubCommentReply = mongoose.models.SubCommentReplies || mongoose.model("SubCommentReplies", subCommentReplySchema);
export default SubCommentReply;
