import Axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../providers/AuthProvider"

const FetchUser = (props )=> {
    const [loaded, setLoaded] = useState(false)

    const { setUser, authenticated }= useContext(AuthContext)

    useEffect(()=>{
        checkUser()
    },[])

    const checkUser = async() =>{
        if(authenticated || !localStorage.getItem("access-token")){
            setLoaded(true);
            return;
        }try{
            const res = await Axios.get("/api/auth/validate_token");
            setUser(res.data.data)
        }catch (err){
            alert("No User")
        }finally{
            setLoaded(true)
        }
    }
    return  loaded ? props.children : null
    
}

export default FetchUser;