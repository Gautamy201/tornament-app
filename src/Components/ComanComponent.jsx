import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const ComanComponent = ({
  heading,
  info,
  btnText1,
  btnText2,
  btnFun1,
  btnFun2,
}) => {
  return (
    <>
      <Box
        backgroundColor={"#1c2a2a"}
        backgroundBlendMode={"overlay"}
        color={"white"}
        pt={"10vh"}
      >
        <Heading
          display={["none", "none", "none", "block"]}
          position={"absolute"}
          textTransform={"uppercase"}
          fontSize={"9.2vw"}
          left={"200px"}
          fontWeight={900}
          top={70}
          color={"#0fa4af"}
          style={{
            WebkitTextStrokeColor: "black",
            WebkitTextStrokeWidth: "3px",
          }}
          zIndex={"0"}
        >
          <Text>
            EarningZ<Text as={"span"}>&#160;&#160;&#160;&#160;</Text>ne
          </Text>
        </Heading>
        <Flex
          padding={[
            "20px 20px 50px 20px",
            "20px 30px 50px 30px",
            "20px 30vh 0px 30vh",
          ]}
          flexDirection={["column", "column", "row-reverse"]}
          gap={["0", "0", "20px"]}
          h={"auto"}
        >
          <Flex
            justifyContent={"center"}
            width={"100%"}
            height={["55vh", "55vh", "85vh"]}
            backgroundImage={"url(/assets/heroImage.png)"}
            backgroundSize={["contain", "contain", "cover"]}
            backgroundPosition={" top center"}
            backgroundRepeat={"no-repeat"}
            backgroundColor={"#1c2a2a"}
            backgroundBlendMode={"lighten"}
          ></Flex>
          <VStack
            width={["100%", "100%", "100%"]}
            h={["auto", "auto", "85vh"]}
            justifyContent={"center"}
            gap={"20px"}
          >
            <Heading
              fontWeight={700}
              textAlign={"left"}
              w={"100%"}
              fontSize={["30px", "30px", "3.5rem"]}
            >
              {heading}
            </Heading>
            <Text textAlign={"justify"}>{info}</Text>
            <VStack
              flexDirection={["column", "column", "row"]}
              width={"100%"}
              gap={"20px"}
            >
              {btnText1 === undefined ? (
                ""
              ) : (
                <Button onClick={btnFun1} width={"100%"}>
                  {btnText1}
                </Button>
              )}

              {btnText2 === undefined ? (
                ""
              ) : (
                <Button onClick={btnFun2} width={"100%"}>
                  {btnText2}
                </Button>
              )}
            </VStack>
          </VStack>
        </Flex>
      </Box>
    </>
  );
};

export default ComanComponent;
