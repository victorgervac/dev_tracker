import React, {useState, useContext} from "react";
import {Form, Button} from "semantic-ui-react";
import {AuthContext} from "../providers/AuthProvider";
import axios from "axios";

const JobForm = ({job={}, ...props}) => {
  const authContext = useContext(AuthContext)
  
  function formatDate(date) {
    var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    
    if (month.length < 2) 
    month = '0' + month;
    if (day.length < 2) 
    day = '0' + day;
    
    return [year, month, day].join('-');
  }



  const [ formValues, setFormValues ] = useState({
    company: job.company || "",
    job_title: job.job_title || "",
    salary: job.salary || "",
    location: job.location || "",
    date_applied: formatDate(job.date_applied) || "",
    description: job.description || "",
    status: job.status || "",
  })

  
  // let datefix = formatDate(job.date_applied)
  // console.log("date: ", datefix)

  async function addJob() {
    try {
      let res = await axios.post(`/api/users/${authContext.user.id}/jobs`, {
        company: formValues.company,
        job_title: formValues.job_title,
        salary: formValues.salary,
        location: formValues.location,
        date_applied: formValues.date_applied,
        description: formValues.description,
        status: formValues.status,
      });
      props.history.push(`/`);
    } catch (err) {
      console.log(err);
    }
  }

  function editJob() {
    axios
      .put(`/api/users/${authContext.user.id}/jobs/${job.id}`, { 
        company: formValues.company,
        job_title: formValues.job_title,
        salary: formValues.salary,
        location: formValues.location,
        date_applied: formValues.date_applied,
        //may have to create new Date(formValues.date_applied)
        description: formValues.description,
        status: formValues.status,
      })
      .then((res) => {
        props.handleUpdate(formValues)
      })
      .catch((err) => {
        alert("error in update");
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (job.id) {
      editJob();
    } else {
      addJob();
    }
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