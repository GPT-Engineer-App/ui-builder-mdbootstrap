import React from "react";
import { Box, Flex, Heading, Text, Button, Image, VStack, HStack, Container, StackDivider, useColorModeValue, IconButton, Spacer } from "@chakra-ui/react";
import { FaBars, FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navbar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.600", "white")}>
        <IconButton icon={<FaBars />} display={{ base: "block", md: "none" }} aria-label="Open Menu" />
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          MDBootstrap
        </Heading>
        <Spacer />
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Button leftIcon={<FaSearch />} variant="ghost">
            Search
          </Button>
          <Button leftIcon={<FaShoppingCart />} variant="ghost">
            Cart
          </Button>
          <Button leftIcon={<FaUserCircle />} variant="ghost">
            Account
          </Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Container maxW="container.xl" centerContent py={10}>
        <VStack spacing={5}>
          <Heading as="h2" size="2xl">
            Modern UI Kit
          </Heading>
          <Text fontSize="xl" textAlign="center">
            High-quality design and development tools built for Bootstrap to create elegant and beautiful applications.
          </Text>
          <Button size="lg" colorScheme="blue">
            Get Started
          </Button>
          <Image borderRadius="lg" src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ24lMjBkZXNrdG9wfGVufDB8fHx8MTcwODc2MzI4OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Modern design" objectFit="cover" w="full" h={{ base: "300px", md: "500px" }} />
        </VStack>
      </Container>

      {/* Features Section */}
      <Box py={10} bg={useColorModeValue("gray.50", "gray.800")}>
        <VStack spacing={4} divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.700")} />}>
          <Feature title="Responsive" text="Fits every screen sizes for the best experience." />
          <Feature title="Customizable" text="Easy to use and customize to your needs." />
          <Feature title="Modern" text="Up-to-date with the latest design trends." />
        </VStack>
      </Box>
    </Box>
  );
};

const Feature = ({ title, text }) => (
  <Box p={5} textAlign="center">
    <Heading as="h3" size="lg" mb={3}>
      {title}
    </Heading>
    <Text fontSize="md">{text}</Text>
  </Box>
);

export default Index;
