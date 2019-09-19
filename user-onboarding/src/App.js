import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import UserForm from "./Form";

const userApi = "https://reqres.in/api/users_";

function App() {
  const [users, setUsers] = useState([]);
  const [serverError, setServerError] = useState("");

  const postUser = (formValues, actions) => {
    const userToPost = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    };
    axios
      .post(userApi, userToPost)
      .then(response => {
        setUsers(users.concat(response.data));
        actions.resetForm();
      })
      .catch(error => {
        setServerError(error.message);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {serverError}
        <UserForm onSubmit={postUser} />
        {users.length
          ? users.map(user => (
              <div key={user.id}>
                Name: {user.name} Email: {user.email} Password: {user.password}{" "}
              </div>
            ))
          : null}
      </header>
    </div>
  );
}

export default App;
