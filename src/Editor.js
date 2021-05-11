const Editor = ({ editor }) => {
  return (
    <div id="editor-container">
      <h2>EDITOR</h2>
      <textarea
        value={editor.text}
        cols="50"
        onChange={(e) => editor.setText(e.target.value)}
        id="editor"
      />
    </div>
  );
};

export default Editor;
