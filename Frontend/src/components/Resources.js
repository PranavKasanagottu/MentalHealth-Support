import React from 'react';
import './Resources.css';

const Resources = () => {
  const resources = [
    { title: 'Dealing with Exam Stress', link: 'https://example.com/exam-stress' },
    { title: 'Social Anxiety Tips', link: 'https://example.com/social-anxiety' },
    { title: 'Mindfulness Practices', link: 'https://example.com/mindfulness' },
  ];

  return (
    <div id="resources" className="resources">
      <h2>Helpful Resources</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
