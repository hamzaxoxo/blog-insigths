import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Posts", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    content: { type: String, required: true },
    subComments: { type: [Object], default: [] }
}, { timestamps: true });

const Comment = mongoose.models.Comments || mongoose.model("Comments", commentSchema);
export default Comment;
