import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: [true, 'Username is required'], unique: true, trim: true },
    fullName: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String, default: "" },
    profilePicture: { type: String, default: "" },
    isVerified: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,

}, { timestamps: true });

userSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password;
        return ret;
    }
});

const User = mongoose.models.Users || mongoose.model("Users", userSchema);
export default User;
