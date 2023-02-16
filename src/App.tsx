import React from 'react';
import { styled } from '@stitches/react';

const Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

function App() {
  return (
    <div className="App">
      app
      <Button>Button</Button>
    </div>
  );
}

export default App;
