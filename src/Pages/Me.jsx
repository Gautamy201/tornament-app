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
      link: "/dashboard/me/reward",
      mobileScreenLink: "/dashboard/reward",
    },
    {
      name: "Refer & Earn",
      icon: "ri-group-fill",
      link: "/dashboard/me/refer&earn",
      mobileScreenLink: "/dashboard/refer&_earn",
    },
    {
      name: "My Profile",
      icon: "ri-shield-user-fill",
      link: "/dashboard/me/profile",
      mobileScreenLink: "/dashboard/profile",
    },
    {
      name: "My Wallet",
      icon: "ri-wallet-3-fill",
      link: "/dashboard/me/wallet",
      mobileScreenLink: "/dashboard/wallet",
    },
    {
      name: "My Statistics",
      icon: "ri-bar-chart-grouped-fill",
      link: "/dashboard/me/statistics",
      mobileScreenLink: "/dashboard/statistics",
    },
    {
      name: "Notifications",
      icon: "ri-notification-4-fill",
      link: "/dashboard/me/notification",
      mobileScreenLink: "/dashboard/notification",
    },
    {
      name: "Important Guides",
      icon: "ri-graduation-cap-fill",
      link: "/dashboard/me/importantGuides",
      mobileScreenLink: "/dashboard/importantGuides",
    },
    {
      name: "About Us",
      icon: "ri-error-warning-fill",
      link: "/dashboard/me/aboutus",
      mobileScreenLink: "/dashboard/aboutus",
    },
    {
      name: "Customer Support",
      icon: "ri-customer-service-2-fill",
      link: "/dashboard/me/customerSupport",
      mobileScreenLink: "/dashboard/customerSupport",
    },
    {
      name: "Legality",
      icon: "ri-book-fill",
      link: "/dashboard/me/lagality",
      mobileScreenLink: "/dashboard/lagality",
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
            <Image src="/public/Images/avtar.png" />
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
