import {
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import PasswordInputComponent from "../Components/PasswordInputComponent";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import { Spinner } from "@chakra-ui/react";
const LoginComponent = ({ setIsLoginForm }) => {
  const { isLogin, login } = useGlobalContext();
  const toast = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = loginData;
  const getPassword = (password) => {
    setLoginData({
      ...loginData,
      password: password,
    });
  };
  const handleSignInBtn = async () => {
    setIsLoading(true);

    if (username.length === 0 && password.length === 0) {
      toast({
        title: "User Id and Password are empty",
        description: "userId and Password Invalide",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
        containerStyle: {
          backgroundColor: "red",
        },
      });
    } else if (username.length === 0) {
      toast({
        title: "User Id are empty",
        description: "userId and Password Invalide",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
        containerStyle: {
          backgroundColor: "red",
        },
      });
    } else if (password.length === 0) {
      toast({
        title: "Password are empty",
        description: "userId and Password Invalide",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
        containerStyle: {
          backgroundColor: "red",
        },
      });
    } else {
      console.log(password.length);
      try {
        const { data } = await axios.get(
          "https://earningzone-api.onrender.com/user"
        );
        const users = data.users;

        users.map((user) => {
          if (username === user.userId && password === user.password) {
            login(user, true);
            navigate("/user");
            setIsLoading(false);
          }
        });

        if (!isLogin) {
          setIsLoading(false);
        }
      } catch (error) {
        alert("Netowrk Problem");
        setIsLoading(false);
      }
    }
  };
  return (
    <>
      <Flex
        width={"100%"}
        backgroundColor={"rgba(80, 79, 79, 0.76)"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"absolute"}
        zIndex={"1"}
        top={"0"}
        display={isLoading ? "flex" : "none"}
      >
        <VStack>
          <Spinner
            thickness="5px"
            speed="1s"
            emptyColor="gray.200"
            color="green.500"
            size="xl"
          />
          <Text
            fontSize={"30px"}
            fontWeight={600}
            letterSpacing={"1.5px"}
            color={"green.400"}
          >
            Prossesing....
          </Text>
        </VStack>
      </Flex>
      <VStack position={"relative"} margin={["50px 10px 10px 10px"]}>
        <Heading color={"white"}>SIGN IN</Heading>
        <Image
          width={"150px"}
          borderRadius={"50%"}
          position={"absolute"}
          top={"65px"}
          border={"5px solid black"}
          src="/assets/loginAminAvtar.jpg"
        />
        <Stack
          width={["full", "full", "550px", "550px"]}
          border={"2px solid black"}
          padding={"7rem 20px 20px 20px"}
          gap={"20px"}
          marginTop={"5rem"}
          borderRadius={"10px"}
          bg={"white"}
        >
          <Input
            placeholder="Username"
            value={username}
            onChange={(event) =>
              setLoginData({
                ...loginData,
                username: event.target.value,
              })
            }
          />
          <PasswordInputComponent
            placeholder={"Password"}
            passwordGetFunction={getPassword}
            password={password}
          />
          <Button onClick={handleSignInBtn}>Login</Button>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDirection={["column", "column", "row", "row"]}
            gap={"20px"}
          >
            <Button
              w={["100%", "100%", "auto", "auto"]}
              onClick={() => setIsLoginForm(false)}
            >
              CREATE NEW ACCOUNT
            </Button>
            <Flex
              textAlign={"right"}
              flexDirection={["row", "row", "column", "column"]}
              gap={["10px", "15px", "2px"]}
            >
              <Text textAlign={["center", "center", "right"]}>
                Forgot Username?{" "}
                <Text
                  as={"span"}
                  fontWeight={"600"}
                  cursor={"pointer"}
                  color={"blue"}
                >
                  Recover Now
                </Text>
              </Text>
              <Text textAlign={["center", "center", "right"]}>
                Forgot Password?
                <Text
                  as={"span"}
                  fontWeight={"600"}
                  cursor={"pointer"}
                  color={"blue"}
                >
                  Reset Now
                </Text>
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </VStack>
    </>

    // {isLoading === true ? (
    //         <Spinner
    //           thickness="4px"
    //           speed="0.65s"
    //           emptyColor="gray.200"
    //           color="blue.500"
    //           size="xl"
    //         />
    //       ) : (
    //         "SIGN IN"
    //       )}
  );
};

export default LoginComponent;
