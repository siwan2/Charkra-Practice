import React, { Component } from "react";
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
  Image,
} from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { RiBankCard2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import Navi from "../components/nav";
import kakao from "../image/kakao.png";
import naver from "../image/naver.png";
import skku from "../image/skku.png";

function MyTranxPg() {
  return (
    <Box bg="#E5E5E5">
      <HStack>
        <Navi />
        <VStack border="1px" w="100vw" h="100vh" justify="space-evenly">
          <Heading size="2xl">My 거래내역</Heading>
          <Box w="1024px" h="250px" bg="white" borderRadius="20px"></Box>
          <Box w="1024px" h="300px" bg="white" borderRadius="20px">
            <Box
              position="absolute"
              w="950px"
              bottom="212px"
              right="140px"
              border="1px"
              borderColor="#4318FF"
              borderWidth="1px"
            ></Box>
            <Tabs>
              <TabList>
                <Tab>ALL</Tab>
                <Tab>보낸 내역</Tab>
                <Tab>받은 내역</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <HStack justify="space-evenly">
                    <VStack
                      className="platform"
                      h="220px"
                      justify="space-evenly"
                    >
                      <Text textColor="#4318FF" pb="10px">
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
                      <Text textColor="#4318FF" pb="10px">
                        시간
                      </Text>
                      <Text textColor="#A3AED0">2021-09-26 14:13:40</Text>
                      <Text textColor="#A3AED0">2021-09-26 14:13:40</Text>
                      <Text textColor="#A3AED0">2021-09-26 14:13:40</Text>
                    </VStack>
                    <VStack className="from" h="220px" justify="space-evenly">
                      <Text textColor="#4318FF" pb="10px">
                        FROM
                      </Text>
                      <Text isTruncated>0xa0c68...</Text>
                      <Text isTruncated>0x30f05...</Text>
                      <Text isTruncated>0xdac17...</Text>
                    </VStack>
                    <VStack className="to" h="220px" justify="space-evenly">
                      <Text textColor="#4318FF" pb="10px">
                        TO
                      </Text>
                      <Text isTruncated>0x6f071...</Text>
                      <Text isTruncated>0xc9770...</Text>
                      <Text>0x158d5...</Text>
                    </VStack>
                    <VStack className="amount" h="220px" justify="space-evenly">
                      <Text textColor="#4318FF" pb="10px">
                        금액
                      </Text>
                      <Text>+ 12.34</Text>
                      <Text>-56.78</Text>
                      <Text>+ 12.34</Text>
                    </VStack>
                    <VStack className="hash" h="220px" justify="space-evenly">
                      <Text textColor="#4318FF" pb="10px">
                        HASH
                      </Text>
                      <Text>ebcaef...</Text>
                      <Text>ebcaef...</Text>
                      <Text>ebcaef...</Text>
                    </VStack>
                  </HStack>
                </TabPanel>
                <TabPanel>
                  <HStack justify="space-evenly">
                    <VStack
                      className="platform"
                      h="220px"
                      justify="space-evenly"
                    >
                      <Text textColor="#4318FF" pb="10px">
                        플랫폼
                      </Text>
                      <HStack>
                        <Image src={kakao} w="30px" h="30px" />
                        <Text>KakaoPay</Text>
                      </HStack>
                      <Text textColor="white">SKKU</Text>
                      <Text textColor="white">NaverPay</Text>
                    </VStack>
                    <VStack className="time" h="220px" justify="space-evenly">
                      <Text textColor="#4318FF" pb="10px">
                        시간
                      </Text>
                      <Text textColor="#A3AED0">2021-09-26 14:13:40</Text>
                      <Text textColor="white">2021-09-26 14:13:40</Text>
                      <Text textColor="white">2021-09-26 14:13:40</Text>
                    </VStack>
                    <VStack className="from" h="220px" justify="space-evenly">
                      <Text textColor="#4318FF" pb="10px">
                        FROM
                      </Text>
                      <Text isTruncated>0xa0c68...</Text>
                      <Text textColor="white" isTruncated>
                        0x30f05...
                      </Text>
                      <Text textColor="white" isTruncated>
                        0xdac17...
                      </Text>
                    </VStack>
                    <VStack className="to" h="220px" justify="space-evenly">
                      <Text textColor="#4318FF" pb="10px">
                        TO
                      </Text>
                      <Text isTruncated>0x6f071...</Text>
                      <Text textColor="white" isTruncated>
                        0xc9770...
                      </Text>
                      <Text textColor="white">0x158d5...</Text>
                    </VStack>
                    <VStack className="amount" h="220px" justify="space-evenly">
                      <Text textColor="#4318FF" pb="10px">
                        금액
                      </Text>
                      <Text>+ 12.34</Text>
                      <Text textColor="white">-56.78</Text>
                      <Text textColor="white">+ 12.34</Text>
                    </VStack>
                    <VStack className="hash" h="220px" justify="space-evenly">
                      <Text textColor="#4318FF" pb="10px">
                        HASH
                      </Text>
                      <Text>ebcaef...</Text>
                      <Text textColor="white">ebcaef...</Text>
                      <Text textColor="white">ebcaef...</Text>
                    </VStack>
                  </HStack>
                </TabPanel>
                <TabPanel>
                  <HStack justify="space-evenly">
                    <VStack
                      className="platform"
                      h="220px"
                      justify="space-evenly"
                    >
                      <Text textColor="#4318FF" pb="10px">
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
                      <Text textColor="#4318FF" pb="10px">
                        시간
                      </Text>
                      <Text textColor="#A3AED0">2021-09-26 14:13:40</Text>
                      <Text textColor="#A3AED0">2021-09-26 14:13:40</Text>
                      <Text textColor="#A3AED0">2021-09-26 14:13:40</Text>
                    </VStack>
                    <VStack className="from" h="220px" justify="space-evenly">
                      <Text textColor="#4318FF" pb="10px">
                        FROM
                      </Text>
                      <Text isTruncated>0xa0c68...</Text>
                      <Text isTruncated>0x30f05...</Text>
                      <Text isTruncated>0xdac17...</Text>
                    </VStack>
                    <VStack className="to" h="220px" justify="space-evenly">
                      <Text textColor="#4318FF" pb="10px">
                        TO
                      </Text>
                      <Text isTruncated>0x6f071...</Text>
                      <Text isTruncated>0xc9770...</Text>
                      <Text>0x158d5...</Text>
                    </VStack>
                    <VStack className="amount" h="220px" justify="space-evenly">
                      <Text textColor="#4318FF" pb="10px">
                        금액
                      </Text>
                      <Text>+ 12.34</Text>
                      <Text>-56.78</Text>
                      <Text>+ 12.34</Text>
                    </VStack>
                    <VStack className="hash" h="220px" justify="space-evenly">
                      <Text textColor="#4318FF" pb="10px">
                        HASH
                      </Text>
                      <Text>ebcaef...</Text>
                      <Text>ebcaef...</Text>
                      <Text>ebcaef...</Text>
                    </VStack>
                  </HStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
}

export default MyTranxPg;
