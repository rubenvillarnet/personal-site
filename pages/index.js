import React from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../store';
import IndexStyle from './indexStyle';
import me from '../public/static/img/foto-ironhack.png';
import Mail from '../public/static/svg/mail.svg';
import Linkedin from '../public/static/svg/linkedin.svg';
import Github from '../public/static/svg/github.svg';
import Moon from '../public/static/svg/moon.svg';
import Sun from '../public/static/svg/sun.svg';

const Index = () => {
  const isDarkTheme = useSelector((state) => state.isDarkTheme);
  const dispatch = useDispatch();
  return (
    <div>
      <Head>
        <title>Rubén Villar Grela - Desarrollador Front End</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <IndexStyle isDarkTheme={isDarkTheme}>
        <div className='container'>
          <button
            className='switch-mode'
            type='button'
            onClick={() => dispatch(switchTheme())}
          >
            {isDarkTheme ? (
              <>
                <Sun />
                <span>Tema claro</span>
              </>
            ) : (
              <>
                <Moon />
                <span>Tema oscuro</span>
              </>
            )}
          </button>
          <div className='img-area'>
            <div className='img-container'>
              <img src={me} alt='' className='avatar' />
            </div>
          </div>
          <div className='text-area'>
            <span>Hola, me llamo</span>
            <h1>Rubén Villar Grela</h1>
            <p>Y soy desarrollador Full Stack</p>
            <div className='links'>
              <ul>
                <li>
                  <a href='mailto:rubenvillar.net' rel='noopener noreferrer'>
                    <Mail className='link-icon' />
                    ruben@rubenvillar.net
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/rubenvillarnet'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Github className='link-icon' />
                    rubenvillarnet
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/rubenvillargrela/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Linkedin className='link-icon' />
                    rubenvillargrela
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </IndexStyle>
    </div>
  );
};

export default Index;
