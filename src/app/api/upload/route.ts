import { cloudinary } from "@/helpers/cloudinary";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
    try {
        // Get the file from the request body formData
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const uploadToCloudinary = () => {
            return new Promise<{ secure_url: string }>((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: "your_folder_name" }, // Optional: specify a folder in Cloudinary
                    (error, result) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(result as { secure_url: string });
                        }
                    }
                );

                // Write the buffer to the upload stream
                uploadStream.end(buffer);
            });
        };

        // Upload the file and get the result
        const result = await uploadToCloudinary();

        return NextResponse.json({
            message: "File uploaded successfully",
            success: true,
            data: {
            url: result.secure_url,
            },
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
