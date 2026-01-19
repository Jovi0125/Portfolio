import React from 'react';
import './About.css';

/**
 * About Component
 * Professional bio and skills summary section
 */
const About = () => {
  // Skills data organized by category
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Figma'],
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about__container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-header__title">About Me</h2>
          <div className="section-header__line"></div>
        </div>

        {/* About Content */}
        <div className="about__content">
          {/* Bio */}
          <div className="about__bio">
            <p className="about__text">
              I'm a passionate Full Stack Developer with over 5 years of experience 
              building modern web applications. I specialize in creating scalable, 
              performant solutions using cutting-edge technologies.
            </p>
            <p className="about__text">
              My approach combines clean code practices with a keen eye for design, 
              ensuring that every project I work on is not only functional but also 
              delivers an exceptional user experience.
            </p>
            <p className="about__text">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="about__skills">
            <h3 className="about__skills-title">Technical Skills</h3>
            <div className="about__skills-grid">
              {skillCategories.map((category) => (
                <div key={category.title} className="skill-category">
                  <h4 className="skill-category__title">{category.title}</h4>
                  <ul className="skill-category__list">
                    {category.skills.map((skill) => (
                      <li key={skill} className="skill-category__item">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
