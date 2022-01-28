import {
  Container,
  Flex,
  HStack,
  VStack,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function LoginPg() {
  return (
    <Flex w="100vw" h="100vh" justifyContent="center" alignItems={"center"}>
      <VStack
        spacing="8"
        p="1"
        boxSize={300}
        bg="linear-gradient(180deg, #522CFB 0%, rgba(134, 140, 255, 0) 100%), #868CFF;"
        borderRadius={20}
        justify="center"
      >
        <Text fontSize={"4xl"} color="white">
          SKKU Wallet
        </Text>
        <Input
          placeholder="아이디"
          borderRadius={20}
          w="215"
          h="35"
          border="1px"
        />
        <Input
          placeholder="비밀번호"
          borderRadius={20}
          w="215"
          h="35"
          border="1px"
        />
        <Button bgColor="#868CFF">
          <Text textColor="white">
            <Link to="/Home">로그인</Link>
          </Text>
        </Button>
      </VStack>
    </Flex>
  );
}

export default LoginPg;
