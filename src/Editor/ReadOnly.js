import { useEffect } from "react";
import { useSelector } from "react-redux";
import EditorJS from "@editorjs/editorjs";
import EDITOR_JS_TOOLS from "./tools";
import updateEditorData from "../actions/updateEditorData";

function ReadOnly(props) {
  let editor;
  let data = useSelector((state) => state.updateEditorData);

  const handleReturn = () => {
    props.history.push("/");
  };

  useEffect(() => {
    editor = new EditorJS({
      holder: "editorjs",
      tools: EDITOR_JS_TOOLS,
      version: "2.11.10",
      autofocus: true,
      data: data,
      readOnly: true,
      onReady: () => {
        console.log("ReadOnly EditorJS should be working!");
      },
    });
  }, []);

  return (
    <>
      <center>
        <button onClick={handleReturn} id="return-button">
          Return to Editor Page
        </button>
        <h1>Rendered Read Only Editor is below this line</h1>
      </center>
      <hr />
      <div id="editorjs"></div>
    </>
  );
}

export default ReadOnly;
