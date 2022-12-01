import React, { useState } from "react";




function CreateArea() {

    const [noteContent, setNoteContent] = useState({title: "Title", body: "Take a note..."})
    
    function handleChange(event){
       
        const { name, value} = event.target;
       setNoteContent(prevValue=> {

        if (name === "title"){
            return{
                title: value,
                body: prevValue.body
            };
        }
        else{
            return {    
                title: prevValue.title,
                body: value
            };
        }
       });
    }

    return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder={noteContent.title}  />
        <textarea onChange={handleChange} name="content" placeholder={noteContent.body} rows="3"  />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;