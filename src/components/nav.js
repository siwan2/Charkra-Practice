import React from "react";
import { Link } from "react-router-dom";
import {
  HStack,
  VStack,
  Box,
  Heading,
  Icon,
  Text,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { RiBankCard2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

function Navi() {
  return (
    <nav>
      <VStack bg="white" w="300px" h="100vh" spacing="20px" pt="40px">
        <HStack w="215px" pb="25px">
          <Box w="44px" h="44px" borderRadius="10" bg="#4318FF"></Box>
          <Text fontSize="4xl" color="#4318FF">
            Logo
          </Text>
        </HStack>
        <Link to="/Home">
          <HStack
            w="215px"
            h="45px"
            colorScheme="teal"
            variant="link"
            color="#A3AED0"
            border="1px"
            pl="5px"
          >
            <Icon as={MdDashboard} />
            <Text>대시보드</Text>
          </HStack>
        </Link>
        <Link to="/MyTranx">
          <HStack
            w="215px"
            h="45px"
            colorScheme="teal"
            variant="link"
            color={"#A3AED0"}
            pl="5px"
          >
            <Icon as={RiBankCard2Line} />
            <Text>My 거래내역</Text>
          </HStack>
        </Link>
        <Link to="/AllTranx">
          <HStack
            w="215px"
            h="45px"
            colorScheme="teal"
            variant="link"
            color={"#A3AED0"}
            pl="5px"
          >
            <Icon as={RiBankCard2Line} />
            <Text>전체 거래내역</Text>
          </HStack>
        </Link>
        <HStack
          w="215px"
          h="45px"
          colorScheme="teal"
          variant="link"
          color={"#A3AED0"}
          pl="5px"
        >
          <Icon as={IoSettingsOutline} />
          <Text>설정</Text>
        </HStack>
        <Link to="/">
          <Button>로그인</Button>
        </Link>
      </VStack>
    </nav>
  );
}

export default Navi;
