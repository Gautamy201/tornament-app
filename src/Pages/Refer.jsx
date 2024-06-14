import React from "react";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import ComanComponent from "../Components/ComanComponent";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
const Refer = () => {
  const navigate = useNavigate();
  const heading = "Refer & Earn";
  const info =
    "Get your friends to try EarningZon App and Earn Huge! Get Rs 10 per each Successful Refer and your friends also get Rs 5 as Signup Bonus. To Participate, Update EarningZon App.";

  const referalUsers = [
    {
      name: "Niramal",
      totalReferal: 2564,
    },
    {
      name: "Harry",
      totalReferal: 5212,
    },
    {
      name: "Divesh",
      totalReferal: 5422,
    },

    {
      name: "Sarvesh",
      totalReferal: 754,
    },

    {
      name: "Nilesh",
      totalReferal: 364,
    },

    {
      name: "Ritesh",
      totalReferal: 6544,
    },

    {
      name: "Harsh",
      totalReferal: 2564,
    },
  ];
  const TermAndCondition = [
    "EarningZone Referral Program (offer) starts on 11th December 2018.",
    "EarningZone Referral Program is valid for All the Users.",
    "To participate in the offer, existing users have to share their unique Promo Code available in the Refer & Earn Section (Me >> Refer & Earn) with their friends or new app users.",
    "New users have to enter the Promo Code while creating their account in order to get the Signup Bonus.",
    "New users have to play or participate in at least one paid match / tournament in order for the reffering user to avail their referral reward(s).",
    "Users can check their Referral Stats in the App from Refer & Earn Section.",
    "Do not create multiple dummy or fake accounts in order to increase your referral count. If anyone found doing so will be disqualified and their account may get terminated.",
    "Use of any Script or Hack is prohibited. Legal action will be taken againsts such doers.",
    "EarningZone reservse right to terminated, close, update or pause the referral offer at anytime without any prior notice or notification.",
    "If you are facing any problem or issues then contact EarningZone at",
  ];
  return (
    <Box bg={"#1c1e1f"}>
      <ComanComponent
        heading={heading}
        info={info}
        btnText1={"Participate Now"}
        btnText2={"How does it work"}
        btnFun1={() => navigate("/loginSignup")}
        btnFun2={() => navigate("/loginSignup")}
      />
      <Box bg={"white"}>
        <Image src="/assets/refern_n_earn.png" />
      </Box>
      <Box
        color={"white"}
        padding={[
          "20px 20px 50px 20px",
          "20px 30px 50px 30px",
          "20px 30vh 0px 30vh",
        ]}
      >
        <Heading textAlign={"center"} margin={"50px 0"}>
          Top 10 Referral Leaderboard
        </Heading>
        <Box fontWeight={600} fontSize={["16px", "16px", "20px"]}>
          <Box
            borderBottom={"1px solid white "}
            textAlign={"center"}
            padding={"10px 0"}
          >
            <SimpleGrid columns={10}>
              <GridItem colSpan={1}>#</GridItem>
              <GridItem colSpan={5}>FullName</GridItem>
              <GridItem colSpan={4}>Total Referrals</GridItem>
            </SimpleGrid>
          </Box>
          {referalUsers.map((user, index) => {
            return (
              <Box
                borderBottom={"1px solid white "}
                textAlign={"center"}
                key={index}
                padding={"10px 0"}
              >
                <SimpleGrid columns={10}>
                  <GridItem colSpan={1}>{index + 1}</GridItem>
                  <GridItem colSpan={5}>{user.name}</GridItem>
                  <GridItem colSpan={4}>{user.totalReferal}</GridItem>
                </SimpleGrid>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        bg={"white"}
        padding={[
          "20px 20px 50px 20px",
          "20px 30px 50px 30px",
          "20px 30vh 0px 30vh",
        ]}
      >
        <Heading textAlign={"center"} padding={"40px 0"}>
          Terms & Conditions
        </Heading>
        <Flex direction={"column"}>
          {TermAndCondition.map((condition, index) => (
            <Text key={index} fontWeight={600}>
              {index + 1}. {condition}
            </Text>
          ))}
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default Refer;
