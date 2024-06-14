import {
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import PasswordInputComponent from "./PasswordInputComponent";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

const CreateNewAccountComponent = ({ setIsLoginForm }) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [createFormData, setCreateFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    mobileNo: "",
    password: "",
    promoCode: "",
  });
  const {
    firstName,
    lastName,
    username,
    email,
    mobileNo,
    password,
    promoCode,
  } = createFormData;
  const getPassword = (pass) => {
    setCreateFormData({ ...createFormData, password: pass });
  };
  const handleRegisterButton = async () => {
    setIsLoading(true);
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      username.length === 0 ||
      email.length === 0 ||
      mobileNo.length === 0 ||
      password.length === 0
    ) {
      toast({
        title: "fill the Form",
        description: "required fild fill propely",
        position: "top",
        status: "error",
        duration: 5000,
        isClosable: true,
        containerStyle: {
          backgroundColor: "red",
        },
      });
    } else {
      console.log("form filleled");
      const response = await axios
        .post("https://earningzone-api.onrender.com/user", {
          firstName: firstName,
          lastName: lastName,
          userId: username,
          email: email,
          mobileNo: mobileNo,
          password: password,
          promoCode: promoCode,
        })
        .then(() => {
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            position: "top",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setCreateFormData({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            mobileNo: "",
            password: "",
            promoCode: "",
          });
          setIsLoading(false);
        })
        .catch(() => {
          toast({
            title: "Account creation failed.",
            description: "Please try again.",
            position: "top",
            status: "error",
            duration: 5000,
            isClosable: true,
            containerStyle: {
              backgroundColor: "red",
            },
          });
        });
      setIsLoading(false);
    }
  };
  return (
    <>
      <Flex
        width={"100%"}
        backgroundColor={"rgba(80, 79, 79, 0.76)"}
        height={"100%"}
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
        <Heading color={"white"}>CREATE NEW ACCOUNT</Heading>
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
          <SimpleGrid columns={2} columnGap={"10px"}>
            <GridItem colSpan={1}>
              <Input
                type="text"
                value={firstName}
                onChange={(event) =>
                  setCreateFormData({
                    ...createFormData,
                    firstName: event.target.value,
                  })
                }
                placeholder="First Name"
                border={
                  firstName.length === 0 ? "1px solid gray" : "1px solid green"
                }
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Input
                type="text"
                value={lastName}
                border={
                  lastName.length === 0 ? "1px solid gray" : "1px solid green"
                }
                onChange={(event) =>
                  setCreateFormData({
                    ...createFormData,
                    lastName: event.target.value,
                  })
                }
                placeholder="Last Name"
              />
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={1}>
            <GridItem colSpan={1}>
              <Input
                type="text"
                value={username}
                border={
                  username.length === 0 ? "1px solid gray" : "1px solid green"
                }
                onChange={(event) =>
                  setCreateFormData({
                    ...createFormData,
                    username: event.target.value,
                  })
                }
                placeholder="Username"
              />
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={1}>
            <GridItem colSpan={1}>
              <Input
                type="email"
                value={email}
                border={
                  email.length === 0 ? "1px solid gray" : "1px solid green"
                }
                onChange={(event) =>
                  setCreateFormData({
                    ...createFormData,
                    email: event.target.value,
                  })
                }
                placeholder="Email Address"
              />
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={6} columnGap={"10px"}>
            <GridItem colSpan={1}>
              <Flex alignItems={"center"} h={"full"}>
                <Image
                  width={["20px", "25px", "30px", "40px"]}
                  src="../../public/Images/india-flag-logo-3522C6780F-seeklogo.com.png"
                />
                <Text>+91</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={5}>
              <Input
                type="number"
                value={mobileNo}
                border={
                  mobileNo.length === 0 ? "1px solid gray" : "1px solid green"
                }
                onChange={(event) =>
                  setCreateFormData({
                    ...createFormData,
                    mobileNo: event.target.value,
                  })
                }
                placeholder="8698052525"
              />
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={1}>
            <GridItem colSpan={1}>
              <PasswordInputComponent
                formData={createFormData}
                passwordGetFunction={getPassword}
                password={password}
                placeholder={"Password"}
                Border={`border={
                firstName.length === 0 ? "1px solid gray" : "1px solid green"
              }`}
              />
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={1}>
            <GridItem colSpan={1}>
              <Input
                value={promoCode}
                border={
                  promoCode.length === 0 ? "1px solid gray" : "1px solid green"
                }
                onChange={(event) =>
                  setCreateFormData({
                    ...createFormData,
                    promoCode: event.target.value,
                  })
                }
                placeholder="Promo Code (Optional"
              />
            </GridItem>
          </SimpleGrid>
          <Button onClick={handleRegisterButton}>REGISTER</Button>
          <Button onClick={() => setIsLoginForm(true)}>LOGIN</Button>
        </Stack>
      </VStack>
    </>
  );
};

export default CreateNewAccountComponent;
