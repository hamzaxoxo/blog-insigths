import mongoose from "mongoose";

const commentLikeSchema = new mongoose.Schema({
    commentId: { type: mongoose.Schema.Types.ObjectId, ref: "Comments", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    likeType: { type: String, required: true }
}, { timestamps: true });

const CommentLike = mongoose.models.CommentLikes || mongoose.model("CommentLikes", commentLikeSchema);
export default CommentLike;
