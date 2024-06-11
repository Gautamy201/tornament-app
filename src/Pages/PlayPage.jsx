import { useEffect, useState } from "react";
import {
  Box,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import NotifyMessageComponent from "../Components/NotifyMessageComponent";
const PlayPage = () => {
  const color = ["red", "blue", "green", "yellow"];
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      if (count === color.length - 1) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 3000);
  }, []);
  return (
    <Box
      padding={[
        "13vh 10px 20px 10px",
        "15vh 10px 20px 10px",
        "15vh 10px 20px 10px",
        "15vh 30vh 20px 30vh",
      ]}
      bg={"#2b3839"}
      minH={"100vh"}
    >
      <NotifyMessageComponent />
      <Box margin={"20px 0"} border={"1px solid green"}>
        <HStack
          width={"100%"}
          border={"1px solid gray"}
          justifyContent={"center"}
        >
          <Box
            className="bar"
            w={"100%"}
            h={["200px", "210px", "225px", "250px"]}
            bg={color[count]}
          ></Box>
        </HStack>
      </Box>
      <Heading
        textTransform={"uppercase"}
        margin={"20px 0"}
        color={"white"}
        fontSize={["23px", "25px", "37px", "32px"]}
      >
        Contests & Tornaments
      </Heading>
      <Box>
        <SimpleGrid columns={[1, 2, 3, 3]} gap={"20px"}>
          <GridItem
            colSpan={1}
            bg={"red.200"}
            borderRadius={"10px"}
            w={"100%"}
            h={"200px"}
          ></GridItem>
          <GridItem
            colSpan={1}
            bg={"red.200"}
            borderRadius={"10px"}
            w={"100%"}
            h={"200px"}
          ></GridItem>
          <GridItem
            colSpan={1}
            bg={"red.200"}
            borderRadius={"10px"}
            w={"100%"}
            h={"200px"}
          ></GridItem>
          <GridItem
            colSpan={1}
            bg={"red.200"}
            borderRadius={"10px"}
            w={"100%"}
            h={"200px"}
          ></GridItem>
        </SimpleGrid>
      </Box>
      <Heading
        margin={"20px 0"}
        textTransform={"uppercase"}
        color={"white"}
        fontSize={["23px", "25px", "37px", "32px"]}
      >
        Upcoming Tornaments
      </Heading>
      <Box>
        <Box>
          <Image />
          <Stack>
            <Text></Text>
            <HStack></HStack>
            <HStack></HStack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default PlayPage;
