import React, { Component } from "react";
import {
  Container,
  Flex,
  HStack,
  VStack,
  Text,
  Input,
  Wrap,
  Icon,
  WrapItem,
  Box,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";
import Navi from "../components/nav";
import { FaRegUserCircle } from "react-icons/fa";
import { ViewIcon, AddIcon } from "@chakra-ui/icons";

function Home() {
  return (
    <Box bg="#E5E5E5">
      <HStack>
        <Navi />
        <Wrap>
          <WrapItem>
            <HStack w="1200px" h="100vh">
              <VStack w="800px" h="100vh" pt="10px">
                <Box
                  w="725px"
                  h="180px"
                  bg="linear-gradient(180deg, #522CFB 0%, rgba(134, 140, 255, 0) 100%), #868CFF;"
                  borderRadius={20}
                >
                  <Box pt="15px" pl="30px">
                    <Text textColor="white" fontSize="xs">
                      Total Point
                    </Text>
                    <Heading size="xl" textColor="white">
                      총 보유 포인트
                    </Heading>
                  </Box>
                </Box>
                <Flex pl="37px">
                  <Wrap justify="start">
                    <Box w="359px" h="250px" borderRadius={20} bg="white">
                      <Box pt="15px" pl="30px" pr="20px">
                        <HStack justify="space-between">
                          <Text textColor="#A3AED0" fontSize="xs">
                            포인트 사용 및 획득
                          </Text>
                          <Button
                            size="xs"
                            leftIcon={<AddIcon />}
                            variant="ghost"
                          >
                            More
                          </Button>
                        </HStack>
                        <Heading size="lg">포인트 현황</Heading>
                      </Box>
                      <VStack justify="space-evenly">
                        <HStack w="80%" justify="space-between">
                          <Box>1</Box>
                          <Text fontSize="lg">1221</Text>
                        </HStack>
                        <HStack w="80%" justify="space-between">
                          <Box>2</Box>
                          <Text fontSize="lg">5623</Text>
                        </HStack>
                        <HStack w="80%" justify="space-between">
                          <Box>3</Box>
                          <Text fontSize="lg">1091</Text>
                        </HStack>
                      </VStack>
                    </Box>
                    <Box w="359px" h="250px" borderRadius={20} bg="white">
                      <Box pt="15px" pl="30px">
                        <Text textColor="#A3AED0" fontSize="xs">
                          이번주 거래 요약
                        </Text>
                        <Heading size="lg">거래요약</Heading>
                      </Box>
                    </Box>
                    <Box w="359px" h="250px" borderRadius={20} bg="white">
                      <Box pt="15px" pl="30px">
                        <Text textColor="#A3AED0" fontSize="xs">
                          보유 포인트 비율
                        </Text>
                        <Heading size="lg">Point</Heading>
                      </Box>
                    </Box>
                    <Box w="359px" h="250px"></Box>
                  </Wrap>
                </Flex>
              </VStack>
              <VStack w="350px" h="100vh" bg="white">
                <VStack
                  id="accountInfo"
                  h="50%"
                  justify="space-evenly"
                  borderBottom="1px"
                >
                  <Icon
                    as={FaRegUserCircle}
                    w="160px"
                    h="160px"
                    color="#E9EDF7"
                    bgColor="#C4C4C4"
                    borderRadius="50px"
                  ></Icon>
                  <Text class="id" fontSize="xs">
                    id : 0xF503f0595C4AFe27cA79B4d1d72304
                  </Text>
                  <Link href="https://etherscan.io/" isExternal>
                    <HStack
                      w="230px"
                      h="40px"
                      border="2px"
                      borderRadius="7px"
                      borderColor="#4318FF"
                      justify="center"
                      align="center"
                    >
                      <Icon as={ViewIcon} color="#4318FF" />
                      <Text textColor="#4318FF" pl="10px">
                        View etherscan
                      </Text>
                    </HStack>
                  </Link>
                </VStack>
                <VStack id="tranx" w="full" align="start" border="1px">
                  <Text p="10px" border="1px" fontSize="2xl">
                    거래내역
                  </Text>
                  <Box></Box>
                </VStack>
              </VStack>
            </HStack>
          </WrapItem>
        </Wrap>
      </HStack>
    </Box>
  );
}

export default Home;
