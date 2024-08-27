"use client";

import type { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";


interface EditorProps {
    onChange: (content: PartialBlock[]) => void;
    initialContent?: string;
    editable?: boolean;
}

const Editor: React.FC<EditorProps> = ({
    onChange,
    initialContent,
    editable = true,
}) => {
    const editor: BlockNoteEditor = useCreateBlockNote({
        initialContent: initialContent
            ? (JSON.parse(initialContent) as PartialBlock[])
            : undefined,
        // uploadFile: async (file: File) => {
        //     const [res] = await uploadFiles("imageUploader", { files: [file] });
        //     return res.url;
        // },
    });

    return (
        <div className="-mx-[4px]">
            <BlockNoteView
                editor={editor}
                editable={editable}
                theme="light"
                // onEditorChange={onChange}
            />
        </div>
    );
};

export default Editor;