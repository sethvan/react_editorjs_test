import { combineReducers } from "redux";
import editorDataReducer from "./editorDataReducer";

const rootReducer = combineReducers({
  updateEditorData: editorDataReducer,
});

export default rootReducer;
