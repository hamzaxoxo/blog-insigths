"use client"

import EditorTinny from '@/components/EditorTinny';
import Image from 'next/image';
import React from 'react';
import placeholder from '../../../../public/placeholder.jpg'

export default function Component() {
    const [title, setTitle] = React.useState("");
    const [slug, setSlug] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState(null);
    const [tags, setTags] = React.useState("");
    const [publishStatus, setPublishStatus] = React.useState("Publish");
    const imageInputRef = React.useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTags(e.target.value);
    };

    const handlePublishStatusChange = (e: any) => {
        setPublishStatus(e.target.value);
    };

    return (
        <div className="max-w-7xl mx-auto p-6 sm:p-8 md:p-10 bg-white shadow-md rounded-lg">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Create a New Blog Post</h1>
                <p className="text-gray-600">Fill out the form to publish a new blog post.</p>
            </div>
            <form className="flex sm:flex-row flex-col gap-6">
                <div className="space-y-4 sm:w-[75%] w-full">
                    <div className="space-y-2">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Enter the post title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug</label>
                        <input
                            id="slug"
                            type="text"
                            placeholder="Enter the post slug"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <EditorTinny />
                    </div>

                </div>
                <div className="space-y-4 sm:w-[20%] w-full">
                    <div className="space-y-2">
                        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
                        <input
                            id="tags"
                            type="text"
                            placeholder="Enter tags separated by commas"
                            value={tags}
                            onChange={handleTagsChange}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Featured Image</label>
                        <div className="flex items-center gap-4">
                            <input
                                id="image"
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                ref={imageInputRef}
                                className="hidden"
                            />
                            <div className="flex flex-col gap-6 w-full">
                                <button
                                    type="button"
                                    onClick={() => imageInputRef.current && imageInputRef.current.click()}
                                    className="inline-flex w-full items-center justify-center rounded-md border-2 border-primary bg-primary px-6 py-2 text-center font-medium text-white duration-200 hover:border-primary hover:bg-transparent hover:text-primary"
                                >
                                    Upload Image
                                </button>
                                {image ?
                                    <Image
                                        src={URL.createObjectURL(image)}
                                        alt="Featured"
                                        width={400}
                                        height={400}
                                        className="rounded-md object-cover w-full"
                                    /> :
                                    <Image
                                        src={placeholder}
                                        alt="Featured"
                                        width={400}
                                        height={400}
                                        className="rounded-md object-contain w-full"
                                    />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Publish Status</label>
                        <div className="flex items-center space-x-4">
                            {["Publish", "Draft"].map(status => (
                                <div key={status} className="flex items-center">
                                    <input
                                        id={status.toLowerCase()}
                                        name="publishStatus"
                                        type="radio"
                                        value={status}
                                        checked={publishStatus === status}
                                        onChange={(e) => setPublishStatus(e.target.value)}
                                        className="h-4 w-4 text-primary border-gray-300"
                                    />
                                    <label htmlFor={status.toLowerCase()} className="ml-2 block text-sm text-gray-700">{status}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-md border-2 border-primary bg-primary px-6 py-2 text-center font-medium text-white duration-200 hover:border-primary hover:bg-transparent hover:text-primary">
                        Publish
                    </button>
                </div>
            </form>

        </div>
    );
}
