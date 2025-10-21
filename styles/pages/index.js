import styled from 'styled-components';

const IndexStyle = styled.div`
  width: 100%;
  padding-top: 6rem;
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
    border: none;
    background: transparent;
    .switch {
      height: 2rem;
      width: 4rem;
      border: 0.125rem solid ${({ theme }) => theme.colors.primary};
      border-radius: 2rem;
      margin: 0 0.5rem;
      display: flex;
      justify-content: ${({ isDarkTheme }) =>
        isDarkTheme ? 'flex-end' : 'flex-start'};
      padding: 0.125rem;
      .handle {
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }
    svg {
      width: 1.5rem;
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
  .top-area {
    margin-bottom: 6rem;
    .my-logo {
      max-width: 50rem;
      fill: ${({ theme }) => theme.colors.primary};
      transition: fill 1s;
      display: block;
      margin: auto;
      margin-bottom: 3rem;
    }
    .my-photo {
      border-radius: 50%;
      border: 0.25rem solid ${({ theme }) => theme.colors.primary};
      max-width: 10rem;
      display: block;
      margin: auto;
      margin-bottom: 1.5rem;
    }

    h1 {
      margin-bottom: 3rem;
      font-size: 1rem;
      display: inline-block;
      font-family: 'Montserrat';
      font-weight: 300;
      .name {
        position: relative;
        .underline {
          content: '';
          position: absolute;
          right: 0;
          bottom: -0.25rem;
          border-bottom: 0.25rem solid ${({ theme }) => theme.colors.secondary};
        }
      }
    }

    .description {
      line-height: 1.5rem;
      margin-bottom: 2rem;
    }
    .nav-links {
      a {
        transition: transform 0.5s;
        li {
          text-transform: uppercase;
          cursor: pointer;
          color: ${({ theme }) => theme.colors.secondary};
          font-weight: 300;
          font-size: 1.125rem;
          margin-bottom: 2rem;
          text-align: center;
          position: relative;
        }
        &:hover {
          transform: scale(1.2);
        }
      }
    }
    @media screen and (min-width: 48rem) {
      margin-bottom: 7rem;
      .my-logo {
        margin-bottom: 9rem;
      }
      .top-area-content {
        display: flex;
        align-items: flex-start;
        .my-photo {
          max-width: 14rem;
          margin-right: 4rem;
          margin-bottom: 0;
          margin-top: 0;
          border-width: 0.5rem;
        }
        .top-area-text {
          justify-content: flex-start;
          h1 {
            margin-bottom: 2rem;
            font-size: 1.5rem;
          }

          .description {
            font-size: 1.5rem;
            line-height: 2.5rem;
          }
          .nav-links {
            display: block;
            a {
              li {
                font-size: 1.5rem;
                text-align: left;
              }
            }
          }
        }
      }
    }
    @media screen and (min-width: 75rem) {
      .top-area-content {
        align-items: center;
        .my-photo {
          max-width: 18rem;
          margin-right: 6rem;
        }
        .top-area-text {
          .description {
            font-size: 2rem;
            line-height: 2.5rem;
          }
          .nav-links {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
  .skills-container {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 10rem;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    }
    h2 {
      color: ${({ theme }) => theme.colors.secondary};
      text-align: center;
      font-size: 2rem;
      margin-bottom: 2rem;
      position: relative;
    }
    .skills {
      padding-bottom: 2rem;
      position: relative;
    }
    .experience {
      margin-top: 2rem;
      padding-bottom: 3rem;
      position: relative;
    }
    @media screen and (min-width: 48rem) {
      &::before {
        top: 12rem;
      }
      h2 {
        font-size: 3rem;
        margin-bottom: 3rem;
      }
      .skills-list {
        display: flex;
        justify-content: space-between;
        .skill-container {
          width: 100%;
          &:not(:last-child) {
            margin-right: 2rem;
          }
        }
      }
      .experience {
        margin-top: 4.75rem;
        .experience-list {
          position: relative;
          margin-bottom: 3rem;
          .experience-items {
            width: 17rem;
            padding-bottom: 1rem;
            border-right: 0.25rem solid ${({ theme }) => theme.colors.secondary};
          }
        }
      }
    }
    @media screen and (min-width: 75rem) {
    }
  }
  .contact {
    padding-top: 3rem;
    h2 {
      color: ${({ theme }) => theme.colors.secondary};
      text-align: center;
      font-size: 2rem;
      margin-bottom: 4rem;
      position: relative;
    }
    p {
      line-height: 1.5rem;
      margin-bottom: 2rem;
    }
    .contact-methods {
      p {
        margin-bottom: 0.125rem;
      }
      .contact-link {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: 1.125rem;
        margin-bottom: 3rem;
      }
      .social-icons {
        padding-top: 3.25rem;
        display: flex;
        justify-content: center;
        padding-bottom: 7rem;
        a {
          &:first-child {
            margin-right: 0.5rem;
          }
          svg {
            width: 3rem;
            fill: ${({ theme }) => theme.colors.secondary};
          }
        }
      }
    }
    @media screen and (min-width: 75rem) {
      padding-top: 8rem;
      h2 {
        font-size: 3rem;
        margin-bottom: 5.5rem;
      }
      .contact-content {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: flex-start;
        .contact-methods {
          p {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
          .contact-link {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
          .social-icons {
            padding-top: 5.25rem;
            justify-content: flex-start;
          }
        }
      }
    }
  }
`;

export default IndexStyle;
