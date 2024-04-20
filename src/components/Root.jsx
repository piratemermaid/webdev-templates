import { Outlet } from 'react-router-dom';
import { Box, Button, SimpleGrid } from '@chakra-ui/react';

import NavBar from './NavBar';
import { useStore } from '../store';

export default function Root() {
  const something = useStore((store) => store.something);
  const toggleSomething = useStore((store) => store.toggleSomething);

  return (
    <SimpleGrid columns={1} spacing={4}>
      <Box>
        <NavBar />
      </Box>

      <Box>
        State thing: {something ? 'yes' : 'no'}{' '}
        <Button onClick={toggleSomething}>Toggle</Button>
      </Box>

      <Outlet />
    </SimpleGrid>
  );
}
