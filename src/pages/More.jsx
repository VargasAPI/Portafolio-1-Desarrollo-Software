import React, { useState } from 'react';
import '../assets/styles/More.css'; // Make sure to import the CSS

const More = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section className="more-section" id="more">
      <h2 className="more-title">More About Me</h2>
        {/* Botón regresar */}
      <button className="back-button" onClick={() => window.history.back()}>
        <span className="back-arrow">←</span>
        <span className="back-text">Regresar</span>
      </button>

      {/* Technical Blog */}
      <div className={`accordion-item ${activeSection === 'blog' ? 'active' : ''}`}>
        <div 
          className="accordion-header"
          onClick={() => toggleSection('blog')}
        >
          <h3 className="accordion-title">
            Technical Blog
          </h3>
          <span className="accordion-icon">▼</span>
        </div>
        <div className="accordion-content">
          <p className="accordion-text">
            I share my experiences and knowledge about web development, 
            programming, and emerging technologies. Here you'll find tutorials, 
            technical insights, and solutions to common problems I've encountered 
            in my projects.
          </p>
          <ul className="accordion-list">
            <li>Frontend Development with React and modern technologies</li>
            <li>Performance optimization in web applications</li>
            <li>Best practices in software architecture</li>
            <li>Tools and frameworks I use daily</li>
          </ul>
          <div className="accordion-tags">
            <span className="accordion-tag">JavaScript</span>
            <span className="accordion-tag">React</span>
            <span className="accordion-tag">CSS</span>
            <span className="accordion-tag">Web Development</span>
          </div>
        </div>
      </div>

      {/* Personal Projects */}
      <div className={`accordion-item ${activeSection === 'projects' ? 'active' : ''}`}>
        <div 
          className="accordion-header"
          onClick={() => toggleSection('projects')}
        >
          <h3 className="accordion-title">
            Personal Projects
          </h3>
          <span className="accordion-icon">▼</span>
        </div>
        <div className="accordion-content">
          <p className="accordion-text">
            I develop personal projects to explore new technologies and 
            solve interesting problems. Each project is an opportunity to 
            learn and experiment with different tools and methodologies.
          </p>
          <ul className="accordion-list">
            <li>Interactive web applications with React and Next.js</li>
            <li>Productivity and automation tools</li>
            <li>Experiments with APIs and external services</li>
            <li>Contributions to open source projects</li>
          </ul>
          <div className="accordion-tags">
            <span className="accordion-tag">React</span>
            <span className="accordion-tag">Node.js</span>
            <span className="accordion-tag">API Development</span>
            <span className="accordion-tag">Open Source</span>
          </div>
        </div>
      </div>

      {/* Hobbies & Interests */}
      <div className={`accordion-item ${activeSection === 'hobbies' ? 'active' : ''}`}>
        <div 
          className="accordion-header"
          onClick={() => toggleSection('hobbies')}
        >
          <h3 className="accordion-title">
            Hobbies & Interests
          </h3>
          <span className="accordion-icon">▼</span>
        </div>
        <div className="accordion-content">
          <p className="accordion-text">
            Outside the world of code, I enjoy various activities that 
            help me maintain a healthy balance and inspire me creatively. 
            I firmly believe that the best developers are those who 
            cultivate diverse interests.
          </p>
          <ul className="accordion-list">
            <li>Reading books about technology, science fiction, and personal development</li>
            <li>Digital photography and image editing</li>
            <li>Exploring new tools and emerging technologies</li>
            <li>Gaming and game mechanics analysis</li>
            <li>Learning different languages and cultures</li>
          </ul>
          <div className="accordion-tags">
            <span className="accordion-tag">Reading</span>
            <span className="accordion-tag">Photography</span>
            <span className="accordion-tag">Gaming</span>
            <span className="accordion-tag">Continuous Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default More;