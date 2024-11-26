import React, { useState } from 'react';
import './MoodTracker.css';

const MoodTracker = () => {
  const [mood, setMood] = useState('');
  const [history, setHistory] = useState([]);

  const handleMoodSubmit = () => {
    if (mood) {
      setHistory([...history, { mood, date: new Date().toLocaleDateString() }]);
      setMood(''); // Clear mood input
    }
  };

  return (
    <div id="mood-tracker" className="mood-tracker">
      <h2>Mood Tracker</h2>
      <div>
        <label>
          How are you feeling today?
          <select value={mood} onChange={(e) => setMood(e.target.value)}>
            <option value="">Choose...</option>
            <option value="happy">Happy</option>
            <option value="neutral">Neutral</option>
            <option value="sad">Sad</option>
            <option value="anxious">Anxious</option>
          </select>
        </label>
        <button onClick={handleMoodSubmit}>Submit Mood</button>
      </div>
      <div className="history">
        <h3>Mood History</h3>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              {entry.date}: {entry.mood}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoodTracker;
