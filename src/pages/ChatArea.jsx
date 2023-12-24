// В файле ChatArea.js
import React, { useState, useEffect } from 'react';
import "../styles/ChatArea.css";
import send from '../images/Send.svg';

const ChatArea = ({ selectedUser, handleSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendButtonClick = () => {
    handleSendMessage(newMessage);
    setNewMessage('');
  };

  useEffect(() => {
    // Скроллим вниз, чтобы новое сообщение было видно
    const messagesContainer = document.getElementById('messages-container');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }, [selectedUser.messages]);

  return (
    <div className="chat-area">
      <div className="chat-area-header">
        <div className="circle"></div>
      <div className="chat-area-header-info">
        <div className="user-info">{selectedUser.name}</div>
        <span className='last-visit'>был(а) в 13:14</span>
      </div>
      </div>
      <div className="down">
        <div id="messages-container" className="messages">
          {selectedUser.messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <span className='time'>14:23</span>
              <span className='text-message'>{message.text}</span>
              
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            className='m-input'
            type="text"
            placeholder="Введите сообщение..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendButtonClick}><img src={send} alt="logotype" /></button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
