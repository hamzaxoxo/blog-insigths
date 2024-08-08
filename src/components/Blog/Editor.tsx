// 'use client'

// import { Editor } from "novel-lightweight";
// import { useState } from "react";

// export default function EditorCompo(...props: any[]) {
//     const [data, setData] = useState("");
//     console.log("data", data);

//     return (
//         <Editor
//         className="shadow-none min-h-96 border py-0"
//             {...props}
//             defaultValue={data}
//             disableLocalStorage={true}
//             onUpdate={(editor: any) => {
//                 setData(editor?.storage.markdown.getMarkdown());
//             }}
//             handleImageUpload={async (file: any) => {
//                 const image = await uploadImage(file);
//                 if (image.url) {
//                     return image.url;
//                 }
//                 return "www.example.com/failed-upload.png";
//             }}
//         />
//     );
// }

// async function uploadImage(
//     file: string | Blob,
//     path = 'default-path',
//     tags = 'default-tag',
//     apiKey = "ge81t13sj896l4dtp992vr"
// ) {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("path", path);
//     formData.append("tags", tags);

//     try {
//         const response = await fetch("https://pics.shade.cool/api/upload", {
//             method: "POST",
//             headers: {
//                 Authorization: `Bearer ${apiKey}`,
//             },
//             body: formData,
//         });

//         if (!response.ok) {
//             throw new Error(`Error: ${response.statusText}`);
//         }

//         const result = await response.json();
//         console.log("Upload successful!", result);
//         return result;
//     } catch (error) {
//         console.error("Error uploading image:", error);
//         return { url: null };
//     }
// }