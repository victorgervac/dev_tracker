import React from "react";
import {useHistory} from "react-router-dom";

const Card = ({opacity=1, job_title, company, id}) => {
  const history = useHistory();
  const navigate = () => {
    history.push(`/jobs/${id}`)
  }
  return (
    <div onClick={navigate} className="card" style={{
      opacity,
      margin: 5,
      borderRadius: 2,
      marginBottom: 0,
    }}>
      <div style={{ padding: "8px", color: "white", backgroundColor: "#9F35FE" }}>
        <p style={{ fontSize: "12px", fontWeight: 700 }}>{job_title}</p> 
        <p style={{ fontSize: "8px", fontWeight: 300 }}>{company}</p>
      </div>
      <footer className="card-footer" />
    </div>
  )
}

export default Card;