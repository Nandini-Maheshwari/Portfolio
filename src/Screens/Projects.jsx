import React from 'react';
import demo from '../assets/useHub.png';
import ProjectCard from '../Components/ProjectCard.jsx';

function Projects() {
  const projectDetails = [
    {
      image: demo,
      altText: 'demo',
      description: 'Website landing page demo, designed and developed using HTML and CSS.',
      link: 'https://github.com/Nandini-Maheshwari'
    },
    // {
    //   image: demo,
    //   altText: 'project 2',
    //   description: 'Another project description.',
    //   link: 'https://github.com/your-repo2'
    // }
  ];

  return (
    <div className='py-24'>
      {projectDetails.map((project, index) => (
        <ProjectCard 
          key={index}
          image={project.image}
          altText={project.altText}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default Projects;
