import { Box, Text } from "@chakra-ui/react";
import React from "react";

const NotifiactionButton = () => {
  return (
    <Box position={"relative"} cursor={"pointer"}>
      <Text
        position={"absolute"}
        color={"white"}
        bg={"red"}
        fontSize={"12px"}
        width={["30px", "30px", "30px", "20px"]}
        h={["30px", "30px", "30px", "20px"]}
        textAlign={"center"}
        alignContent={"center"}
        top={["0px", "8px", "8px", "3px"]}
        left={["13px", "13px", "13px", "7px"]}
        border={"1px solid black"}
      >
        1
      </Text>
      <Text fontSize={["35px", "35px", "35px", "25px"]}>
        <i className="ri-notification-2-fill"></i>
      </Text>
    </Box>
  );
};

export default NotifiactionButton;
