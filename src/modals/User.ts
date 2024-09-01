import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';



const uid = uuidv4();

 


const userSchema = new mongoose.Schema({
    fullName: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    bio: { type: String, default: "" },
    profilePicture: { type: String, default: "" },
    isVerified: { type: Boolean, default: false },
    provider: { type: String, required: true, default: uid },
    providerId: { type: String, required: true },

}, { timestamps: true });

const User = mongoose.models.Users || mongoose.model("Users", userSchema);
export default User;