import Axios from "axios";
import React, { useContext, useEffect, useState } from "react"
import { Button} from "semantic-ui-react";
import {Link} from "react-router-dom"
import NotesForm from './NotesForm';
import Note from "./Note";
import styled from "styled-components";

const Notes =(props)=>{
    const [notes, setNotes]= useState([])
    const [ adding, setAdding ] = useState(false)
    const getNotes=async()=>{
    try{
      let res = await Axios.get(`/api/jobs/${props.job.id}/notes`)
      setNotes(res.data);
        }
      catch(err){
        alert("Error: No Notes ")
        }
    }      
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
    <Wrapper>
      <strong>Notes</strong>
      <hr/>
      <Button color="green" onClick={()=>setAdding(!adding)} size="mini">{adding ? "Cancel" : "Add Note"}</Button>
      { adding && <NotesForm addNote={addNote} job={props.job}/> }
      {notes.map( note => <Note key={note.id} note={note} editNote={editNote} job={props.job}/>)}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-width: 3px;
  border-color: #606F8C;
  border-style: solid;
  border-radius: 5px;
  width: 50%;
`

export default Notes 