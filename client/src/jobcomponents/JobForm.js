import React, {useState, useContext} from "react";
import {Form, Button} from "semantic-ui-react";
import AuthContext from "../providers/AuthProvider";
import axios from "axios";

const JobForm = ({job, ...props}) => {
  const [company, setCompany] = useState("");  
  const authContext = useContext(AuthContext)
  
  const [ formValues, setFormValues ] = useState({
    company: job.company || "",
    job_title: job.job_title || "",
    salary: job.salary || "",
    location: job.location || "",
    date_applied: new Date(job.date_applied) || "",
    description: job.description || "",
    status: job.status || "",
  })


  function handleSubmit(e) {
    e.preventDefault();
    axios
      // .post(`/api/users/${user_id}/jobs`, { company })
      .then((res) => {
      debugger;
      props.history.push("/jobBoard");
      })
      .catch((err) => {
        alert("create product broke");
      });
  }
  
  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
        name="company"
        label="Company"
        placeholder="Company"
        value={formValues.company}
        onChange={handleChange}
        required
      />
      <Form.Input
        name="job_title"
        label="Job Title"
        placeholder="Job Title"
        value={formValues.job_title}
        onChange={handleChange}
        required
      />
      <Form.Input
        name="salary"
        label="Salary"
        placeholder="Salary"
        value={formValues.salary}
        onChange={handleChange}
        required
      />
      <Form.Input
        name="location"
        label="Location"
        placeholder="Location"
        value={formValues.location}
        onChange={handleChange}
        required
      />
      <Form.Input
        name="date_applied"
        label="Date Applied"
        placeholder="Date Applied"
        value={formValues.date_applied}
        type="date"
        onChange={handleChange}
        required
      />
      <Form.Input
        name="description"
        label="Description"
        placeholder="Description"
        value={formValues.description}
        onChange={handleChange}
        required
      />
      <Button type='submit'>Submit</Button>
    </Form>
  )
};

export default JobForm;