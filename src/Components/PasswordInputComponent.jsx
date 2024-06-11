import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

const PasswordInputComponent = ({
  placeholder,
  formData,
  password,
  passwordGetFunction,
}) => {
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <Box position={"relative"}>
      <Flex border={"1px solid black"} borderRadius={"10px"}>
        <Input
          border={"none"}
          _focus={{ boxShadow: "none" }}
          placeholder={placeholder}
          type={passwordShow === true ? "text" : "password"}
          value={password}
          onChange={(event) => passwordGetFunction(event.target.value)}
        />
        <Button
          fontSize={["1.3rem", "1.5rem", "1.6rem", "1.7rem"]}
          bg={"transparent"}
          _hover={{ bg: "transparent" }}
          onClick={() => setPasswordShow(!passwordShow)}
        >
          {passwordShow === true ? (
            <i className="ri-eye-off-line"></i>
          ) : (
            <i className="ri-eye-line"></i>
          )}
        </Button>
      </Flex>
    </Box>
  );
};

export default PasswordInputComponent;
