import { Box, Heading, Image, VStack, Text } from "@chakra-ui/react";
import React from "react";

const AvailableGame = () => {
  return (
    <Box>
      <Heading>Available Games</Heading>
      <VStack>
        <Box>
          <Image />
          <Text>Battleground Mobile India (BGMI)</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default AvailableGame;
