
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, default: "" }
}, { timestamps: true });

const Category = mongoose.models.Categories || mongoose.model("Categories", categorySchema);
export default Category;
