import React, {useEffect, useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../providers/AuthProvider";
import {Button, Card, Dimmer, Loader} from "semantic-ui-react";
import JobForm from '../jobcomponents/JobForm';
import Notes from "../jobcomponents/Notes";
import Contacts from "../Contact/Contacts";
import styled from "styled-components";

const JobShow = ({match, history}) => {
  const [job, setJob] = useState(null);
  const [ editing, setEditing ] = useState(false);
  const authContext = useContext(AuthContext)
  const id = match.params.id

  const getJob = async (job) => {
    try {
      let res = await axios.get(`/api/users/${authContext.user.id}/jobs/${id}`);
      setJob(res.data);
    } catch (err) {
      alert("error");
    }
  };

  useEffect(() => {
   getJob();
  }, []);

  function handleUpdate(updatedJob) {
    setJob({...updatedJob})
    setEditing(false);
  }

  const deleteJob = async () => {
    try{
      const res = await axios.delete(`/api/users/${authContext.user.id}/jobs/${id}`);
      history.push("/")
    } catch (err) {
      alert("could not delete job")
    }
  }

  const jobInfo = () => {
    return (
      <Card fluid textAlign="center">
      <Card.Content>
        <Card.Header>{job.company}</Card.Header>
        <hr/>
        <Card.Description><strong>Job Title: </strong>{job.job_title}</Card.Description>
        <Card.Description><strong>Status: </strong>{job.status}</Card.Description>
        <Card.Description><strong>Salary: </strong>{job.salary}</Card.Description>
        <Card.Description><strong>Location: </strong>{job.location}</Card.Description>
        <Card.Description><strong>Date Applied: </strong>{new Date(job.date_applied).toDateString('en-US', {timeZone: 'UTC'})}</Card.Description>
        <Card.Description><strong>Description: </strong>{job.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div>
          <Button basic color='green' onClick={()=>setEditing(!editing)}>
            Edit
          </Button>
          <Button basic color='red' onClick={deleteJob}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
    )
  }
  if (!job){
    return( 
    <div>
      <Dimmer active inverted>
      <Loader size='large'></Loader>
      </Dimmer>
    </div>
    )}
  
  return(
    <div>
        {!editing && jobInfo()}
        {editing && <JobForm job={job} handleUpdate={handleUpdate}/>  }
        <div style={styles.wrapper}>
          {<Notes job={job}/>}
          {<Contacts job={job}/>}
        </div>
      </div>
  )
}

const styles = {
  wrapper: {
      display: "flex",
      justifyContent: "space-evenly",
  }
};

const Wrapper = styled.div`
  padding-left: 5px;
  padding-right: 5px;
`

export default JobShow;