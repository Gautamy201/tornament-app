import {
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const MyWallet = () => {
  return (
    <Box>
      <VStack justifyContent={"center"} h={"550px"}>
        <Stack>
          <Heading>EarnCoin Wallet</Heading>
          <Text textAlign={"center"} margin={"15px 0"}>
            <Text as={"span"} fontSize={"50px"}>
              0
            </Text>
          </Text>
          <Button bg={"orange"}>BUY EARNCOINS</Button>
          <Button bg={"green"}>REDEEM EARNCOINS</Button>
          <Button bg={"lightBlue"}>VIEW TRANSACTIONS</Button>
        </Stack>
      </VStack>
    </Box>
  );
};

export default MyWallet;
