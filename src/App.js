import "./App.css";
import Editor from "./Editor";
import Preview from "./Preview";
import defaultText from "./text";
import { useEditor } from "./hooks";
function App() {
  const editor = useEditor(defaultText);
  return (
    <div className="App">
      <Editor editor={editor} />
      <Preview editor={editor} />
    </div>
  );
}

export default App;
