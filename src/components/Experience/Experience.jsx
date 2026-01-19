import React from 'react';
import './Experience.css';

/**
 * Experience Component
 * Timeline layout for work experience and education
 */
const Experience = () => {
  // Work experience data
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Senior Full Stack Developer',
      organization: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications, mentoring junior developers, and implementing CI/CD pipelines. Reduced deployment time by 60% through automation.',
    },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Developer',
      organization: 'Digital Solutions Co.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React and Node.js. Collaborated with design teams to implement responsive, accessible interfaces.',
    },
    {
      id: 3,
      type: 'work',
      title: 'Junior Web Developer',
      organization: 'StartUp Labs',
      period: '2018 - 2020',
      description: 'Built responsive web applications and RESTful APIs. Gained experience in agile methodologies and version control best practices.',
    },
  ];

  // Education data
  const education = [
    {
      id: 1,
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      organization: 'State University',
      period: '2014 - 2018',
      description: 'Graduated with honors. Focused on software engineering, algorithms, and web development. Completed capstone project on real-time collaboration tools.',
    },
    {
      id: 2,
      type: 'education',
      title: 'Full Stack Web Development Certification',
      organization: 'Tech Academy Online',
      period: '2018',
      description: 'Intensive program covering modern web technologies including React, Node.js, and cloud deployment strategies.',
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-header__title">Experience & Education</h2>
          <div className="section-header__line"></div>
        </div>

        {/* Content Grid */}
        <div className="experience__content">
          {/* Work Experience Column */}
          <div className="experience__column">
            <h3 className="experience__column-title">
              <span className="experience__column-icon">💼</span>
              Work Experience
            </h3>
            <div className="timeline">
              {experiences.map((item) => (
                <div key={item.id} className="timeline__item">
                  <div className="timeline__marker"></div>
                  <div className="timeline__content">
                    <span className="timeline__period">{item.period}</span>
                    <h4 className="timeline__title">{item.title}</h4>
                    <p className="timeline__organization">{item.organization}</p>
                    <p className="timeline__description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="experience__column">
            <h3 className="experience__column-title">
              <span className="experience__column-icon">🎓</span>
              Education
            </h3>
            <div className="timeline">
              {education.map((item) => (
                <div key={item.id} className="timeline__item">
                  <div className="timeline__marker"></div>
                  <div className="timeline__content">
                    <span className="timeline__period">{item.period}</span>
                    <h4 className="timeline__title">{item.title}</h4>
                    <p className="timeline__organization">{item.organization}</p>
                    <p className="timeline__description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
