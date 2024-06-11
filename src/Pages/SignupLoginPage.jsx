import { Box } from "@chakra-ui/react";
import PasswordInputComponent from "../Components/PasswordInputComponent";
import CreateNewAccountComponent from "../Components/CreateNewAccountComponent";
import LoginComponent from "../Components/LoginComponent";
import { useState } from "react";
const SignupLoginPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  return (
    <Box p={"10vh 0"} backgroundColor={"black"} minH={"100vh"}>
      {isLoginForm === true ? (
        <LoginComponent setIsLoginForm={setIsLoginForm} />
      ) : (
        <CreateNewAccountComponent setIsLoginForm={setIsLoginForm} />
      )}
    </Box>
  );
};

export default SignupLoginPage;
