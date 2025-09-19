import React from 'react';
import "../assets/styles/TechSkill.css"

const TechSkills = () => {
  const frontendSkills = [
    { name: 'JavaScript', percentage: 70 },
    { name: 'React', percentage: 60 },
    { name: 'CSS3', percentage: 60 },
    { name: 'HTML5', percentage: 60 }
  ];

  const backendSkills = [
    { name: 'JavaScript', percentage: 70 },
    { name: 'Node.js', percentage: 70 },
    { name: 'Express.js', percentage: 70 },
    { name: 'MySQL', percentage: 60 },
   
  ];
// Barra de skill 
  const SkillBar = ({ name, percentage }) => (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-progress-container">
        <div 
          className="skill-progress-bar"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="tech-skills-container">
      <h3 className="tech-skills-title">My current technologies</h3>
      <div className="tech-skills-grid">
        {/* Frontend Section */}
        <div className="skill-category">
          <h4 className="skill-category-title frontend-title">
            Frontend
          </h4>
          <div className="skills-list">
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div className="skill-category">
          <h4 className="skill-category-title backend-title">
            Backend
          </h4>
          <div className="skills-list">
            {backendSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSkills;