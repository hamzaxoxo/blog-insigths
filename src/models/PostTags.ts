import mongoose from "mongoose";

const postTagSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Posts", required: true },
    tagId: { type: mongoose.Schema.Types.ObjectId, ref: "Tags", required: true }
}, { timestamps: true });

const PostTag = mongoose.models.PostTags || mongoose.model("PostTags", postTagSchema);
export default PostTag;
