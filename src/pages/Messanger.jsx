// import React from "react";

// function Messanger(){

// }

// export default Messanger;
import React, { useState } from 'react';

// Компонент для отображения переписки
const ChatArea = ({ selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const updatedMessages = [...messages, { text: newMessage, sender: 'me' }];
    setMessages(updatedMessages);
    setNewMessage('');
  };

  return (
    <div className="chat-area">
      <div className="user-info">{selectedUser}</div>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Введите сообщение..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Отправить</button>
      </div>
    </div>
  );
};

// Главный компонент приложения
// const ChatApp = () => {
//   const users = ['Пользователь 1', 'Пользователь 2', 'Пользователь 3'];
//   const [selectedUser, setSelectedUser] = useState(users[0]);

//   return (
//     <div className="chat-app">
//       <div className="user-list">
//         <h2>Список пользователей</h2>
//         <ul>
//           {users.map((user, index) => (
//             <li key={index} onClick={() => setSelectedUser(user)}>
//               {user}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <ChatArea selectedUser={selectedUser} />
//     </div>
//   );
// };

// export default ChatApp;
