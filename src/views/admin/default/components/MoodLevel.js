// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
// Assets
import { RiArrowUpSFill } from "react-icons/ri";

// Dummy data for mood analysis (replace with real data)
const moodChartData = [
  {
    name: "Mood",
    data: [
      { x: "2024-05-15", y: 3 },
      { x: "2024-05-16", y: 5 },
      { x: "2024-05-17", y: 4 },
      { x: "2024-05-18", y: 6 },
      { x: "2024-05-19", y: 5 },
    ],
  },
];

const moodChartOptions = {
  chart: {
    type: "line",
    height: 350,
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Mood Over Time",
    align: "left",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2024-05-15",
      "2024-05-16",
      "2024-05-17",
      "2024-05-18",
      "2024-05-19",
    ],
  },
  yaxis: {
    title: {
      text: "Mood Level",
    },
  },
};

export default function MoodAnalyzer(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );

  return (
    <Card
      justifyContent="center"
      align="center"
      direction="column"
      w="100%"
      mb="0px"
      minH="500px" // Adjusted height
      {...rest}
    >
      <Flex justify="space-between" ps="0px" pe="20px" pt="5px">
        <Flex align="center" w="100%">
          <Button
            bg={boxBg}
            fontSize="sm"
            fontWeight="500"
            color={textColorSecondary}
            borderRadius="7px"
          >
            <Icon
              as={MdOutlineCalendarToday}
              color={textColorSecondary}
              me="4px"
            />
            This month
          </Button>
          <Button
            ms="auto"
            align="center"
            justifyContent="center"
            bg={bgButton}
            _hover={bgHover}
            _focus={bgFocus}
            _active={bgFocus}
            w="37px"
            h="37px"
            lineHeight="100%"
            borderRadius="10px"
            {...rest}
          >
            <Icon as={MdBarChart} color={iconColor} w="24px" h="24px" />
          </Button>
        </Flex>
      </Flex>
      <Flex w="100%" flexDirection={{ base: "column", lg: "row" }}>
        <Flex flexDirection="column" me="20px" mt="28px">
          <Text
            color={textColor}
            fontSize="34px"
            textAlign="start"
            fontWeight="700"
            lineHeight="100%"
          >
            5.0
          </Text>
          <Flex align="center" mb="20px">
            <Text
              color="secondaryGray.600"
              fontSize="sm"
              fontWeight="500"
              mt="4px"
              me="12px"
            >
              Current Mood Level
            </Text>
            <Flex align="center">
              <Icon as={RiArrowUpSFill} color="green.500" me="2px" mt="2px" />
              <Text color="green.500" fontSize="sm" fontWeight="700">
                +2.45%
              </Text>
            </Flex>
          </Flex>

          <Flex align="center">
            <Icon as={IoCheckmarkCircle} color="green.500" me="4px" />
            <Text color="green.500" fontSize="md" fontWeight="700">
              On track
            </Text>
          </Flex>
        </Flex>
        <Box minH="400px" minW="75%" mt="auto"> {/* Adjusted height */}
          <LineChart chartData={moodChartData} chartOptions={moodChartOptions} />
        </Box>
      </Flex>
    </Card>
  );
}
