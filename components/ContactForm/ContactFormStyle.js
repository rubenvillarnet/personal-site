import styled from 'styled-components';
import { rgba } from 'polished';

const StyledForm = styled.div`
  position: relative;
  form {
    margin-bottom: 4rem;
    .field-container {
      margin-bottom: 2rem;
      label {
        font-weight: 300;
        display: block;
        input {
          display: block;
          width: 100%;
          margin-top: 0.5rem;
          background-color: transparent;
          border: none;
          color: ${({ theme }) => theme.colors.primary};
          border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
          font-size: 1rem;
          &:focus {
            outline: none;
          }
        }
        textarea {
          background-color: transparent;
          border: none;
          outline: none;
          resize: none;
          border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
          display: block;
          width: 100%;
          padding-bottom: 0.25rem;
          margin-top: 0.5rem;
          color: ${({ theme }) => theme.colors.primary};
          font-family: 'Montserrat';
          font-size: 1rem;
        }
      }
      .error-message {
        display: block;
        margin-top: 0.5rem;
        color: ${({ theme }) => theme.colors.error};
        font-size: 0.75rem;
        max-height: 0;
        overflow: hidden;
      }
      &.error {
        input,
        textarea {
          border-bottom: 1px solid ${({ theme }) => theme.colors.error};
        }
        .error-message {
          transition: 0.75s;
          max-height: 200px;
        }
      }
    }
  }
  button {
    display: block;
    margin-left: auto;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
    padding: 0.75rem 1.5rem;
    text-transform: uppercase;
    transition: all 0.5s;
    letter-spacing: 0.2rem;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  .overlay {
    position: absolute;
    top: -1rem;
    bottom: -1rem;
    left: -1rem;
    right: -1rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => rgba(theme.colors.background, 0.9)};
    border: 0.125rem solid ${({ theme }) => theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    button {
      margin: auto;
    }
  }
`;

export default StyledForm;
