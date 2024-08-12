import mongoose from "mongoose";

const postViewSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Posts", required: true },
    viewCount: { type: Number, default: 0 },
}, { timestamps: true });

const PostView = mongoose.models.PostViews || mongoose.model("PostViews", postViewSchema);
export default PostView;
