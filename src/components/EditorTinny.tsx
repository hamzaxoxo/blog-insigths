import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';

export default function EditorTinny() {
    const editorRef = React.useRef<TinyMCEEditor | null>(null);

    const log = (e: any) => {
        e.preventDefault();
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    return (
        <>
            <Editor
                apiKey='riszckn153vr0fold8pqt389fc3fg05caav5pxxzzrc930sg'
                onInit={(_evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    branding: false,
                    height: 500,
                    menubar: 'file edit view insert format tools table help',
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount', 'emoticons', 'hr',
                        'imagetools', 'print', 'template'
                    ],
                    toolbar: 'undo redo | formatselect | bold italic underline strikethrough | forecolor backcolor | link image media | \
                              alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat | code fullscreen preview',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:20px }',
                    image_advtab: true,
                    template_cdate_format: '[CDATE: %m/%d/%Y : %H:%M:%S]',
                    template_mdate_format: '[MDATE: %m/%d/%Y : %H:%M:%S]',
                    template_replace_values: {
                        username: 'Jack Black'
                    },
                    templates: [
                        { title: 'Test template 1', description: 'Some fancy template', content: 'My content' },
                        { title: 'Test template 2', description: 'Another fancy template', content: 'My other content' }
                    ],
                    images_upload_url: 'postAcceptor.php',
                    // images_upload_handler: (blobInfo, success, failure) => {
                    //     const xhr = new XMLHttpRequest();
                    //     xhr.withCredentials = false;
                    //     xhr.open('POST', 'postAcceptor.php');

                    //     xhr.onload = () => {
                    //         if (xhr.status !== 200) {
                    //             failure('HTTP Error: ' + xhr.status);
                    //             return;
                    //         }

                    //         const json = JSON.parse(xhr.responseText);

                    //         if (!json || typeof json.location !== 'string') {
                    //             failure('Invalid JSON: ' + xhr.responseText);
                    //             return;
                    //         }

                    //         success(json.location);
                    //     };

                    //     const formData = new FormData();
                    //     formData.append('file', blobInfo.blob(), blobInfo.filename());

                    //     xhr.send(formData);
                    // }
                }}
            />
            <button onClick={log} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Log Content
            </button>
        </>
    );
}
