import React, {useState} from 'react';
import NotesForm from './NotesForm';
import { Button} from "semantic-ui-react";
import Axios from 'axios';
import { useHistory } from 'react-router';

const Note = (props) => {
  const history = useHistory()
  const [ editing, setEditing ] = useState(false)

  const deleteNote= async()=>{
      try{
          const res = await Axios.delete(`/api/jobs/${props.job.id}/notes/${props.note.id}`)
          history.go(0)
      }catch(err){
          alert("could not delete note")
      } 
  }
  return(
    <>
      { editing 
        ? 
           <NotesForm editNote={props.editNote} setEditing={setEditing} note={props.note} job={props.job} />
        :    
          <div class="ui card" >
            <div class="content">{props.note.description}</div>
            <Button onClick={() => setEditing(!editing)}> Edit</Button>
            <Button onClick={deleteNote}>
              <p>Delete</p>
            </Button>
          </div>
      }
    </>
  )
}


export default Note;