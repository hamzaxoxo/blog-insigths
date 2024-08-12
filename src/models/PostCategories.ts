import mongoose from "mongoose";

const postCategorySchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Posts", required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Categories", required: true }
}, { timestamps: true });

const PostCategory = mongoose.models.PostCategories || mongoose.model("PostCategories", postCategorySchema);
export default PostCategory;
