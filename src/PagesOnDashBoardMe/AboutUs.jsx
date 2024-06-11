import React from "react";
import ComanComponent from "../Components/ComanComponent";
import Footer from "../Components/Footer";
import { Box, Button } from "@chakra-ui/react";
import { useGlobalContext } from "../context";
const AboutUs = () => {
  const { userDetail } = useGlobalContext();
  console.log(userDetail);
  const info = `EarningZone is an Ultimate Solution to all your eSports Games.

EarningZone is an Online Portal which Offers Rewards and Unlimited Entertainment for Participating and Playing Games Online. Users can play online multiple games like , Free Fire, Call Of Duty Mobile, etc. and Earn Cash Rewards and Prizes based on their in-game performance..

Founded and Launched on 8th November 2024, was developed by two young minds from UttarPradesh, India!

You might be addicted to Online Games but just think what if you can start making money or living by Playing Mobile Games? Well, this is what EarningZone Offers. Users can participate in the upcoming eSports games and Win Amazing Prizes and Rewards.

Participate in the Tournaments of Games like Free Fire, Call Of Duty Mobile, Fortnite, Battlegrounds Mobile India etc. and Earn Huge Rewards Daily. Users can join Custom Rooms, and Get Rewards for Chicken Dinner and also for each Kill they Score. Sounds cool, huh?? Give it a try!`;
  return (
    <>
      <Box bg={"black"}>
        <ComanComponent heading={"About Us"} info={info} />
        <Footer />
      </Box>
    </>
  );
};

export default AboutUs;
