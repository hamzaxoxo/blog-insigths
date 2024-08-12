import mongoose from "mongoose";

const subCommentSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Posts", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    content: { type: String, required: true },
    replies: { type: [Object], default: [] }
}, { timestamps: true });

const SubComment = mongoose.models.SubComments || mongoose.model("SubComments", subCommentSchema);
export default SubComment;
