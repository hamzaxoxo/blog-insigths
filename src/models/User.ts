import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        lowercase: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please use a valid address'],
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: {
        type: String,
    },
    forgotPasswordTokenExpiry: {
        type: Date,
    },
    verifyToken: {
        type: String,
    },
    verifyTokenExpiry: {
        type: Date,
    },
    refreshToken: {
        type: String,
    },
    profile: {
        name: {
            type: String,
        },
        bio: {
            type: String,
        },
        image: {
            type: String,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
})

userSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password;
        return ret;
    }
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;