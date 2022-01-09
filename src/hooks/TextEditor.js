import React from 'react';
import ReactQuill from 'react-quill';
import '../../node_modules/react-quill/dist/quill.snow.css';

import {useDispatch} from 'react-redux';


const TextEditor = ({body, setBody}) => {

    const dispatch = useDispatch();

    const handlerBody = e => {
        console.log(e);
        setBody(e);
    }


    return (
        <div>
            <form>
                <ReactQuill className="quill-editor"
                    placeholder='Ingresa una pregunta/respuesta'
                    modules={TextEditor.modules}
                    formats={TextEditor.formats}
                    onChange={handlerBody}
                    value={body}
                />
            </form>
        </div>
    )
}

TextEditor.modules = {
    toolbar: [
        [{header: "1"}, {header: "2"}, {header: [3, 4, 5, 6]}, {font: []}],
        [{size: []}],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{list: "ordered",}, {list: "bullet"}],
        ["link"],
        ["clean"],
        ["code-block"],
    ],
};

TextEditor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "code-block"
];

export default TextEditor;