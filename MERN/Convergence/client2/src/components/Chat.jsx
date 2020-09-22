import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { navigate } from "@reach/router";
import axios from "axios";
import '../static/Convergence.css';

export default function Chat(props) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket] = useState(() => io(":4000"));
  const [name, setName] = useState(null);

  // useEffect(() => {
  //    axios.get('http://localhost:4000/api/users')
  //      .then(response => console.log(response))
  //      //.catch(() => navigate('/'));
  //   }, []);

  useEffect(() => {
    socket.on("name", (newUser) => {
      setName(newUser);
    });
    socket.on("updated thread", (data) =>
      setMessages((prevMessages) => {
        return [data, ...prevMessages];
      })
    );
  }, []);

  //if (name === null) return 'Loading...'

  function handleSubmit(e) {
    e.preventDefault();
    socket.emit("new message", {
      message: newMessage,
      user: props.user,
    });
    setNewMessage("");
  }
  return (
    <>
    <div>
    <h1 className="room-header">Room</h1>
    <div className="chat-window">
      {messages.slice(0).reverse().map((message, i) => (
        <div className="chat-bubble">
        <p className="username">{message.user}</p>
        <p className="message" key={i}>
          {" "}
          {message.message}
        </p>
        </div>
      ))}
      </div>
      <div className="form-wrapper">
      <form className="message-form" onSubmit={handleSubmit}>
        <input
        placeholder="Type message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button>
          Send
        </button>
      </form>
      </div>
      </div>
    </>
  );
}
