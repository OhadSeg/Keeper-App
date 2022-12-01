import React, { useState } from "react";




function CreateArea() {

    const [note, setNote] = useState({title: "", content: ""});
    
    function handleChange(event){
       
        const { name, value } = event.target;
       setNote(prevValue => {
        return {
          ...prevValue,
          [name]: value
        };
     });
    }

    return (
    <div>
      <form>
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3"  />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;