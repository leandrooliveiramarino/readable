import React from 'react';

const DevelopedBy = () => (
  <div className='developed-by'>
    <p className='developed-by__text text-center'>
      Developed by
    </p>
    <p className='developed-by__text'>
      Leandro Oliveira Marino
    </p>
    <div className='social-medias'>
      <a
        href='https://www.linkedin.com/in/leandromarino'
        alt='Leandro Oliveira Marino LinkedIn'
        className='social-medias__icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src='/images/linkedin-icon.png'
          width='30'
          height='30'
          alt='LinkedIn'
        />
      </a>
      <a
        href='https://github.com/leandrooliveiramarino'
        alt='Leandro Oliveira Marino GitHub'
        className='social-medias__icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src='/images/github-icon.png'
          width='30'
          height='30'
          alt='GitHub'
        />
      </a>
      <a
        href='https://www.facebook.com/leandro.o.marino'
        alt='Leandro Oliveira Marino Facebook'
        className='social-medias__icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src='/images/facebook-icon.png'
          width='30'
          height='30'
          alt='Facebook'
        />
      </a>
    </div>
  </div>
);

export default DevelopedBy;