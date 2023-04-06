import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";

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
                <Button rounded={"full"}>Learn More</Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={"Front pavilion"}
              src={"/images/front-pavilion.jpg"}
              fit={"scale-down"}
            />
          </Flex>
        </Stack>

        <p>
          We are proud of our beautiful surroundings and hope that you will
          support us in retaining the quiet and welcoming atmosphere of this
          small community.
        </p>
        <p>
          We would also ask that you look after and nurture the local fauna and
          flora. We are blessed with an abundance of local mammals, reptiles and
          birdlife and would ask that you ensure your visitors are aware of
          these delights, along with the obvious, natural hazards of the creek
          when walking around.
        </p>
        <p>
          Building on the site finished around 2000 and since then, the estate
          has developed the common facilities of the Pavilion, including
          sporting and recreational amenities.
        </p>
      </main>
    </>
  );
};

export default Home;
