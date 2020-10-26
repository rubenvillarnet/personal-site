import styled from 'styled-components';

const StyledExperience = styled.div`
  border-bottom: 4px solid ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  outline: none;
  .toggle {
    z-index: 2;
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      display: block;
      max-width: 100%;
      flex-shrink: 2;
    }
    .plus-icon {
      width: 2.5rem;
      height: 2.5rem;
      position: relative;
      margin-left: 0.5rem;
      cursor: pointer;
      display: block;
      flex-shrink: 1;
      transition: transform 0.2s;
      &::before,
      &::after {
        content: '';
        position: absolute;
        background-color: ${({ theme }) => theme.colors.secondary};
        transition: all 0.25s ease-out;
      }
      &:before {
        top: 50%;
        left: 0;
        width: 100%;
        height: 0.5rem;
        transform: translateY(-50%);
        background-color: ${({ theme }) => theme.colors.secondary};
      }
      &:after {
        top: 50%;
        left: 0;
        width: 100%;
        height: 0.5rem;
        transform: translateY(-50%) rotate(90deg);
      }
    }
  }
  .content-container {
    z-index: 1;
    overflow: hidden;
    .content {
      padding: 0 1rem 2rem 1rem;
      transform-origin: top center;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
          color: ${({ theme }) => theme.colors.secondary};
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          position: relative;
          &.freelance {
            &::after {
              position: absolute;
              right: -1rem;
              top: 0;
              content: 'Freelance';
              font-size: 0.7rem;
              color: ${({ theme }) => theme.colors.background};
              padding: 0.125rem 0.25rem;
              border-radius: 1rem;
              background-color: ${({ theme }) => theme.colors.secondary};
              transform: translateX(100%);
            }
          }
        }
        p {
          font-weight: 300;
        }
      }
      .description {
        margin-bottom: 1rem;
      }
      .technologies {
        font-weight: 300;
        span {
          font-weight: 500;
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }
  .underline {
    display: none;
    width: 100%;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: -0.25rem;
  }
  &.open {
    .toggle {
      .plus-icon {
        transform: rotate(45deg);
      }
    }
  }
  @media screen and (min-width: 48rem) {
    border-bottom: none;
    .toggle {
      padding-top: 1rem;
      padding-bottom: 0.25rem;
      .plus-icon {
        display: none;
      }
    }
    .content-container {
      position: absolute;
      top: 2rem;
      left: 17rem;
      right: 0;
      bottom: 0;
      pointer-events: none;
      .content {
        padding: 3rem;
        .title {
          border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
          margin-bottom: 2.5rem;
          h3 {
            font-size: 2rem;
          }
        }
        .description {
          font-size: 1.25rem;
          line-height: 2rem;
          margin-bottom: 2rem;
        }
      }
    }
    .underline {
      display: block;
    }
  }
`;

export default StyledExperience;
