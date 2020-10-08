import React, {useEffect, useContext} from "react";
import axios from "axios";
import {AuthContext} from "../providers/AuthProvider";


const JobShow = () => {

  const authContext = useContext(AuthContext)

  useEffect(() => {

   let res = axios.put(`/api/users/${authContext.user.id}/jobs/1`);
   console.log("response", res.data);
   
  }, []);

  return(
    <div>
      <h1>JobShow</h1>
    </div>
  )
}







export default JobShow;