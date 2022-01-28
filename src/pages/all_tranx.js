import React, { Component } from "react";
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
  Image,
} from "@chakra-ui/react";
import Navi from "../components/nav";
import { AddIcon } from "@chakra-ui/icons";
import kakao from "../image/kakao.png";
import naver from "../image/naver.png";
import skku from "../image/skku.png";

function AllTranxPg() {
  return (
    <Box bg="#E5E5E5">
      <HStack>
        <Navi />
        <VStack border="1px" w="100vw" h="100vh" justify="space-evenly">
          <Heading size="2xl">전체 거래내역</Heading>
          <Box
            position="absolute"
            w="950px"
            bottom="190px"
            right="140px"
            border="1px"
            borderColor="#4318FF"
            borderWidth="1px"
          ></Box>
          <Box w="1024px" h="250px" bg="white" borderRadius="20px">
            <HStack p="20px" justify="space-between">
              <Heading size="md" textColor="#4318FF">
                Latest Blocks
              </Heading>
              <Button leftIcon={<AddIcon />} colorScheme="pink">
                More
              </Button>
            </HStack>
            <HStack id="components" h="170px" justify="space-evenly">
              <VStack className="blockNumber" h="165px" justify="space-evenly">
                <Text textColor="#4318FF" pb="10px" as="em">
                  Block Number
                </Text>
                <Text>12523</Text>
                <Text>12522</Text>
                <Text>12521</Text>
              </VStack>
              <VStack className="Btime" h="165px" justify="space-evenly">
                <Text textColor="#4318FF" pb="10px" as="em">
                  시간
                </Text>
                <Text textColor="#A3AED0">2021-09-26 14:13:40</Text>
                <Text textColor="#A3AED0">2021-09-26 14:13:40</Text>
                <Text textColor="#A3AED0">2021-09-26 14:13:40</Text>
              </VStack>
              <VStack className="BHash" h="165px" justify="space-evenly">
                <Text textColor="#4318FF" pb="10px" as="em">
                  Hash
                </Text>
                <Text isTruncated>
                  ebca498ec6fd35edc284e67f70ea5f0b53976925e6b140110e0b407b7ae5eaef
                </Text>
                <Text isTruncated>
                  ebca498ec6fd35edc284e67f70ea5f0b53976925e6b140110e0b407b7ae5eaef
                </Text>
                <Text isTruncated>
                  ebca498ec6fd35edc284e67f70ea5f0b53976925e6b140110e0b407b7ae5eaef
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box w="1024px" h="300px" bg="white" borderRadius="20px">
            <HStack p="20px" justify="space-between">
              <Heading size="md" textColor="#4318FF">
                Latest Transactions
              </Heading>
              <Button leftIcon={<AddIcon />} colorScheme="pink">
                More
              </Button>
            </HStack>
            <HStack id="components" h="220px" justify="space-evenly">
              <VStack className="platform" h="220px" justify="space-evenly">
                <Text textColor="#4318FF" pb="10px" as="em">
                  플랫폼
                </Text>
                <HStack w="200px" justify="center">
                  <Image src={kakao} w="30px" h="30px" />
                  <Text>KakaoPay</Text>
                </HStack>
                <HStack w="200px" justify="center">
                  <Image src={skku} w="30px" h="30px" />
                  <Text>SKKU</Text>
                </HStack>
                <HStack w="200px" justify="center">
                  <Image src={naver} w="30px" h="30px" />
                  <Text>NaverPay</Text>
                </HStack>
              </VStack>
              <VStack className="time" h="220px" justify="space-evenly">
                <Text textColor="#4318FF" pb="10px" as="em">
                  시간
                </Text>
                <Text textColor="#A3AED0">2021-09-26 14:13:40</Text>
                <Text textColor="#A3AED0">2021-09-26 14:13:40</Text>
                <Text textColor="#A3AED0">2021-09-26 14:13:40</Text>
              </VStack>
              <VStack className="from" h="220px" justify="space-evenly">
                <Text textColor="#4318FF" pb="10px" as="em">
                  FROM
                </Text>
                <Text isTruncated>0xa0c68...</Text>
                <Text isTruncated>0x30f05...</Text>
                <Text isTruncated>0xdac17...</Text>
              </VStack>
              <VStack className="to" h="220px" justify="space-evenly">
                <Text textColor="#4318FF" pb="10px" as="em">
                  TO
                </Text>
                <Text isTruncated>0x6f071...</Text>
                <Text isTruncated>0xc9770...</Text>
                <Text>0x158d5...</Text>
              </VStack>
              <VStack className="amount" h="220px" justify="space-evenly">
                <Text textColor="#4318FF" pb="10px" as="em">
                  금액
                </Text>
                <Text textColor="green">+ 12.34</Text>
                <Text textColor="red">- 56.78</Text>
                <Text textColor="green">+ 12.34</Text>
              </VStack>
              <VStack className="hash" h="220px" justify="space-evenly">
                <Text textColor="#4318FF" pb="10px" as="em">
                  HASH
                </Text>
                <Text>ebcaef...</Text>
                <Text>ebcaef...</Text>
                <Text>ebcaef...</Text>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
}

export default AllTranxPg;
