import React from 'react';

export default ({ text, handleTextChange }) => (
  <input
    type="text"
    value={text}
    placeholder="chat here..."
    onChange={handleTextChange}
    onKeyDown={handleTextChange}
  />
);
