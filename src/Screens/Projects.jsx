import React from 'react';
import demo from '../assets/useHub.png';
import music from '../assets/musicNextJS.png';
import starSky from '../assets/XRStarSky.jpg';
import devTube from '../assets/devTube.jpg';
import ProjectCard from '../Components/ProjectCard.jsx';

function Projects() {
  const projectDetails = [
    {
      image: devTube,
      altText: 'Project',
      description: 'Designed a scalable backend for YouTube using Node.js, Express, and MongoDB.',
      link: 'https://github.com/Nandini-Maheshwari/devTube'
    },
    {
      image: music,
      altText: 'Project',
      description: 'An experimental Next.js website showcasing the integration of Aceternity UI and Shadcn for enhanced user experience and design.',
      link: 'https://github.com/Nandini-Maheshwari/music-nextjs'
    },
    {
      image: demo,
      altText: 'Project',
      description: 'Website landing page demo, designed and developed using HTML and CSS.',
      link: 'https://github.com/Nandini-Maheshwari'
    },
    {
      image: starSky,
      altText: 'Project',
      description: 'A VR based informative game on sapce biology. Among NASA Space Apps 2022 Global Nominees.',
      link: 'https://github.com/Nandini-Maheshwari/space-superhero'
    },
  ];

  return (
    <div className='pt-24'>
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