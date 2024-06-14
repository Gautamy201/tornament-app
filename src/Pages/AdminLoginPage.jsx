import {
  Button,
  Flex,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { adminLogin } = useGlobalContext();
  const [adminInput, setAdminInput] = useState({
    adminId: "",
    adminPassword: "",
  });
  const handleAdminLogin = async () => {
    const response = await axios.get(
      "https://earningzone-api.onrender.com/admin"
    );
    const adminDetail = response.data;
    if (
      adminDetail.adminId === adminInput.adminId &&
      adminDetail.password === adminInput.adminPassword
    ) {
      adminLogin();
      navigate("/admin");
    } else {
      alert("Login Unsuccessful");
    }
  };
  return (
    <>
      <Flex
        minH={"100vh"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10px"}
      >
        <VStack gap={"50px"}>
          <Heading
            letterSpacing={"1.5px"}
            style={{
              WebkitTextStrokeColor: "green",
              WebkitTextStrokeWidth: "1.5px",
            }}
          >
            Admin Login Panel
          </Heading>
          <Stack gap={"10px"} width={"500px"}>
            <HStack>
              <FormLabel width={"150px"}>Admin ID</FormLabel>
              <Input
                type="text"
                variant={"outline"}
                value={adminInput.adminId}
                onChange={(e) =>
                  setAdminInput({ ...adminInput, adminId: e.target.value })
                }
              />
            </HStack>
            <HStack>
              <FormLabel width={"150px"}>Password</FormLabel>
              <Input
                type="password"
                variant={"outline"}
                value={adminInput.adminPassword}
                onChange={(e) =>
                  setAdminInput({
                    ...adminInput,
                    adminPassword: e.target.value,
                  })
                }
              />
            </HStack>
            <Button
              h={"55px"}
              fontSize={"20px"}
              border={"none"}
              bg={"green"}
              color={"white"}
              borderRadius={"5px"}
              mt={"20px"}
              fontWeight={600}
              variant={"none"}
              onClick={handleAdminLogin}
            >
              Admin Login
            </Button>
          </Stack>
        </VStack>
      </Flex>
    </>
  );
};

export default AdminLoginPage;
