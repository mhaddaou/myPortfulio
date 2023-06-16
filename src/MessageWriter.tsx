import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const MessageWriter = () => {
  const [text] = useTypewriter({
    words: ['Frontend', 'Developer'],
    loop: Infinity,
  });

  return (
    <div className='App'>
        <div className='text-green-400'>
      <span> <span className='text-white'>I Am Into</span> {text}</span>
      <Cursor  cursorStyle='_'></Cursor>

        </div>
    </div>
  );
};

export default MessageWriter;
