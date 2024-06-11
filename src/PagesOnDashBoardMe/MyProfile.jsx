import {
  Box,
  Button,
  FormLabel,
  GridItem,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import PasswordInputComponent from "../Components/PasswordInputComponent";
import { useGlobalContext } from "../context";
const MyProfile = () => {
  const { userDetail } = useGlobalContext();
  return (
    <Box
      padding={[
        "10vh 10px 10px 10px",
        "10vh 10px 10px 10px",
        "10vh 10px 10px 10px",
        "0 50px ",
      ]}
    >
      <Box padding={" 0 10px "}>
        <Stack width={["100%", "auto", "auto", "500px"]}>
          <Heading fontSize={"1.7rem"} m={"20px 0"} color={"blue.500"}>
            Edit Profile
          </Heading>
          <SimpleGrid columns={2} columnGap={2} width={"100%"}>
            <GridItem colSpan={1}>
              <FormLabel>First Name</FormLabel>
              <Input value={userDetail.firstName} />
            </GridItem>
            <GridItem colSpan={1}>
              <FormLabel>Last Name</FormLabel>
              <Input value={userDetail.lastName} type="text" />
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={2}>
            <GridItem colSpan={2}>
              <FormLabel>Username</FormLabel>
              <Input value={userDetail.userId} type="text" />
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={2}>
            <GridItem colSpan={2}>
              <Stack>
                <FormLabel>Email address</FormLabel>
                <Input value={userDetail.email} type="email" />
              </Stack>
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={2}>
            <GridItem colSpan={2}>
              <Stack>
                <FormLabel>Mobile Number</FormLabel>
                <Input value={userDetail.mobileNo} type="number" />
              </Stack>
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={2}>
            <GridItem colSpan={2}>
              <Stack>
                <FormLabel>Date of Birth</FormLabel>
                <Input type="date" />
              </Stack>
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={2}>
            <GridItem colSpan={2}>
              <HStack alignItems={"flex-start"}>
                <FormLabel>Gender</FormLabel>
                <RadioGroup>
                  <HStack>
                    <Radio>Male</Radio>
                    <Radio>Female</Radio>
                  </HStack>
                </RadioGroup>
              </HStack>
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={2}>
            <GridItem colSpan={2}>
              <Button w={"full"} bg={"yellow.500"} fontSize={"22px"}>
                SAVE
              </Button>
            </GridItem>
          </SimpleGrid>
        </Stack>
      </Box>
      <Box>
        <Stack width={["100%", "auto", "auto", "500px"]}>
          <Heading
            fontSize={"1.7rem"}
            m={"20px 0"}
            color={"blue.500"}
            width={"100%"}
          >
            Reset Password
          </Heading>
          <SimpleGrid columns={2}>
            <GridItem colSpan={2}>
              <PasswordInputComponent placeholder={"Old Password"} />
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={2}>
            <GridItem colSpan={2}>
              <PasswordInputComponent placeholder={"New Password"} />
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={2}>
            <GridItem colSpan={2}>
              <PasswordInputComponent placeholder={"Retype New Password"} />
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={2}>
            <GridItem colSpan={2}>
              <Button w={"full"} bg={"yellow.500"} fontSize={"22px"}>
                RESET
              </Button>
            </GridItem>
          </SimpleGrid>
        </Stack>
      </Box>
    </Box>
  );
};

export default MyProfile;
