import { Outlet } from 'react-router-dom';
import { Box, SimpleGrid } from '@chakra-ui/react';

import NavBar from './NavBar';

export default function Root() {
  return (
    <SimpleGrid columns={1} spacing={4}>
      <Box>
        <NavBar />
      </Box>

      <Outlet />
    </SimpleGrid>
  );
}
