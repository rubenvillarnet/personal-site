import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../store';
import me from '../public/static/img/foto-ironhack.png';
import mail from '../public/static/svg/mail.svg';
import linkedin from '../public/static/svg/linkedin.svg';
import github from '../public/static/svg/github.svg';
import mailDark from '../public/static/svg/mail_dark.svg';
import linkedinDark from '../public/static/svg/linkedin_dark.svg';
import githubDark from '../public/static/svg/github_dark.svg';
import moon from '../public/static/svg/moon.svg';
import sun from '../public/static/svg/sun.svg';

const IndexStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.5s;
  .switch-mode {
    position: absolute;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
      width: 1rem;
      margin-right: 0.5rem;
    }
  }
  .container {
    display: flex;
    margin: 30px;
    .img-area {
      display: flex;
      align-items: center;
      flex-grow: 1;
      justify-content: center;
      .avatar {
        border-radius: 50%;
        max-width: 150px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-right: 1rem;
      }
    }
    .text-area {
      h1 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      li {
        margin-bottom: 0.5rem;
        a {
          color: ${({ theme }) => theme.colors.links};
          text-decoration: none;
        }
        img {
          width: 1rem;
          margin-right: 0.5rem;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .container {
      flex-direction: column;
      .text-area {
        margin-top: 0.5rem;
        span {
          display: block;
          text-align: center;
        }
        h1 {
          font-size: 2rem;
          text-align: center;
        }
        p {
          font-size: 1.25rem;
          text-align: center;
        }
        .links {
          display: flex;
          justify-content: center;
        }
        ul {
          margin-top: 1rem;
          display: inline-block;
          li {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
`;

const Index = () => {
  const isDarkTheme = useSelector(state => state.isDarkTheme);
  const dispatch = useDispatch();
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <IndexStyle>
        <div className='container'>
          <div className='switch-mode' onClick={() => dispatch(switchTheme())}>
            {isDarkTheme ? (
              <React.Fragment>
                <img src={sun} alt='' />
                <span>Light Theme</span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <img src={moon} alt='' />
                <span>Dark Theme</span>
              </React.Fragment>
            )}
          </div>
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
                    <img src={isDarkTheme? mailDark : mail} alt='' />
                    ruben@rubenvillar.net
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/rubenvillarnet'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={isDarkTheme? githubDark : github} alt='' />
                    rubenvillarnet
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/rubenvillargrela/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={isDarkTheme? linkedinDark : linkedin} alt='' />
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
