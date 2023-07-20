import React from "react";
import Input from "./Input";
import Login from "./Login";

function App() {
  const isLoggedIn = false;
  return (
    <div className="container">
      {isLoggedIn ? (
        <h1>Hello</h1>
      ) : (
        <form className="form">
          <Input type="text" placeholder="user name" />
          <Input type="password" placeholder="Enter password" />
          <Login />
        </form>
      )}
    </div>
  );
}

export default App;
