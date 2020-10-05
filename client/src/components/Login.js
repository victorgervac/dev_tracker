import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormInput } from "../Hooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";

const Login = (props) => {
  const history = useHistory();
  const { handleLogin, setUser, authLoading, authErrors } = useContext(
    AuthContext
  );
  const email = useFormInput("test@test.com", "Email");
  const password = useFormInput("123456", "Email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email.value);
    console.log(password.value);

    handleLogin({ email: email.value, password: password.value }, history);
  };
  return (
    <div>
      {authErrors && (
        <>
          {authErrors.map((err) => (
            <p>{err}</p>
          ))}
        </>
      )}
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>{email.label}</p>
        <input autoFocus {...email} />
        <p>{password.label}</p>
        <input type="password" {...password} />
        {authLoading ? (
          <button disabled>spinner boi</button>
        ) : (
          <button type="submit">login</button>
        )}
      </form>
    </div>
  );
};

export default Login;
