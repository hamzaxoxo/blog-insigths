import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk(
    'post/deleteDraft',
    async (postId: string) => {
        const response = await axios.get(`/api/posts`);
        return response.data;
    }
);

export const getSinglePost = createAsyncThunk(
    'post/deleteDraft',
    async (postId: string) => {
        const response = await axios.get(`/api/post/${postId}`);
        return response.data;
    }
);
export const addPost = createAsyncThunk(
    'post/deleteDraft',
    async (postId: string) => {
        const response = await axios.post(`/api/post/add/${postId}`);
        return response.data;
    }
);
export const deletePost = createAsyncThunk(
    'post/deleteDraft',
    async (postId: string) => {
        const response = await axios.delete(`/api/post/${postId}`);
        return response.data;
    }
);

export const updatePost = createAsyncThunk(
    'post/deleteDraft',
    async (postId: string) => {
        const response = await axios.put(`/api/post/${postId}`);
        return response.data;
    }
);