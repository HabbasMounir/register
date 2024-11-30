import Editor from "@monaco-editor/react";

function MYEditor() {
  function handleEditorChange(value, event) {
    console.log("here is the current model value:", value);
  }

  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      onChange={handleEditorChange}
    />
  );
}

export default MYEditor;
