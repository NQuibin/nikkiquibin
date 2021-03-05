import React from 'react';
import { experiences } from '@constants/experiences';

const ExperienceSection = () => {
  return (
    <article>
      <h2 className="text-center">Where I've Worked</h2>
      {experiences.map(experience => (
        <div key={experience.company}>
          <h3>
            {experience.title} at {experience.company}
          </h3>
          <h4>{experience.location}</h4>
          <h4>{experience.duration}</h4>
          <p>{experience.description}</p>
        </div>
      ))}
    </article>
  );
};

export default ExperienceSection;
