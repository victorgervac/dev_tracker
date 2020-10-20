import Axios from "axios"
import React, { useEffect, useState } from "react"
import { Button, Form } from "semantic-ui-react"
import Notes from "./Notes"

const NotesForm = ({note={}, ...props}) => {
    const [description, setDescription]= useState( note.description || "" );
    //    const jobId = props.location.state.job.id;
    const jobId = props.job.id
    function handleSubmit(e){
        e.preventDefault();

        if (note.id) {
            Axios
            .put(`/api/jobs/${jobId}/notes/${note.id}`,{description})
            .then((res)=>{
                props.editNote(res.data)
                props.setEditing(false)
                console.log("update",res.data)
            }).catch((err)=>{
                console.log(err)
                alert("can not update note")
            })
        } else {
            Axios
            .post(`/api/jobs/${jobId}/notes`,{description})
            .then((res)=>{
                //console.log("new note",res.data)
                // props.history.push(`/jobs/${jobId}`)
                props.addNote(res.data)
            }).catch((err)=>{
                alert("Error: note was not created")
            })
        }
    }
return (
<div>
    <Form onSubmit={handleSubmit}> 
        <Form.Input
        type="text"
        name="description"
        label="Notes"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        />
         <Button type='submit'>Save</Button>
    </Form>
</div>
)
}


export default NotesForm;