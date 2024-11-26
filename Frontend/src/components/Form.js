import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({ category: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ category: '', description: '' }); // Clear form
  };

  return (
    <div id="form" className="form">
      <h2>Submit Your Concern</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select Category:
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="">Choose...</option>
            <option value="academic">Academic Stress</option>
            <option value="social">Social Anxiety</option>
            <option value="personal">Personal Issues</option>
          </select>
        </label>
        <label>
          Describe Your Concern:
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Write your concern here..."
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
