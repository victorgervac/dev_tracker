import React from "react";
import { useHistory } from "react-router-dom";

const Card = ({ opacity = 1, job_title, company }) => {
  const history = useHistory();
  const naviagte = () => {
    console.log("navigate");
    // /jobs/1
    history.push("/jobs/1");
  };
  return (
    <div
      onClick={naviagte}
      className="card"
      style={{
        opacity,
        margin: 5,
        borderRadius: 2,
        marginBottom: 0,
      }}
    >
      <div
        style={{ padding: "8px", color: "white", backgroundColor: "#9F35FE" }}
      >
        <p style={{ fontSize: "12px", fontWeight: 700 }}>{job_title}</p>
        <p style={{ fontSize: "8px", fontWeight: 300 }}>{company}</p>
      </div>
      <footer className="card-footer" />
    </div>
  );
};

export default Card;
