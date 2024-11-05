import { Link } from 'react-router-dom';
import { Box, Button, Flex, HStack } from '@chakra-ui/react';

import ROUTES from '../router/routes';

export default function NavBar() {
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
    </Flex>
  );
}
