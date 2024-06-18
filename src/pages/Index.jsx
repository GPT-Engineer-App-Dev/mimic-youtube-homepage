import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Image src="/images/youtube-logo.png" alt="YouTube Logo" boxSize="50px" />
        <Text fontSize="2xl" fontWeight="bold">YouTube</Text>
      </Flex>
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
      </VStack>
    </Container>
  );
};

export default Index;