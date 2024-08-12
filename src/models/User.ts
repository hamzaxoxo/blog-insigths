import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String, default: "" },
    profilePicture: { type: String, default: "" }
}, { timestamps: true });

userSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password;
        return ret;
    }
});

const User = mongoose.models.Users || mongoose.model("Users", userSchema);
export default User;
