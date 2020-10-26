import React from 'react';
import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

import StyledExperience from './ExperienceStyle';
import useWindowSize from '../../utils/windowSize';

export default function Experience({
  experience,
  isDarkTheme,
  idx,
  displayExperience,
  setDisplayExperience
}) {
  const {
    image,
    imageDark,
    company,
    freelance,
    period,
    description,
    technologies
  } = experience;

  const isSelected = idx === displayExperience;
  const size = useWindowSize();

  const setImage = () => {
    if (imageDark) {
      return isDarkTheme ? image : imageDark;
    }
    return image;
  };

  const handleOpen = () => {
    setDisplayExperience(isSelected ? undefined : idx);
  };

  const companyImage = setImage();
  return (
    <StyledExperience
      className={classNames({
        open: isSelected
      })}
      onClick={handleOpen}
      onKeyDown={handleOpen}
      role='link'
      tabIndex={0}
      isSelected={isSelected}
    >
      <div className='toggle'>
        <div>
          <img src={companyImage} alt={company} />
        </div>
        <span className='plus-icon' />
      </div>
      {size.width >= 768 && (
        <AnimatePresence exitBeforeEnter>
          {isSelected && (
            <motion.div
              key='content-desktop'
              initial={{ opacity: 0, x: '-50%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ x: '50%', opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeIn' }}
              className='content-container'
            >
              <div className='content'>
                <div className='title'>
                  <h3 className={classNames({ freelance })}>{company}</h3>
                  <p>{period}</p>
                </div>
                <p className='description'>{description}</p>
                <p className='technologies'>
                  <span>Tecnologías:</span> {technologies}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
      {size.width < 768 && (
        <AnimatePresence exitBeforeEnter>
          {isSelected && (
            <motion.div
              key='content-mobile'
              initial='collapsed'
              animate='open'
              exit='collapsed'
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              className='content-container'
            >
              <motion.div
                className='content'
                variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                transition={{ duration: 0.8 }}
              >
                <div className='title'>
                  <h3 className={classNames({ freelance })}>{company}</h3>
                  <p>{period}</p>
                </div>
                <p className='description'>{description}</p>
                <p className='technologies'>
                  <span>Tecnologías:</span> {technologies}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
      {isSelected && <motion.div layoutId='underline' className='underline' />}
    </StyledExperience>
  );
}
