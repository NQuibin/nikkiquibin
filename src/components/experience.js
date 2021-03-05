import React from 'react';
import { TiUserOutline, TiMap, TiCalendarOutline } from 'react-icons/ti';
import Icon from '@components/icon';
import { experiences } from '@/constants/experiences';

const Experience = () => {
  return (
    <article role="region" aria-label="where I've worked">
      <h2 className="mb-10 text-purple-700 md:text-center">
        Where I've Worked
      </h2>
      <section className="flex flex-wrap">
        {experiences.map(experience => (
          <article
            className="pb-10 md:w-1/2 md:p-10 lg:w-1/3"
            key={experience.company}
          >
            <h3 className="mb-4 text-purple-600">{experience.company}</h3>
            <h4 className="text-sm">
              <TiUserOutline className="mr-1 mb-0.5 inline-block text-xl" />
              {experience.title}
            </h4>
            <h4 className="text-sm">
              <TiMap className="mr-1 mb-0.5 inline-block text-xl" />
              {experience.location}
            </h4>
            <h4 className="mb-4 text-sm">
              <TiCalendarOutline className="mr-1 mb-0.5 inline-block text-xl" />
              {experience.duration}
            </h4>
            <p className="mb-4">{experience.description}</p>
            <section className="flex border-solid border-t-2 pt-4 border-purple-200">
              {experience.techStack.map(tech => (
                <Icon
                  title="hello"
                  key={tech}
                  icon={tech.name}
                  tooltip={tech.label}
                  className="w-8 h-8 mr-3"
                />
              ))}
            </section>
          </article>
        ))}
      </section>
    </article>
  );
};

export default Experience;
