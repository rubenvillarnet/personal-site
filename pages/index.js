import React from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../store';
import IndexStyle from './indexStyle';
import me from '../public/static/img/foto-ironhack.png';
import mail from '../public/static/svg/mail.svg';
import linkedin from '../public/static/svg/linkedin.svg';
import github from '../public/static/svg/github.svg';
import mailDark from '../public/static/svg/mail_dark.svg';
import linkedinDark from '../public/static/svg/linkedin_dark.svg';
import githubDark from '../public/static/svg/github_dark.svg';
import moon from '../public/static/svg/moon.svg';
import sun from '../public/static/svg/sun.svg';

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
                <img src={sun} alt='' />
                <span>Tema claro</span>
              </>
            ) : (
              <>
                <img src={moon} alt='' />
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
                    <img src={isDarkTheme ? mailDark : mail} alt='' />
                    ruben@rubenvillar.net
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/rubenvillarnet'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={isDarkTheme ? githubDark : github} alt='' />
                    rubenvillarnet
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/rubenvillargrela/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={isDarkTheme ? linkedinDark : linkedin} alt='' />
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
