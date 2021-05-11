const Preview = ({ editor }) => {
  return (
    <div id="preview-container">
      <h2>PREVIEW</h2>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: editor.parsed }}
      ></div>
    </div>
  );
};

export default Preview;
