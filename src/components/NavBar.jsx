import { Box, Button, Flex, HStack, Spacer } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

import ROUTES from '../router/routes';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex>
      <Box>
        <HStack>
          {ROUTES.map((route) => {
            return (
              <Link to={route.path} key={route.path}>
                <Button variant="link" sx={{ mr: 4 }}>
                  {route.label}
                </Button>
              </Link>
            );
          })}
        </HStack>
      </Box>
      <Spacer />
      <Box>
        <Button onClick={toggleColorMode} colorScheme="teal">
          Toggle dark mode
        </Button>
      </Box>
    </Flex>
  );
}
