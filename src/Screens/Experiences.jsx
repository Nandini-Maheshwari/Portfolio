import React from 'react';
import CertificateCard from '../Components/CertificateCard.jsx';

function Experiences() {

  const certificates = [
    {
      title: 'Azure DevDay Cloud Native Tour',
      issuedDate: "March'24",
      link: 'https://reskilll.com/certificate/azure/cloudnativetour/e3cc6e82b8',
      linkText: 'View Certificate'
    },
    {
      title: 'Postman API Fundamentals Student Expert',
      issuedDate: "Feb'24",
      link: 'https://badgr.com/public/assertions/vdoNl5zuQCS4BXMNAJ6S1A?identity__email=nandinim1204@gmail.com',
      linkText: 'View Badge'
    },
    {
      title: 'Social Summer Of Code S2 Participant',
      issuedDate: "May'23",
      link: 'https://verification.givemycertificate.com/v/0a8cc3ea-bf51-4d13-be84-c09ff4c1b0a3',
      linkText: 'View Certificate'
    },
    {
      title: 'Master C++ Programming From Beginner To Advance - C++ Course',
      issuedDate: "Sept'22",
      link: 'https://www.udemy.com/certificate/UC-b25d0919-2b4e-40dd-9115-82722d29954f/',
      linkText: 'View Certificate'
    }
  ];

  const internships = [
    {
      title: 'CISCO Virtual Internship Program In Cybersecurity',
      issuedDate: "August'24",
      link: 'https://drive.google.com/file/d/10hVyflk_nxxLNpHAbpEO1_nn0i7vWqrX/view?usp=sharing',
      linkText: 'View Certificate'
    },
    {
      title: 'Full Stack Developer Intern At Corazor Technology Pvt Ltd',
      issuedDate: "July'24",
      link: 'https://drive.google.com/file/d/1XCRfOBtPPFX7AXQVQ6ww6tVjYpyimbdv/view?usp=sharing',
      linkText: 'View Certificate'
    }
  ];

  return (
    <div className='py-16'>
      <div className='pb-16'>
        <p className='text-justify text-4xl text-white pb-6'>Internships</p>
        {internships.map((cert, index) => (
          <CertificateCard 
            key={index}
            title={cert.title}
            issuedDate={cert.issuedDate}
            link={cert.link}
            linkText={cert.linkText}
          />
        ))}
      </div>
      <div>
        <p className='text-justify text-4xl text-white pb-6'>Certificates & Badges</p>
        {certificates.map((cert, index) => (
          <CertificateCard 
            key={index}
            title={cert.title}
            issuedDate={cert.issuedDate}
            link={cert.link}
            linkText={cert.linkText}
          />
        ))}
      </div>
    </div>
  );
}

export default Experiences;