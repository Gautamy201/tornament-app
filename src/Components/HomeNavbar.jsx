import {
  Box,
  Button,
  HStack,
  Link,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Stack,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const HomeNavbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("top");

  return (
    <HStack
      justifyContent={"space-between"}
      bg={"#232b2c"}
      padding={[".5rem 2rem", ".5rem 2rem", ".5rem 2rem", "1rem 10vw"]}
      alignItems={"center"}
      color={"white"}
      position={"fixed"}
      width={"100%"}
      h={"10vh"}
      zIndex={"1"}
    >
      <Box>
        <Text
          fontSize={["25px", "25px", "35px"]}
          letterSpacing={"2px"}
          fontWeight={900}
          style={{
            WebkitTextStrokeColor: "black",
            WebkitTextStrokeWidth: "1px",
          }}
          color={"#0fa4af"}
        >
          EarningZone
        </Text>
      </Box>
      <HStack
        gap={"25px"}
        fontSize={"20px"}
        fontWeight={600}
        display={["none", "none", "none", "Flex"]}
      >
        <Link _hover={{ color: "#0FA4AF" }}>
          <NavLink to={"/home"}>Home</NavLink>
        </Link>
        <Link _hover={{ color: "#0FA4AF" }}>
          <NavLink>About</NavLink>
        </Link>
        <Link _hover={{ color: "#0FA4AF" }}>
          <NavLink to={"/refer"}>Reffer & Earn</NavLink>
        </Link>
        <Button
          bg={"#AFDDE5"}
          variant={"outline"}
          _hover={{ bg: "#0FA4AF" }}
          onClick={() => navigate("/loginSignup")}
        >
          Create New Account
        </Button>
      </HStack>
      <Box display={["block", "block", "block", "none"]}>
        <Button
          colorScheme="blue"
          onClick={onOpen}
          bg={"transparent"}
          color={"white"}
          _hover={{ bg: "#0FA4AF" }}
          padding={0}
          fontSize={"35px"}
        >
          <i className="ri-menu-line"></i>
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg={"#232b2c"} color={"white"}>
            <DrawerHeader borderBottomWidth="1px">
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Text>EarningZone</Text>
                <Box onClick={onClose}>
                  <Button
                    border={"2px solid green"}
                    w={"fit-content"}
                    color={"white"}
                    bg={"green.400"}
                    _hover={{ bg: "transparent", boxShadow: "none" }}
                    onClick={() => navigate("/loginSignup")}
                  >
                    SIGNUP
                  </Button>
                </Box>
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <Stack>
                <Stack>
                  <Link
                    onClick={() => navigate("/home")}
                    fontSize={"1.2rem"}
                    fontWeight={600}
                  >
                    <Text onClick={onClose}>Home</Text>
                  </Link>
                </Stack>
                <Stack>
                  <Link
                    fontSize={"1.2rem"}
                    fontWeight={600}
                    _hover={{ color: "#0FA4AF" }}
                    onClick={() => navigate("/about")}
                  >
                    <Text onClick={onClose}>About</Text>
                  </Link>
                </Stack>
                <Stack>
                  <Link
                    fontSize={"1.2rem"}
                    fontWeight={600}
                    _hover={{ color: "#0FA4AF" }}
                    onClick={() => navigate("/refer")}
                  >
                    <Text onClick={onClose}>Reffer & Earn</Text>
                  </Link>
                </Stack>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </HStack>
  );
};

export default HomeNavbar;
