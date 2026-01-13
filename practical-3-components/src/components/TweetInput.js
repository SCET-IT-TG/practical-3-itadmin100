import React, { useState } from 'react';

const TweetInput = () => {
  // 1. Initialize state for the input text
  const [text, setText] = useState('');

  // 2. Define constants and derived logic
  const maxLength = 50;
  const currentLength = text.length;
  const isOverLimit = currentLength > maxLength;

  // 3. Logic: Button disabled if empty OR if text is too long
  const isButtonDisabled = currentLength === 0 || isOverLimit;

return (
    <div style={{ margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center' }}>Tweet Input</h2>

        {/* Input Area */}
        <textarea
            placeholder="What's happening?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
                width: '100%',
                height: '100px',
                padding: '10px',
                boxSizing: 'border-box',
                border: isOverLimit ? '2px solid red' : '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '16px',
                fontFamily: 'inherit'
            }}
        />

        {/* Character Counter */}
        <div style={{
            textAlign: 'right',
            marginTop: '5px',
            fontWeight: 'bold',
            color: isOverLimit ? 'red' : '#333'
        }}>
            {currentLength} / {maxLength}
        </div>

        {/* Tweet Button */}
        <button
            disabled={isButtonDisabled}
            style={{
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: isButtonDisabled ? '#ccc' : '#1da1f2',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
                fontWeight: 'bold',
                width: '100%'
            }}
        >
            Tweet
        </button>
    </div>
);
};

export default TweetInput;