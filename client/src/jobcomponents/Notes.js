import Axios from "axios";
import React, { useContext, useEffect, useState } from "react"
import { Button} from "semantic-ui-react";
import {Link} from "react-router-dom"
import NotesForm from './NotesForm';
import Note from "./Note"

const Notes =(props)=>{
    const [notes, setNotes]= useState([])
    const [ adding, setAdding ] = useState(false)
    //console.log("props job", props.job)
    const getNotes=async()=>{
    try{
      let res = await Axios.get(`/api/jobs/${props.job.id}/notes`)
      setNotes(res.data);
     console.log(res.data)
        }
      catch(err){
        console.log(err)
        alert("Error: No Notes ")
        }
    }
    // const renderNotes = () => notes.map( note => <Note key={note.id} note={note} />)
      
    useEffect(()=>{
        getNotes()
      },[])

    const handleClick = () => {
      setAdding(true)
    }

  const addNote = (newNote) => {
    setNotes([newNote, ...notes])
    setAdding(false)
  }
  
  const editNote = (updatedNote) => {
    setNotes(notes.map( a => {
      if (a.id === updatedNote.id) {
        return updatedNote 
      }
      return a
    }))
  }

  return (
    <div>
      <h1>Notes</h1>
      <Button color="green" onClick={handleClick}>
        <span>Add Note</span>
      </Button>
      
      { adding && <NotesForm addNote={addNote} job={props.job}/> }
      {/* {renderNotes()} */}
      {notes.map( note => <Note key={note.id} note={note} editNote={editNote} job={props.job}/>)}
    </div>
  )
}
export default Notes 