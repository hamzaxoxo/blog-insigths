import { connect } from '@/lib/mongodb';
import Post from '@/models/Posts';
import { NextRequest, NextResponse } from 'next/server';

connect()


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { title, content, excerpt, slug, tags, cover, publish, createdBy } = reqBody

        if (!title || !content || !slug || !createdBy) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 500 })
        }

        const existingPost = await Post.findOne({ slug });
        if (existingPost) {
            return NextResponse.json({ error: "Slug already exists. Please choose a different slug." }, { status: 400 })
        }

        const newPost = new Post({
            title,
            content,
            excerpt,
            slug,
            tags,
            cover,
            publish,
            createdBy,
            updatedBy: createdBy,
            createdAt: new Date(),
            updatedAt: new Date(),
            comments: [],
            viewCount: 0
        });

        const savedPost = await newPost.save();

        return NextResponse.json({ data: savedPost }, { status: 200 })
    } catch (error) {
        console.error('Error creating post:', error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
};
