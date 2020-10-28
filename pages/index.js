import React, { useState } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-scroll';
import { motion, AnimateSharedLayout } from 'framer-motion';
import ScrollLock from 'react-scrolllock';

import { switchTheme } from '../store';
import IndexStyle from '../styles/pages';
import Skill from '../components/Skill/Skill';
import Experience from '../components/Experience/Experience';
import ContactForm from '../components/ContactForm/ContactForm';

import me from '../public/static/img/foto-ironhack.png';
import logoIH from '../public/static/img/ih-logo.png';
import logoInnoCV from '../public/static/img/innocv-logo.png';
import logoRubenVillar from '../public/static/img/ruben-villar-logo.png';
import logoRubenVillarDark from '../public/static/img/ruben-villar-logo-dark.png';
import logoRubenVillarOld from '../public/static/img/ruben-villar-logo-old.png';
import logoTailor from '../public/static/img/tailor-logo.png';
import logoWH from '../public/static/img/wh-logo.png';
import Linkedin from '../public/static/svg/linkedin.svg';
import Github from '../public/static/svg/github.svg';
import Moon from '../public/static/svg/moon.svg';
import Sun from '../public/static/svg/sun.svg';
import Logo from '../public/static/svg/logo-horizontal.svg';
import FrontEndIcon from '../public/static/svg/front-end-icon.svg';
import BackEndIcon from '../public/static/svg/back-end-icon.svg';
import OthersIcon from '../public/static/svg/others-icon.svg';

