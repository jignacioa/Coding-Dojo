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
      return alert("Now you are free to chat!");
    }
    //socket.emit('new user', newUserName)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        placeholder="Enter a username..."
          className="username-input"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button className="username-button">
          Enter Username
        </button>
      </form>
    </div>
  );
}
