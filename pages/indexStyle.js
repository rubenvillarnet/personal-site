import styled from 'styled-components';

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
    border: none;
    background: transparent;
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
      filter: ${({ isDarkTheme }) =>
        isDarkTheme
          ? 'contrast(93%) brightness(50%) saturate(150%) grayscale(86%)'
          : 'none'};
      transition: filter 2s;
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

export default IndexStyle;
