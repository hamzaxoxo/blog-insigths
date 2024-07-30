import { NextRequest, NextResponse } from 'next/server';
import { connect } from "@/lib/mongodb";
import User from "@/models/User";
import cloudinary from 'cloudinary';
import { v4 as uuidv4 } from 'uuid';

connect();

cloudinary.v2.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
});

export async function GET(req: NextRequest) {
    try {
        const { pathname } = new URL(req.url);
        const userId = pathname.split("/").pop();

        if (!userId) {
            return NextResponse.json({ status: "error", message: "User ID is required" }, { status: 400 });
        }
        const user = await User.findById(userId).select('-password');

        if (!user) {
            return NextResponse.json({ status: "error", message: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ status: "success", data: user }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ status: "error", message: "Something went wrong!" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {

        const { pathname } = new URL(req.url);
        const userId = pathname.split("/").pop();

        if (!userId) {
            return NextResponse.json({ status: "error", message: "User ID is required" }, { status: 400 });
        }

        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ status: "error", message: "User not found" }, { status: 404 });
        }

        const reqBody = await req.json();
        const { name, bio, profileURL } = reqBody;


        // Check if there is a profile image to upload
        let imageURL = user.profile.image;
        if (profileURL) {
            const result = await cloudinary.v2.uploader.upload(profileURL, {
                public_id: `profile_images/${uuidv4()}`,
                folder: "profile_images"
            });
            imageURL = result.secure_url;
        }

        user.profile.name = name || user.profile.name;
        user.profile.bio = bio || user.profile.bio;
        user.profile.image = imageURL; ``
        user.updatedAt = Date.now();

        await user.save();

        return NextResponse.json({
            status: "success",
            message: "User updated successfully",
            data: user.toJSON()
        }, { status: 200 });

    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ status: "error", message: "Something went wrong!" }, { status: 500 });
    }
}