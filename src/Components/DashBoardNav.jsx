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
  VStack,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NotifiactionButton from "./NotifiactionButton";
import WalletButton from "./WalletButton";
import { useGlobalContext } from "../context";
const DashBoardNav = () => {
  const { logout } = useGlobalContext();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  const handleLogoutBtn = () => {
    logout();
    navigate("/home");
  };
  return (
    <HStack
      justifyContent={"space-between"}
      bg={"#11494e"}
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
        gap={"35px"}
        fontSize={"22px"}
        fontWeight={600}
        display={["none", "none", "none", "Flex"]}
      >
        <Link
          _hover={{ color: "#0FA4AF" }}
          display={"flex"}
          gap={1}
          alignItems={"center"}
        >
          <NavLink to={"/dashboard/play"}>
            <i className="ri-play-circle-line">
              <Text as={"span"} pl={"10px"}>
                Play
              </Text>
            </i>
          </NavLink>
        </Link>
        <Link
          _hover={{ color: "#0FA4AF" }}
          display={"flex"}
          gap={1}
          alignItems={"center"}
        >
          <NavLink>
            <i className="ri-youtube-fill">
              <Text as={"span"} pl={"10px"}>
                Video
              </Text>
            </i>
          </NavLink>
        </Link>
        <Link
          _hover={{ color: "#0FA4AF" }}
          display={"flex"}
          gap={1}
          alignItems={"center"}
        >
          <NavLink to={"/refer"}>
            <i className="ri-money-rupee-circle-line">
              <Text as={"span"} pl={"10px"}>
                Earn
              </Text>
            </i>
          </NavLink>
        </Link>
        <Link
          _hover={{ color: "#0FA4AF" }}
          display={"flex"}
          gap={1}
          alignItems={"center"}
        >
          <NavLink to={"/refer"}>
            <i className="ri-article-line">
              <Text as={"span"} pl={"10px"}>
                News
              </Text>
            </i>
          </NavLink>
        </Link>
        <Link
          _hover={{ color: "#0FA4AF" }}
          display={"flex"}
          gap={1}
          alignItems={"center"}
        >
          <NavLink to={"/dashboard/me"}>
            <i className="ri-emotion-line">
              <Text as={"span"} pl={"10px"}>
                Me
              </Text>
            </i>
          </NavLink>
        </Link>
        <Flex gap={"20px"} alignItems={"center"} ml={"50px"}>
          <NotifiactionButton />
          <WalletButton />
        </Flex>
        <Button onClick={handleLogoutBtn}>Logout</Button>
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
          <DrawerContent bg={"#232b2c"}>
            <DrawerHeader borderBottomWidth="1px" color={"white"}>
              <HStack justifyContent={"space-between"}>
                <NotifiactionButton />
                <WalletButton />
              </HStack>
            </DrawerHeader>
            <DrawerBody>
              <VStack padding={"10px"} color={"white"}>
                <Stack
                  borderBottom={"1px solid white"}
                  width={"100%"}
                  textAlign={"center"}
                  padding={"10px 0"}
                >
                  <Link
                    fontSize={"25px"}
                    fontWeight={600}
                    _hover={{ color: "#0FA4AF" }}
                    onClick={() => navigate("/dashboard/play")}
                  >
                    <i className="ri-play-circle-line">
                      <Text onClick={onClose} as={"span"} pl={"10px"}>
                        Play
                      </Text>
                    </i>
                  </Link>
                </Stack>
                <Stack
                  borderBottom={"1px solid white"}
                  width={"100%"}
                  textAlign={"center"}
                  padding={"10px 0"}
                >
                  <Link
                    fontSize={"25px"}
                    fontWeight={600}
                    _hover={{ color: "#0FA4AF" }}
                    onClick={() => navigate("/dashboard/videos")}
                  >
                    <i className="ri-youtube-fill">
                      <Text onClick={onClose} as={"span"} pl={"10px"}>
                        video
                      </Text>
                    </i>
                  </Link>
                </Stack>
                <Stack
                  borderBottom={"1px solid white"}
                  width={"100%"}
                  textAlign={"center"}
                  padding={"10px 0"}
                >
                  <Link
                    fontSize={"25px"}
                    fontWeight={600}
                    _hover={{ color: "#0FA4AF" }}
                    onClick={() => navigate("/")}
                  >
                    <i className="ri-money-rupee-circle-line">
                      <Text onClick={onClose} as={"span"} pl={"10px"}>
                        Earn
                      </Text>
                    </i>
                  </Link>
                </Stack>
                <Stack
                  borderBottom={"1px solid white"}
                  width={"100%"}
                  textAlign={"center"}
                  padding={"10px 0"}
                >
                  <Link
                    fontSize={"25px"}
                    fontWeight={600}
                    _hover={{ color: "#0FA4AF" }}
                    onClick={() => navigate("/dashboard/")}
                  >
                    <i className="ri-article-line">
                      <Text onClick={onClose} as={"span"} pl={"10px"}>
                        News
                      </Text>
                    </i>
                  </Link>
                </Stack>
                <Stack
                  borderBottom={"1px solid white"}
                  width={"100%"}
                  textAlign={"center"}
                  padding={"10px 0"}
                >
                  <Link
                    fontSize={"25px"}
                    fontWeight={600}
                    _hover={{ color: "#0FA4AF" }}
                    onClick={() => navigate("/dashboard/me")}
                  >
                    <i className="ri-emotion-line">
                      <Text onClick={onClose} as={"span"} pl={"10px"}>
                        Me
                      </Text>
                    </i>
                  </Link>
                </Stack>
                <Button
                  width={"100%"}
                  bg={"#AFDDE5"}
                  variant={"outline"}
                  _hover={{ bg: "#0FA4AF" }}
                  padding={"30px 0"}
                  fontSize={"22px"}
                  mt={"30px"}
                  fontWeight={700}
                  letterSpacing={"1px"}
                  onClick={handleLogoutBtn}
                >
                  LOGOUT
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </HStack>
  );
};

export default DashBoardNav;
