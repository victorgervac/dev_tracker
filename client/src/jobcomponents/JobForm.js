import React, {useState, useContext} from "react";
import {Form, Button} from "semantic-ui-react";
import AuthContext from "../providers/AuthProvider";
import axios from "axios";

const JobForm = (history) => {
  const [company, setCompany] = useState("");  
  const authContext = useContext(AuthContext)



  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`/api/users/${user_id}/jobs`, { company })
      .then((res) => {
      debugger;
      history.push("/jobBoard");
      })
      .catch((err) => {
        alert("create product broke");
      });
  }
  
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
          label="Company"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      {/* <Form.Field>
      <label>Job Title</label>
      <input placeholder='Job Title' />
      </Form.Field>
      <Form.Field>
      <label>Salary</label>
      <input placeholder='Salary' />
      </Form.Field>
      <Form.Field>
      <label>Location</label>
      <input placeholder='Location' />
      </Form.Field>
      <Form.Field>
      <label>Date Applied</label>
      <input placeholder='Date Applied' />
      </Form.Field>
      <Form.Field>
      <label>Description</label>
      <input placeholder='Description' />
      </Form.Field>
      <Form.Field>
      <label>Status</label>
      <input placeholder='Status' />
      </Form.Field> */}
      <Button type='submit'>Submit</Button>
    </Form>
  )
};

export default JobForm;