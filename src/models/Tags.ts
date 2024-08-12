import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Users" }
}, { timestamps: true });

const Tag = mongoose.models.Tags || mongoose.model("Tags", tagSchema);
export default Tag;
