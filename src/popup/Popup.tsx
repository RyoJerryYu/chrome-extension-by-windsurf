import React, { useState } from 'react';
import './popup.css';

interface RequestBody {
  input: string;
}

const Popup: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await fetch('http://example.com/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input } as RequestBody),
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
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
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
};

export default Popup;
