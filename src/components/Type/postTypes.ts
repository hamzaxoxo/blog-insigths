import { ObjectId } from "mongoose";

interface Tag {
    name: string;
    [key: string]: any;
}

export interface Post {
    _id: ObjectId;
    title: string;
    content: string;
    excerpt?: string;
    slug: string;
    tags: Tag[];
    cover?: string;
    publish: boolean;
    createdBy: ObjectId;
    updatedBy?: ObjectId;
    comments: Comment[];
    viewCount: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface BlogState {
    posts: Post[];
    loading: boolean;
    error: string | null;
}