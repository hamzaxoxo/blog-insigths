'use client'
import React from 'react';
// import EditorCompo from './Editor'
import { useAppDispatch } from '@/store/store';
import { PartialBlock } from '@blocknote/core';
import TextareaAutosize from "react-textarea-autosize";
import Container from '../Container';
import AddBlogNavbar from '../Navbar/AddBlogNavbar';
import Editor from './BlackNote';
const Add: React.FC = () => {
    const dispatch = useAppDispatch();
    // const { currentPost, status } = useAppSelector((state: RootState) => state.);
    const [title, setTitle] = React.useState('');



    return (
        <>
            <AddBlogNavbar />
            <Container className='px-40'>
                <div className="flex items-center">
                    {
                        title.length > 0 && (
                            <label htmlFor="textarea" className="h-full text-gray-400 text-lg pr-4 mr-4 border-r-2">Title</label>
                        )
                    }
                    <TextareaAutosize
                        id="textarea"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="font-times w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-semibold focus:outline-none"
                    />
                </div>


                <Editor />
            </Container>
        </>
    )
}
export default Add;