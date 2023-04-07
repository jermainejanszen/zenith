import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Container
      as={Flex}
      direction={"row"}
      justify={"center"}
      minW={"full"}
      borderTop={"1px"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
      mt={2}
      py={2}
    >
      © Zenith Garden Neighbourhood Association DP NO. 285537
    </Container>
  );
};

export default Footer;
