import Axios from "axios";
import React, { useContext, useEffect, useState } from "react"
import { Card } from "semantic-ui-react";

const Notes =(props)=>{
    const [notes, setNotes]= useState([])

    const getNotes=async()=>{
    try{
      let res = await Axios.get(`/api/jobs/${props.job.id}/notes`)
      setNotes(res.data);
        }
      catch(err){
        console.log(err)
        alert("Error:No Notes ")
        }
    }
    const renderNotes = ()=>{
      return notes.map((note)=>(
        <div class="ui card"  key={note.id}>
        <div class="content">{note.description}</div>
        </div>
      ))
    }
    useEffect(()=>{
        getNotes()
      },[])

return (
    <div>
        <h1>Notes</h1>
       {renderNotes()}
    </div>
    )
}
export default Notes 