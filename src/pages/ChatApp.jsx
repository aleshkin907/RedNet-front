// В файле ChatApp.js
import React, { useState } from 'react';
import ChatArea from './ChatArea';
import '../styles/ChatApp.css';
import Header from '../components/Header';

const ChatApp = () => {
  const initialUsers = [
    { id: 1, name: 'dasha', messages: [], lastMessage: '' },
    { id: 2, name: 'misha', messages: [], lastMessage: '' },
    { id: 3, name: 'sam', messages: [], lastMessage: '' },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleSendMessage = (newMessage) => {
    if (newMessage.trim() === '') return;

    const updatedUsers = users.map((user) => {
      if (user.id === selectedUser.id) {
        return {
          ...user,
          messages: [...user.messages, { text: newMessage, sender: 'me' }],
          lastMessage: newMessage, // Обновляем последнее сообщение
        };
      }
      return user;
    });

    setUsers(updatedUsers);
    setSelectedUser(updatedUsers.find((user) => user.id === selectedUser.id)); // Автоматически выбираем пользователя после отправки сообщения
  };

  return (
    <>
      <Header />
      <div className="chat-app">
        <div className="user-list">
          <ul className='list'>
            {users.map((user) => (
              <li className={`user-bar ${selectedUser && selectedUser.id === user.id ? 'selected-user' : 'dont-selected'}`} key={user.id} onClick={() => handleUserClick(user)}>
                <div className="info">
                <div class="circle"></div>
                  <div className="name-message">
                    <span className='user-bar-name'>{user.name}</span>
                    <span className='user-bar-message'>{user.lastMessage}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
          {selectedUser && <ChatArea selectedUser={selectedUser} handleSendMessage={handleSendMessage} />}
      </div>
    </>
  );
};

export default ChatApp;
