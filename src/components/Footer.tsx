import { Container, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Container
      as={Flex}
      direction={"row"}
      justify={"center"}
      gap={3}
      minW={"full"}
      borderTop={"1px"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
      mt={2}
      py={2}
    >
      <p>© Zenith Garden Neighbourhood Association DP NO. 285537</p>
      <p>|</p>
      <Link as={NextLink} href="contact">
        Contact Us
      </Link>
    </Container>
  );
};

export default Footer;
