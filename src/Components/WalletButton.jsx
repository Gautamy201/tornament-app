import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const WalletButton = () => {
  return (
    <Box
      bg={"white"}
      padding={"0 20px"}
      borderRadius={"10px"}
      h={"6vh"}
      fontSize={["20px", "25px", "25px", "35px"]}
      color={"green.300"}
      border={"2px solid green"}
      display={"flex"}
      alignItems={"center"}
    >
      <NavLink>
        <i className="ri-copper-diamond-line">
          <Text
            as={"span"}
            fontSize={["20px", "25px", "25px", "35px"]}
            ml="5px"
            color={"black"}
          >
            10
          </Text>
        </i>
      </NavLink>
    </Box>
  );
};

export default WalletButton;
