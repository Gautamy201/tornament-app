import React from "react";
import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useGlobalContext } from "../context";
const ReferAndEarn = () => {
  const { userDetail } = useGlobalContext();
  return (
    <Box paddingTop={["10vh", "10vh", "10vh", "0"]}>
      <VStack
        bg={"black"}
        padding={["30px 10px", "30px 10px", "30px 10px", "30px 180px"]}
        color={"yellow.500"}
        gap={"20px"}
      >
        <Image w={"150px"} src="../../public/Images/avtar.png" />
        <Heading
          fontSize={["1.5rem", "1.7rem", "1.8rempx", "1.7rem"]}
          textTransform={"uppercase"}
        >
          Refer more to Earn More!
        </Heading>
        <Text color={"white"} textAlign={"center"} fontSize={"20px"}>
          Invite your friends on App using your Promo Code to Earn 10 EarnCoins
          when they join first match. Your Friends also get 5 EarnCoins as
          Signup Bonus!
        </Text>
      </VStack>
      <VStack padding={"20px"} gap={"20px"} fontWeight={600}>
        <Text>YOUR PROMO CODE</Text>
        <Text
          padding={"10px 20px"}
          bg={"yellow.500"}
          fontWeight={700}
          fontSize={"22px"}
          border={"4px dashed black"}
        >
          {userDetail.userId}
        </Text>
        <Text color={"blue.500"} fontSize={"1.3rem"}>
          How does it work?
        </Text>
      </VStack>
      <Box>
        <Image src="../../public/Images/refern_n_earn.png" />
      </Box>
      <VStack>
        <Button
          width={"100%"}
          margin={"20px 0"}
          fontWeight={600}
          letterSpacing={"1px"}
          padding={"30px"}
          fontSize={"22px"}
          bg={"#afdde5"}
          _hover={{ bg: "#0fa4af" }}
        >
          REFFER NOW
        </Button>
        <Text pb={"10px"} fontSize={"20px"} fontWeight={600}>
          *Note: 10 EarnCoin = ₹ 10
        </Text>
      </VStack>
    </Box>
  );
};

export default ReferAndEarn;
