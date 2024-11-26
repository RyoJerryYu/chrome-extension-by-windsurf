import React, { useState } from 'react';

function Popup() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://example.com/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Clear input after successful submission
      setInput('');
      alert('Successfully sent!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup-container">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your text here..."
        rows={4}
        className="input-textarea"
      />
      <button
        onClick={handleSubmit}
        disabled={loading || !input.trim()}
        className="submit-button"
      >
        {loading ? 'Sending...' : 'Send'}
      </button>
    </div>
  );
}

export default Popup;
