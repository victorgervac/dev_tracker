import React, { useState, useEffect}  from "react";
import axios from "axios";
import { Header, Card} from 'semantic-ui-react';

const JobCard = (props) => {
  const [job, setJob] = useState([]);
  
  const jobs = async (id) => {
    let res = axios.put(`/api/jobs/${id}`);
  };
  
  
  const renderJob = () =>{
    
    if (jobs) {
      return(
        <div> 
        {/* {props.job_title} */}
          <Card key={job.id}>
          <Card.Content>
            <Card.Header>
              {job.job_title}
            </Card.Header>
            <Card.Description>{job.company}</Card.Description>
          </Card.Content>
          </Card> 
         </div>

      )
    }return <Header>No Jobs</Header>
  };

  return(
    <div>
      {renderJob()}
    </div>
  );
};

export default JobCard;