import {
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zenith Garden Estate</title>
        <meta name="description" content="Frenchs Forest Sydney Australia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-full">
        <Stack minH={"90vh"} direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text color={"blue.400"} as={"span"}>
                  Welcome to
                </Text>
                <br />{" "}
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: useBreakpointValue({ base: "20%", md: "30%" }),
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "blue.400",
                    zIndex: -1,
                  }}
                >
                  Zenith Garden Estate
                </Text>{" "}
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }}>
                This site provides useful information for visitors, existing
                residents and new owners living within the estate.
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Resident Sign In
                </Button>
                <Button
                  rounded={"full"}
                  onClick={() =>
                    window.scrollTo({
                      left: 0,
                      top: document.body.scrollHeight,
                      behavior: "smooth",
                    })
                  }
                >
                  Learn More
                </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={"Front pavilion"}
              src={"/images/front-pavilion.jpg"}
              fit={"scale-down"}
              borderRadius={"md"}
            />
          </Flex>
        </Stack>

        <Container maxW="6xl" mt={8}>
          <Card p={"8"}>
            <Stack>
              {[
                `We are proud of our beautiful surroundings and hope that you
                will support us in retaining the quiet and welcoming atmosphere
                of this small community.`,
                `We would also ask that you look after and nurture the local
                fauna and flora. We are blessed with an abundance of local
                mammals, reptiles and birdlife and would ask that you ensure
                your visitors are aware of these delights, along with the
                obvious, natural hazards of the creek when walking around.`,
                `Building on the site finished around 2000 and since then, the
                estate has developed the common facilities of the Pavilion,
                including sporting and recreational amenities.`,
                `We have tried to ensure that the environment is quiet, secure
                and safe for our children to grow and play. We hope that you
                will help us to maintain this peaceful community atmosphere.`,
              ].map((text, index) => (
                <Text key={index}>{text}</Text>
              ))}
              <Text>
                Please feel free to provide us with any constructive feedback on
                either this website, or on any other issue(s) that will enhance
                our community, by contacting the Executive Committee Members, or
                by forwarding an email via the{" "}
                <Link as={NextLink} href="contact">
                  Contact Us
                </Link>{" "}
                page, or by dropping a note into the Zenith Garden Post Box at
                the front gate.
              </Text>
            </Stack>
          </Card>
        </Container>
      </main>
    </>
  );
};

export default Home;
