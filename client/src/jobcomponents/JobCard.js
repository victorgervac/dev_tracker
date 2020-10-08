import React, { useState, useEffect, useContext}  from "react";
import axios from "axios";
import {Card} from 'semantic-ui-react';
import {AuthContext} from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const JobCard = () => {
  const [jobs, setJobs] = useState([]);
  
  const authContext = useContext(AuthContext)

  // const jobs = async (id) => {
  //   let res = axios.put(`/api/jobs/${id}`);
  // };
  
  const getJobs = async () => {
    try {
      let res = await axios.get(`/api/users/${authContext.user.id}/jobs`);
      console.log(res.data.company);
      setJobs(res.data);
    } catch (error) {
      alert("Error getting jobs");
    }
  }

  useEffect(() => {
    getJobs();
  },[])
  


  const renderJobs = (status) => {
      return(
        <div>
         
        {jobs.filter(j =>j.status == status).map((job) => 
          <Card key={job.id}  job={job}>
          <Card.Content>
            <Card.Header>
              {job.job_title}
            </Card.Header>
            <Card.Description>{job.company}</Card.Description>
            <Card.Description>{job.status}</Card.Description>

          </Card.Content>
          <Link to="api/jobs/${id}" />
          </Card> 
          )}
         </div>
      )
  };

  

  return(
    <div>
    <div>
      <h1>rejected</h1>
      {renderJobs("rejected")}
    </div>
    
    <div>
      <h1>wishlist</h1>
      {renderJobs("wishlist")}</div>
    </div>
  );
};

export default JobCard;