'use client'


import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import marked from "marked";


export default function Editor() {
    // Function to handle file uploads
    async function uploadFile(file: File) {
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("/api/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return response.data?.data?.url;
        } catch (error: any) {
            console.error(error);
            return null;
        }
    }

    const [markdown, setMarkdown] = useState<string>("");
    const [parsedMarkdown, setParsedMarkdown] = useState<string>("");
    const editor = useCreateBlockNote({
        uploadFile,
    });




    const onChange = async () => {
        const markdown = await editor.blocksToMarkdownLossy(editor.document);
        setMarkdown(markdown);
    };
    const convertMarkdownToHtml = (markdown: string) => {
        return marked.parse(markdown);
    };
    return (
        <div className={"wrapper"}>
            <div className={"item"}>
                <BlockNoteView
                    editor={editor}
                    theme={"light"}
                    onChange={onChange}
                />
            </div>
            <button onClick={async () => {
                const markdown = await editor.blocksToMarkdownLossy(editor.document);
                setParsedMarkdown(markdown);
            }}>Publish</button>


            {
                parsedMarkdown && (
                    <div className={"item"}>
                        {marked.parse(markdown)}
                    </div>
                )
            }
        </div>
    );
}
