import React from 'react';

const SignUpFormContentBlock = ({ title, content }) => {

  return (
    <div className='content-block'>
      <h3 className='content-block-header'>{title}</h3>
      <p className='content-block-body'>{content}</p>
    </div>
  );
};

export default SignUpFormContentBlock;
