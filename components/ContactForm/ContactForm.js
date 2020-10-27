/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import axios from 'axios';

import StyledForm from './ContactFormStyle';

const url = 'https://3pw74qr399.execute-api.eu-west-1.amazonaws.com/prod';

export default function ContactForm() {
  const { register, handleSubmit, errors, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const onSubmit = (data) => {
    setShowModal(true);
    setIsLoading(true);
    axios
      .post(url, data)
      .then(() => {
        reset();
      })
      .catch(() => {
        reset();
        setShowError(true);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <StyledForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classNames('field-container', { error: errors.name })}>
          <label>
            ¿Cómo te llamas?
            <input
              type='text'
              name='name'
              ref={register({
                required: true
              })}
            />
          </label>
          <span className='error-message'>Escribe tu nombre</span>
        </div>
        <div className={classNames('field-container', { error: errors.email })}>
          <label>
            ¿Cual es tu correo electrónico?
            <input
              name='email'
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Escribe un correo válido'
                }
              })}
            />
          </label>
          <span className='error-message'>
            {(errors.email && errors.email.message) ||
              'Escribe una dirección de correo electrónico'}
          </span>
        </div>
        <div
          className={classNames('field-container', { error: errors.message })}
        >
          <label>
            Escribe tu mensaje
            <TextareaAutosize
              name='message'
              ref={register({ required: true })}
            />
          </label>
          <span className='error-message'>Escribe un mensaje</span>
        </div>
        <button type='submit'>Enviar</button>
      </form>
      {showModal && (
        <div className='overlay'>
          {isLoading ? (
            <p>Enviando...</p>
          ) : (
            <div className='overlay-content'>
              <p>
                {showError
                  ? 'Ha ocurrido un error al enviar el formulario. Por favor, intentalo más tarde'
                  : 'He recibido tu mensaje correctamente, ¡Estamos en contacto!'}
              </p>
              <button type='button' onClick={() => setShowModal(false)}>
                Aceptar
              </button>
            </div>
          )}
        </div>
      )}
    </StyledForm>
  );
}
