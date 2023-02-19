import { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

export interface IRichTextEditorProps {}

export default function RichTextEditor(props: IRichTextEditorProps) {
    const [value, setValue] = useState("");

    return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
