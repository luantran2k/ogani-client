import { Ref, useImperativeHandle, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

export interface IRichTextEditorProps {
    valueRef: Ref<string>;
}

export default function RichTextEditor(props: IRichTextEditorProps) {
    const { valueRef } = props;
    const [value, setValue] = useState("");
    useImperativeHandle(valueRef, () => value);

    return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
