import React, {useState, useContext} from "react";
import {Form, Button, Dropdown} from "semantic-ui-react";
import {AuthContext} from "../providers/AuthProvider";
import axios from "axios";

const JobForm = ({job={}, location={}, ...props}) => {
  const { status } = location.state || ""
  const authContext = useContext(AuthContext)
  
  const [ formValues, setFormValues ] = useState({
    company: job.company || "",
    job_title: job.job_title || "",
    salary: job.salary || "",
    location: job.location || "",
    date_applied: job.date_applied || "",
    description: job.description || "",
    status: job.status || status,
  })

  function addJob() {
    axios.post(`/api/users/${authContext.user.id}/jobs`, {
        company: formValues.company,
        job_title: formValues.job_title,
        salary: formValues.salary,
        location: formValues.location,
        date_applied: formValues.date_applied,
        description: formValues.description,
        status: formValues.status,
      })
      .then((res) => {
        props.history.push(`/`)

      })
      .catch(console.log)
    }

  function editJob() {
    axios
      .put(`/api/users/${authContext.user.id}/jobs/${job.id}`, { 
        company: formValues.company,
        job_title: formValues.job_title,
        salary: formValues.salary,
        location: formValues.location,
        date_applied: formValues.date_applied,
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

  const handleDrop = (e, data) => {
    setFormValues({...formValues, status: data.value})
  }

  const statusOptions = [
    {
      key: 'wishlist',
      text: 'wishlist',
      value: 'wishlist',
    },
    {
      key: 'applied',
      text: 'applied',
      value: 'applied',
    },
    {
      key: 'interviewed',
      text: 'interviewed',
      value: 'interviewed',
    },
    {
      key: 'offered',
      text: 'offered',
      value: 'offered',
    },
    {
      key: 'rejected',
      text: 'rejected',
      value: 'rejected',
    }
  ]

  return(
    <Form onSubmit={handleSubmit} status={status}>
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
      <Form.Select
      placeholder='Select Status'
      label="Status"
      fluid
      selection
      defaultValue={formValues.status}
      options={statusOptions}
      onChange={handleDrop}
      />
      <Button type='submit'>Submit</Button>
    </Form>
  )
};

 export default JobForm;