import { Box, Flex, Square, Text } from "@chakra-ui/react";
import React from "react";

const NotifyMessageComponent = () => {
  return (
    <Box
      border={"1px solid black"}
      fontSize={"22px"}
      borderRadius={"5px"}
      overflow={"hidden"}
      bg={"gray.200"}
    >
      <Flex alignItems={"center"}>
        <Square bg={"gray.400"} w="60px" h="60px">
          <i className="ri-megaphone-fill"></i>
        </Square>
        <Text pl={"10px"}>Notification message</Text>
      </Flex>
    </Box>
  );
};

export default NotifyMessageComponent;
