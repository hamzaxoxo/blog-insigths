import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    excerpt: { type: String, default: "" },
    slug: { type: String, required: true, unique: true },
    tags: { type: [Object], default: [] },
    cover: { type: String, default: "" },
    publish: { type: Boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    comments: { type: [Object], default: [] },
    viewCount: { type: Number, default: 0 }
}, { timestamps: true });

const Post = mongoose.models.Posts || mongoose.model("Posts", postSchema);
export default Post;
