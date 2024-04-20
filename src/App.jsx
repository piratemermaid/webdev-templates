import { Button, useColorMode } from '@chakra-ui/react';

import './App.css';

function App() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <h1>Hello There</h1>
      <Button onClick={toggleColorMode}>Toggle Dark Mode</Button>
    </>
  );
}

export default App;
