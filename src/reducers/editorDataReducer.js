export default (state = {}, action) => {
  if (action.type === "updateEditorData") {
    let newState = action.payload;
    return newState;
  } else {
    return state;
  }
};
