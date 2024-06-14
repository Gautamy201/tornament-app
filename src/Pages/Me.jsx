import {
  Box,
  Center,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useState } from "react";
const Me = () => {
  const { userDetail } = useGlobalContext();
  const menuLinksDetails = [
    {
      name: "Rewards",
      icon: "ri-trophy-fill",
      link: "/user/me/reward",
      mobileScreenLink: "/user/reward",
    },
    {
      name: "Refer & Earn",
      icon: "ri-group-fill",
      link: "/user/me/refer&earn",
      mobileScreenLink: "/user/refer&_earn",
    },
    {
      name: "My Profile",
      icon: "ri-shield-user-fill",
      link: "/user/me/profile",
      mobileScreenLink: "/user/profile",
    },
    {
      name: "My Wallet",
      icon: "ri-wallet-3-fill",
      link: "/user/me/wallet",
      mobileScreenLink: "/user/wallet",
    },
    {
      name: "My Statistics",
      icon: "ri-bar-chart-grouped-fill",
      link: "/user/me/statistics",
      mobileScreenLink: "/user/statistics",
    },
    {
      name: "Notifications",
      icon: "ri-notification-4-fill",
      link: "/user/me/notification",
      mobileScreenLink: "/user/notification",
    },
    {
      name: "Important Guides",
      icon: "ri-graduation-cap-fill",
      link: "/user/me/importantGuides",
      mobileScreenLink: "/user/importantGuides",
    },
    {
      name: "About Us",
      icon: "ri-error-warning-fill",
      link: "/user/me/aboutus",
      mobileScreenLink: "/user/aboutus",
    },
    {
      name: "Customer Support",
      icon: "ri-customer-service-2-fill",
      link: "/user/me/customerSupport",
      mobileScreenLink: "/user/customerSupport",
    },
    {
      name: "Legality",
      icon: "ri-book-fill",
      link: "/user/me/lagality",
      mobileScreenLink: "/user/lagality",
    },
  ];

  const [navTitle, setNavTitle] = useState("Profile");
  return (
    <Box padding={"10vh 0 0 0"} bg={"white"}>
      <Center
        color={"white"}
        padding={["20px", "25px", "35px,50px"]}
        bg={"#242428"}
      >
        <HStack gap={"20px"} flexDirection={["column", "column", "row", "row"]}>
          <Box width={"150px"}>
            <Image src="/assets/avtar.png" />
          </Box>
          <VStack alignItems={"self-start"}>
            <Text
              textTransform={"capitalize"}
              fontWeight={600}
              fontSize={"1.8rem"}
            >
              {userDetail.firstName + " " + userDetail.lastName}
            </Text>
            <Text fontSize={"1.2rem"}>
              Username :
              <Text
                as={"span"}
                ml={"10px"}
                fontWeight={600}
                fontSize={"1.2rem"}
              >
                {userDetail.userId}
              </Text>
            </Text>
            <Text fontSize={"1.5rem"}>
              EarnCoins :
              <Text as={"span"} ml={"10px"} fontWeight={600} fontSize={"2rem"}>
                0
              </Text>
            </Text>
          </VStack>
        </HStack>
      </Center>
      <Box display={["none", "none", "none", "block"]}>
        <HStack alignItems={"start"}>
          <VStack
            className="SideNavBar"
            w={["100%", "100%", "22%", "22%"]}
            padding={"20px"}
            gap={"15px"}
            h={"600px"}
          >
            {menuLinksDetails.map((link) => (
              <Box
                key={link.name}
                boxShadow={"#003135 0px 1px 2px 0px, #003135 0px 1px 3px 1px"}
                borderRadius={"5px"}
                width={"100%"}
                padding={"4px 10px"}
                cursor={"pointer"}
                color={"gray.700"}
                _hover={{ backgroundColor: "#0fa4af", color: "black" }}
                onClick={() => setNavTitle(link.name)}
              >
                <NavLink to={link.link}>
                  <SimpleGrid columns={5} columnGap={3} alignItems={"center"}>
                    <GridItem colSpan={1} width={"100%"}>
                      <Text
                        width={"100%"}
                        textAlign={"Right"}
                        fontSize={"22px"}
                      >
                        <i className={link.icon}></i>
                      </Text>
                    </GridItem>
                    <GridItem colSpan={3}>
                      <Text
                        fontSize={"16px"}
                        fontWeight={700}
                        letterSpacing={"1px"}
                      >
                        {link.name}
                      </Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Text fontSize={"20px"}>
                        <i className="ri-arrow-right-s-line"></i>
                      </Text>
                    </GridItem>
                  </SimpleGrid>
                </NavLink>
              </Box>
            ))}
          </VStack>
          <Box className="menuView" h={"600px"} margin={"20px"} w={"80%"}>
            <Text
              bg={"#0fa4af"}
              padding={"10px"}
              fontSize={"20px"}
              textAlign={"center"}
              fontWeight={600}
              height={"50px"}
            >
              {navTitle}
            </Text>
            <Box overflowY={"scroll"} h={"550px"}>
              <Outlet />
            </Box>
          </Box>
        </HStack>
      </Box>
      <HStack display={["block", "block", "block", "none"]}>
        <VStack
          className="SideNavBar"
          w={"100%"}
          padding={"20px"}
          gap={"15px"}
          h={"600px"}
        >
          {menuLinksDetails.map((link) => (
            <Box
              key={link.name}
              boxShadow={"#003135 0px 1px 2px 0px, #003135 0px 1px 3px 1px"}
              borderRadius={"5px"}
              width={"100%"}
              padding={"4px 10px"}
              cursor={"pointer"}
              color={"gray.700"}
              _hover={{ backgroundColor: "#0fa4af", color: "black" }}
              onClick={() => setNavTitle(link.name)}
            >
              <NavLink to={link.mobileScreenLink}>
                <SimpleGrid columns={5} columnGap={3} alignItems={"center"}>
                  <GridItem colSpan={1} width={"100%"}>
                    <Text width={"100%"} textAlign={"Right"} fontSize={"22px"}>
                      <i className={link.icon}></i>
                    </Text>
                  </GridItem>
                  <GridItem colSpan={3}>
                    <Text
                      fontSize={"16px"}
                      fontWeight={700}
                      letterSpacing={"1px"}
                    >
                      {link.name}
                    </Text>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Text fontSize={"20px"}>
                      <i className="ri-arrow-right-s-line"></i>
                    </Text>
                  </GridItem>
                </SimpleGrid>
              </NavLink>
            </Box>
          ))}
        </VStack>
      </HStack>
    </Box>
  );
};

export default Me;
