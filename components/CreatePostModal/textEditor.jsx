import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import pa from "../../Asstes/style/postAction.module.css";

const ReactQuill = dynamic(
  () => {
    return import("react-quill");
  },
  { ssr: false }
);

export default function TextEditor({
  placeholder,
  onChange = () => {},
  value,
}) {
  return (
    <div
      sx={{
        position: "relative",
        "& .quill": {
          "& .ql-toolbar.ql-snow": {
            backgroundColor: "bgColor.D5DAE0",
            borderRadius: "16pxpx 16px 16px 16px",
          },

          "& .ql-container.ql-snow": {
            overflow: "hidden",
            overflowY: "auto",
            
            borderRadius: "16pxpx 16px 16px 16px",
            minHeight: "200px",
            maxHeight: "300px",
          },

          "& .ql-editor.ql-blank::before": {
            fontStyle: "normal",
            fontSize: "12px",
            minHeight: "200px",
            maxHeight: "300px",
          },
        },
      }}
    >
      <ReactQuill
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={"Start writing your blog"}
        modules={modules}
        preserveWhitespace={true}
      />
    </div>
  );
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
const modules = {
  toolbar: [
 

    [{ bold: "B" },{ italic: "I" },{ underline: "u" }],
    ['image']
  

  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
