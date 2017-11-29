import React from 'react';
import './ChatList.css';

export default ({ chats }) => (
  <ul>
    {chats.map(chat => {
      return (
        <li key={chat.username + '-' + chat.message}>
          <strong>{chat.username}</strong>: {chat.message}
        </li>
      );
    })}
  </ul>
);
