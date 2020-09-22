import React, { useState } from "react";
import { navigate } from "@reach/router";
import io from "socket.io-client";
import '../static/Convergence.css'

export default function UserName(props) {
  const [socket] = useState(() => io(":4000"));
  const [newUserName, setNewUserName] = useState("");
  const [disableValue, setDisableValue] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewUser(newUserName);
    setNewUserName("");
    setDisableValue(true);
    if (newUserName) {
      return alert(`Now you are free to chat ${newUserName}!`);
    }
    //socket.emit('new user', newUserName)
  };

  return (
    <div className="username-wrapper">
      <p className="instructions">Enter a username to begin chatting!</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Username...'
          className="username-input"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button className="username-button">
          Submit
        </button>
      </form>
    </div>
  );
}
