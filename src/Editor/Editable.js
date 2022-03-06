import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditorJS from "@editorjs/editorjs";
import EDITOR_JS_TOOLS from "./tools";
import updateEditorData from "../actions/updateEditorData";

function Editable(props) {
  let editor;
  let data = useSelector((state) => state.updateEditorData);
  const dispatch = useDispatch();

  useEffect(() => {
    editor = new EditorJS({
      holder: "editorjs",
      tools: EDITOR_JS_TOOLS,
      version: "2.11.10",
      autofocus: true,
      data: data,
      onReady: () => {
        console.log("Editor.js is ready to work!");
      },
    });
  }, []);

  const handleSave = (e) => {
    editor
      .save()
      .then((savedData) => {
        dispatch(updateEditorData(savedData));
        props.history.push("/render");
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <center>
        <button onClick={handleSave} id="save-button">
          Save
        </button>

        <h1>Editable Editor is below this line</h1>
      </center>
      <hr />
      <div id="editorjs"></div>
    </>
  );
}

export default Editable;
