import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
const ClassicEditor = require("ckeditor5-mathtype/build/ckeditor");
const App = () => {
  const [value, setValue] = useState("");
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        console.log(event, editor);
      }}
    />
  );
};

export default App;
