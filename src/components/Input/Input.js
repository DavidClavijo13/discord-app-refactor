import React from 'react';
import './Input.css';

const Input = ({ setMessage, message, sendMessage }) => {
  return (
    <form className='form'>
      <input
        className='input'
        placeholder='Type a message...'
        type='text'
        value={message}
        onChange={event => setMessage(event.target.value)}
        onKeyPress={event =>
          event.key === 'Enter' ? sendMessage(event) : null
        }
      />
      <button className='sendButton' onClick={event => sendMessage(event)}>
        Send
      </button>
    </form>
  );
};

export default Input;
