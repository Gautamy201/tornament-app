import {
  Box,
  Flex,
  GridItem,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Stack
      color={"gray"}
      padding={[
        "20px 20px 50px 20px",
        "20px 30px 50px 30px",
        "20px 30vh 20px 30vh",
      ]}
    >
      <SimpleGrid columns={[1, 1, 4]} gap={"20px"}>
        <GridItem colSpan={1} color={"white"} textAlign={"center"}>
          <Stack fontSize={"30px"} fontWeight={900} letterSpacing={"1px"}>
            <Text>EarningZone</Text>
          </Stack>
          <Flex justifyContent={"center"} fontSize={"40px"} gap={"10px"}>
            <Link>
              <i className="ri-facebook-fill"></i>
            </Link>
            <Link>
              <i className="ri-twitter-fill"></i>
            </Link>
            <Link>
              <i className="ri-youtube-fill"></i>
            </Link>
            <Link>
              <i className="ri-youtube-fill"></i>
            </Link>
          </Flex>
        </GridItem>
        <GridItem colSpan={1}>
          <VStack alignItems={["center", "center", "flex-start"]}>
            <Heading color={"white"} fontSize={"22px"}>
              About
            </Heading>
            <Link display={"block"}>About Us</Link>
            <Link display={"block"}>Contact Us</Link>
            <Link display={"block"}>Advertise with Us</Link>
            <Link display={"block"}>Terms & Conditions</Link>
          </VStack>
        </GridItem>
        <GridItem colSpan={1}>
          <VStack alignItems={["center", "center", "flex-start"]}>
            <Heading color={"white"} fontSize={"22px"}>
              Legal
            </Heading>
            <Link>Privacy Policy</Link>
            <Link>Fair Play Policy</Link>
            <Link>Refund Policy</Link>
            <Link>Cancellation Policy</Link>
            <Link>Disclaimer & Credits</Link>
          </VStack>
        </GridItem>
        <GridItem colSpan={1}>
          <VStack alignItems={["center", "center", "flex-start"]}>
            <Heading color={"white"} fontSize={"22px"}>
              Information
            </Heading>
            <Text textAlign={"justify"}>
              PlayerZon - An Ultimate eSports Platform. Participate in the
              Online Multiplayer Tournaments or Contests & Win Cash Prizes,
              Rewards. Currently supports{" "}
              <Link fontWeight={700} color={"white"}>
                Battlegrounds Mobile India
              </Link>
              ,{" "}
              <Link fontWeight={700} color={"white"}>
                Free Fire
              </Link>{" "}
              and{" "}
              <Link fontWeight={700} color={"white"}>
                COD Mobile.
              </Link>{" "}
              Upcoming Games on PlayerZon: Fortnite, Valorant, etc.
            </Text>
          </VStack>
        </GridItem>
      </SimpleGrid>
      <hr />
      <Box color={"white"} textAlign={"center"}>
        <Text>Copyright © 2024 All Rights Reserved | EarningZone</Text>
        <Text>
          All the Logos,Trademarks and Images belongs to their Respective Owners
        </Text>
      </Box>
    </Stack>
  );
};

export default Footer;