const Index = () => {
  const isDarkTheme = useSelector((state) => state.isDarkTheme);
  const [displaySkill, setDisplaySkill] = useState(undefined);
  const [displayExperience, setDisplayExperience] = useState(undefined);
  const dispatch = useDispatch();

  const handleOpenSkill = (name) => {
    if (!displaySkill || displaySkill !== name) {
      setDisplaySkill(name);
    }
  };

  const handleCloseSkill = () => {
    setDisplaySkill(undefined);
  };

  const handleSwitchTheme = () => {
    localStorage.setItem('theme', isDarkTheme ? 'light' : 'dark');
    dispatch(switchTheme());
  };

  const skills = [
    {
      icon: <FrontEndIcon />,
      title: 'Front<br/>End',
      sections: [
        {
          title: 'JavaScript',
          text: 'React · Redux · Next.js · ES6 · TypeScript'
        },
        {
          title: 'HTML & CSS',
          text:
            'Responsive Web Design · SASS · Bootstrap · Tailwind CSS · Styled Components · Material  UI · PWA'
        }
      ]
    },
    {
      icon: <BackEndIcon />,
      title: 'Back<br/>End',
      sections: [
        {
          text:
            'Node.js · Express.js · MongoDB · Mongoose · MySQL · TypeORM · Heroku · Amazon Web Services (AWS) · Funciones Serverless · Integración de APIs de terceros · APIs RESTful'
        }
      ]
    },
    {
      icon: <OthersIcon />,
      title: 'Otros',
      sections: [
        {
          text:
            'CMS Headless (Strapi) · Generación de sitios estáticos (11ty) · Git · Sketch · Figma · Prototipado UI · WordPress'
        }
      ]
    }
  ];

  const experiences = [
    {
      image: logoWH,
      company: 'Wheel Hub',
      freelance: true,
      period: '04/20 - 06/20',
      description:
        'Desarrollador web frontend en un proyecto de desarrollo de una aplicación de gestión logística.',
      technologies: 'React.js, HTML5, CSS3'
    },
    {
      image: logoTailor,
      company: 'Tailor',
      freelance: true,
      period: '10/19 - 05/20',
      description:
        'Desarrollador web freelance en varios proyectos usando React / Next.js en el frontend y Express.js y MongoDB en el backend',
      technologies: 'React.js, MongoDB, Node.JS, Express, Next.js'
    },
    {
      image: logoRubenVillar,
      imageDark: logoRubenVillarDark,
      company: 'Rubén Villar',
      freelance: true,
      period: '10/19 - actualmente',
      description: 'Desarrollador web freelance',
      technologies:
        'React.js, HTML5, CSS3, Node.js, AWS, MongoDB, Express, WordPress, Next.js, 11ty'
    },
    {
      image: logoInnoCV,
      company: 'InnoCV',
      freelance: false,
      period: '06/19 - 10/19',
      description: 'Desarrollador web frontend',
      technologies: 'Angular, HTML5, CSS3'
    },
    {
      image: logoIH,
      company: 'Ironhack',
      freelance: false,
      period: '03/19 -05/19',
      description:
        'Miembro del equipo de Formación del Bootcamp de Web. Funciones principales: • Evaluación y control de tareas desarrolladas por los alumnos. • Tutoría de proyectos Web. • Definición de materiales de apoyo en el Bootcamp.',
      technologies: 'React.js, HTML5, CSS3, Express, Node.js, MongoDB'
    },
    {
      image: logoRubenVillarOld,
      company: 'Rubén Villar',
      freelance: true,
      period: '12/13 - 01/19',
      description: 'Diseñador web especializado en WordPress',
      technologies: 'WordPress, HTML5, CSS3'
    }
  ];
  return (
    <div>
      <Head>
        <title>Rubén Villar Grela - Desarrollador Front End</title>
        <link rel='icon' href='/favicon.png' />

        <meta property='og:type' content='article' />
        <meta property='og:title' content='Rubén Villar' />
        <meta
          property='og:description'
          content='Sitio web de Rubén Villar Grela, desarrollador web freelance'
        />
        <meta
          property='og:image'
          content='https://rubenvillar.net/og-image.png'
        />
        <meta property='og:url' content='https://rubenvillar.net' />
        <meta
          property='og:site_name'
          content='Rubén Villar Grela - Desarrollador Front End'
        />

        <meta name='twitter:title' content='Rubén Villar' />
        <meta
          name='twitter:description'
          content='Sitio web de Rubén Villar Grela, desarrollador web freelance'
        />
        <meta
          name='twitter:image'
          content='https://rubenvillar.net/og-image.png'
        />
        <meta name='twitter:site' content='@rubenvillarnet' />
        <meta name='twitter:creator' content='@rubenvillarnet' />

        <meta
          name='google-site-verification'
          content='P2cXUGzjFg-sKr53fsRrT7HoM9vPikxmmPHSFSdJANc'
        />
      </Head>
      <ScrollLock isActive={!!displaySkill} />
      <IndexStyle isDarkTheme={isDarkTheme}>
        <button
          className='switch-mode'
          type='button'
          onClick={handleSwitchTheme}
        >
          <Sun />
          <div className='switch'>
            <motion.div
              className='handle'
              layout
              transition={{
                type: 'spring',
                stiffness: 700,
                damping: 30
              }}
            />
          </div>
          <Moon />
        </button>
        <div className='top-area container'>
          <Logo className='my-logo' />
          <div className='top-area-content'>
            <img src={me} alt='' className='my-photo' />
            <div className='top-area-text'>
              <h1>
                Hola, me llamo{' '}
                <span className='name'>
                  Rubén Villar
                  <motion.span
                    animate={{ width: '100%' }}
                    initial={{ width: 0 }}
                    transition={{
                      duration: 2,
                      delay: 1,
                      type: 'tween'
                    }}
                    className='underline'
                  />
                </span>
              </h1>
              <p className='description'>
                Soy un desarrollador full stack freelance, especializado en el
                desarrollo de aplicaciones web completas usando React, Next.js,
                Node.js, Express y más.
              </p>
              <ul className='nav-links'>
                <Link to='skills' offset={-32} smooth>
                  <motion.li>Habilidades</motion.li>
                </Link>
                <Link to='experience' offset={-32} smooth>
                  <li>Experiencia</li>
                </Link>
                <Link to='contact' offset={-32} smooth>
                  <li>¿Hablamos?</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className='skills-container'>
          <div className='skills container' id='skills'>
            <h2>Habilidades</h2>
            <div className='skills-list'>
              {skills.map((skill) => (
                <div className='skill-container' key={skill.title}>
                  <Skill
                    skill={skill}
                    displaySkill={displaySkill}
                    handleOpenSkill={handleOpenSkill}
                    handleCloseSkill={handleCloseSkill}
                    isDarkTheme={isDarkTheme}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='experience container' id='experience'>
            <h2>Experiencia</h2>
            <div className='experience-list'>
              <AnimateSharedLayout>
                <div className='experience-items'>
                  {experiences.map((experience, idx) => (
                    <Experience
                      key={`${experience.company}-${experience.period}`}
                      experience={experience}
                      isDarkTheme={isDarkTheme}
                      idx={idx}
                      displayExperience={displayExperience}
                      setDisplayExperience={setDisplayExperience}
                    />
                  ))}
                </div>
              </AnimateSharedLayout>
              <div className='experience-description' />
            </div>
          </div>
        </div>
        <div className='contact container' id='contact'>
          <h2>¿Hablamos?</h2>
          <div className='contact-content'>
            <div className='form-container'>
              <p>
                Si quieres que trabajemos juntos, o si tienes alguna pregunta no
                dudes en contactar conmigo, te responderé lo antes posible.
              </p>
              <ContactForm />
            </div>
            <div className='contact-methods'>
              <p>También puedes llamarme</p>
              <p className='contact-link'>
                <a href='tel:+34622014332'>+34 622 014 332</a>
              </p>
              <p>O mandarme un email</p>
              <p className='contact-link'>
                <a href='mailto:ruben@rubenvillar.net'>ruben@rubenvillar.net</a>
              </p>
              <div className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/rubenvillargrela/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin />
                </a>

                <a
                  href='https://github.com/rubenvillarnet'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
      </IndexStyle>
    </div>
  );
};

export default Index;
