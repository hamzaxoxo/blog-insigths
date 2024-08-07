'use client'
import React from 'react'
import EditorCompo from './Editor'
import Container from '../Container'
import TextareaAutosize from "react-textarea-autosize";
import Editor from './BlackNote';
import { PartialBlock } from '@blocknote/core';
import CoverImage from './CoverImage';
const Add: React.FC = () => {
    return (
        <>
            <CoverImage url="https://images.inc.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg"/>
            <Container className='py-20 px-5'>
                <TextareaAutosize
                    placeholder="Untitled"
                    className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
                />

                <Editor
                    onChange={(content: PartialBlock[]) => console.log(content)}
                    editable={true}
                />
                {/* <EditorCompo /> */}
            </Container>
        </>
    )
}
export default Add;