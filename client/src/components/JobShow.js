import React, {useEffect, useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../providers/AuthProvider";
import {Button} from "semantic-ui-react";
import JobForm from '../jobcomponents/JobForm';

const JobShow = ({match, ...props}) => {
  const [job, setJob] = useState([]);
  const [ editing, setEditing ] = useState(false);
  const authContext = useContext(AuthContext)
  console.log(authContext);
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
      props.history.push("/")
    } catch (err) {
      alert("could not delete job")
    }
  }

  const jobInfo = () => {
    return (
      <div>
        <h1>{job.company}</h1>
          <h2>{job.job_title}</h2>
            <h3>{job.salary}</h3>
            <h3>{job.location}</h3>
            <h3>{new Date(job.date_applied).toDateString('en-US', {timeZone: 'UTC'})}</h3>
            <h3>{job.description}</h3>
            <h3>{job.status}</h3>
            <Button onClick={()=>setEditing(!editing)}>
              <p>Edit  Info</p>
            </Button>
            <Button onClick={deleteJob}>
              <p>Delete Job</p>
            </Button>
      </div>
    )
  }

  return(
    <div>
        {!editing && jobInfo()}

        { editing && <JobForm job={job} handleUpdate={handleUpdate}/>  }
      </div>

  )
}

export default JobShow;