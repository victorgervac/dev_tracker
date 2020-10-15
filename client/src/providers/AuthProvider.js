import Axios from "axios";
import React, { useState } from "react";

export const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [authErrors, setAuthErrors] = useState(null);

  const handleRegister = async (user, history) => {
    try {
      setAuthLoading(true);
      setAuthErrors(null);

      let res = await Axios.post("/api/auth", user);
      setUser(res.data.data);
      history.push("/");
    } catch (err) {
      setAuthErrors(err);
      alert("Error: failed to register");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogin = async (user, history) => {
    try {
      setAuthLoading(true);
      setAuthErrors(null);

      let res = await Axios.post("/api/auth/sign_in", user);
      setUser(res.data.data);
      history.push("/");
    } catch (err) {
      setAuthErrors(err.response.data.errors);
      alert("Error: failed to log in");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async (history) => {
    try {
      let res = await Axios.delete("/api/auth/sign_out");
      setUser(null);
      history.push("/login");
    } catch (err) {
      alert("Error: failed to log out");
    }
  };
  const handleUpdate = async (id,user,history) =>{
    // try {
    //   let res = await Axios.put(`/api/users/${id}`,user)
    //   console.log(res.data.data)
    //   setUser(res.data.data)
    //   history.push("/accountSettings")
    // }catch(err){
    //   alert("can not update user")
    // }
    Axios.put(`/api/users/${id}`,user)
      .then(res=> {
        setUser(res.data)
        history.push("/accountSettings")
      })
      .catch(console.log)

  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: user !== null,
        authLoading,
        authErrors,
        setUser,
        handleRegister,
        handleLogin,
        handleLogout,
        handleUpdate
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
