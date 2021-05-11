import marked from "marked";
import { useEffect, useState } from "react";

export const useEditor = (defaultText) => {
  const [text, setText] = useState(defaultText);
  const [parsed, setParsed] = useState("");
  useEffect(() => {
    setParsed(marked(text, { sanitize: true }));
  }, [text]);

  return { parsed, text, setText };
};
