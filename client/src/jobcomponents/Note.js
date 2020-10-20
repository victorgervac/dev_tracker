import React, {useState} from 'react';
import NotesForm from './NotesForm';
import { Button} from "semantic-ui-react";

const Note = (props) => {
  const [ editing, setEditing ] = useState(false)

  return(
    <>
      { editing 
        ? 
           <NotesForm editNote={props.editNote} setEditing={setEditing} note={props.note} job={props.job} />
        :    
          <div class="ui card" >
            <div class="content">{props.note.description}</div>
            <Button onClick={() => setEditing(!editing)}> edit</Button>
          </div>
      }
    </>
  )
}


export default Note;