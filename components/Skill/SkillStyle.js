import styled from 'styled-components';

const StyledSkill = styled.div`
  width: 16rem;
  height: 16rem;
  position: relative;
  margin: auto;
  margin-bottom: 2rem;

  outline: none;
  border: ${({ isDarkTheme, isSelected, theme }) =>
    isDarkTheme || isSelected
      ? 'none'
      : `0.25rem solid ${theme.colors.primary}`};
  .overlay {
    z-index: 1;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    .close-modal {
      display: block;
      position: fixed;
      top: 0;
      bottom: 0;
      width: 100vw;
      left: 0;
      cursor: pointer;
      outline: none;
    }
  }

  .content-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .content {
      position: relative;
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.sectionBackground};
      transition: background-color 0.5s;
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.backgroundSecondary};
      }
      .close-section {
        opacity: 0;
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        svg {
          width: 1.5rem;
          fill: ${({ theme }) => theme.colors.primary};
          cursor: pointer;
          outline: none;
        }
      }
      .top {
        .title {
          display: flex;
          align-items: center;
          svg {
            width: 3rem;
            margin-right: 1rem;
          }
        }
      }
      .skill-body {
        max-height: 0px;
        max-width: 0px;
        overflow: hidden;
        margin-left: 0;
        border-left: 0;
        padding-left: 0;
        .body-section {
          &:not(:last-child) {
            margin-bottom: 2rem;
          }
          h4 {
            color: ${({ theme }) => theme.colors.backgroundSecondary};
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
          }
          p {
            color: ${({ theme }) => theme.colors.background};
            font-size: 1rem;
            line-height: 1.75rem;
          }
        }
      }
    }
    &.open {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
      pointer-events: none;
      margin: 1.5rem;

      .top {
        .title {
          color: ${({ theme }) => theme.colors.backgroundSecondary};
        }
      }
      .content {
        background-color: ${({ theme }) => theme.colors.secondary};
        max-width: 60rem;
        margin: auto;
        height: auto;
        padding: 4rem 1rem 2rem 1rem;
        pointer-events: auto;
        flex-direction: column;
        cursor: auto;
        .close-section {
          opacity: 1;
        }
        .top {
          justify-content: space-between;
          width: 100%;
          display: flex;
          margin-bottom: 1.5rem;
          align-items: center;
        }
        .skill-body {
          max-height: 2000px;
          max-width: 2000px;
          margin-left: 1.5rem;
          border-left: 0.25rem solid ${({ theme }) => theme.colors.primary};
          padding-left: 1.5rem;
        }
      }
    }
  }
  @media screen and (min-width: 48rem) {
    margin: 0;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    .content-container {
      align-items: flex-end;
      .content {
        margin-bottom: 10%;
        .top {
          margin-bottom: 1.5rem;
          .title {
            svg {
              width: 3rem;
              margin-right: 1rem;
            }
            h3 {
              font-size: 1.5rem;
            }
          }
        }
      }
      &.open {
        margin-top: 4rem;
        .content {
          margin: auto;
        }
      }
    }
  }
  @media screen and (min-width: 75rem) {
    .content-container {
      .content {
        .top {
          .title {
            svg {
              width: 4.5rem;
              margin-right: 2rem;
            }
            h3 {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
`;

export default StyledSkill;
