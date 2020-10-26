/* eslint-disable react/no-danger */

import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import StyledSkill from './SkillStyle';

import Times from '../../public/static/svg/times-solid.svg';

export default function Skill({
  skill,
  displaySkill,
  handleOpenSkill,
  handleCloseSkill,
  isDarkTheme
}) {
  const { icon, title, sections } = skill;
  const isSelected = displaySkill === title;
  return (
    <StyledSkill
      onClick={() => handleOpenSkill(title)}
      onKeyDown={() => handleOpenSkill(title)}
      role='link'
      tabIndex={0}
      isDarkTheme={isDarkTheme}
      isSelected={isSelected}
    >
      <motion.div
        initial={false}
        animate={{ opacity: isSelected ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
        className='overlay'
      >
        <div
          type='button'
          className='close-modal'
          onClick={handleCloseSkill}
          onKeyDown={handleCloseSkill}
          role='button'
          tabIndex={0}
          aria-label='Close modal'
        />
      </motion.div>
      <div className={classNames('content-container', { open: isSelected })}>
        <motion.div className='content' layout>
          <motion.div layout className='close-section'>
            <Times
              onClick={handleCloseSkill}
              onKeyDown={handleCloseSkill}
              role='link'
              tabIndex={0}
            />
          </motion.div>
          <motion.div className='top' layout>
            <div className='title'>
              <motion.div layout className='icon-container'>
                {icon}
              </motion.div>
              <motion.h3
                layout
                dangerouslySetInnerHTML={{
                  __html: title
                }}
              />
            </div>
          </motion.div>
          <motion.div className='skill-body' layout>
            {sections.map((section) => (
              <motion.div layout className='body-section' key={section.text}>
                {section.title && <motion.h4 layout>{section.title}</motion.h4>}
                <motion.p layout>{section.text}</motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </StyledSkill>
  );
}
