import React, { useState, useEffect, useContext } from "react";
import JobCard from "./JobCard";
import axios from "axios";
import {AuthContext} from "../providers/AuthProvider";


const JobBoard = () => {
  const [jobs, setJobs] = useState([])

  const authContext = useContext(AuthContext)
  
  useEffect(() => {
    getJobs()
  },[])

  const getJobs = async () => {
    try {
      let res = await axios.get(`/api/users/${authContext.user.id}/jobs`);
      console.log("response", res.data);
      setJobs(res.data);
    } catch (error) {
      alert("Error locating your jobs");
    }
  };

  
  
  return(
    <div>
      <h1>JobBoard</h1>
      {jobs.map(job => (
        <JobCard key={job.id} job={job}/>
      ))}
    </div>
  )
} 

export default JobBoard