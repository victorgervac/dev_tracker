import React, {useEffect, useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../providers/AuthProvider";
import {Button} from "semantic-ui-react";
import JobForm from '../jobcomponents/JobForm';
import Notes from "../jobcomponents/Notes";
import Contacts from "../Contact/Contacts";

const JobShow = ({match}) => {
  const [job, setJob] = useState(null);
  const [ editing, setEditing ] = useState(false);
  const authContext = useContext(AuthContext)
  const id = match.params.id
  //console.log(authContext);

  const getJob = async (job) => {
    try {
      let res = await axios.get(`/api/users/${authContext.user.id}/jobs/${id}`);
      console.log(res.data);
      setJob(res.data);
    } catch (err) {
      console.log(err.response);
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

  const jobInfo = () => {
    return (
      <div>
        <h1>{job.company}</h1>
          <h2>{job.job_title}</h2>
            <h3>{job.salary}</h3>
            <h3>{job.location}</h3>
            <h3>{new Date(job.date_applied).toDateString()}</h3>
            <h3>{job.description}</h3>
            <h3>{job.status}</h3>
      </div>
    )
  }

  return(
    <div>
      {job && !editing && jobInfo()}
        <Button onClick={()=>setEditing(!editing)}>
            <p>Edit  Info</p>
        </Button>
        { editing && <JobForm job={job} handleUpdate={handleUpdate}/>  }
        {job && <Notes job={job}/>}

       {job && <Contacts job={job}/>}
    
      </div>
  )
}

export default JobShow;