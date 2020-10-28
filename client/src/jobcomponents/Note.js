import React, {useState} from 'react';
import NotesForm from './NotesForm';
import { Button, Card, Feed, Icon} from "semantic-ui-react";
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
        <Card>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Summary>
                  {props.note.description}
                  </Feed.Summary>
                  <Icon name="trash" color="red" onClick={deleteNote}/>
                  <Icon name="pencil" color="green" onClick={() => setEditing(!editing)}/>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>
      }
    </>
  )
}


export default Note;