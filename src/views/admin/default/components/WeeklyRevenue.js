import { Box, Flex, Text, Button, Icon, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import BarChart from "components/charts/BarChart";
import React from "react";
import { MdBarChart } from "react-icons/md";

const emotionStatsData = [
  {
    name: "Joy",
    data: [3, 4, 5, 4, 3, 5, 4],
  },
  {
    name: "Sadness",
    data: [2, 2, 3, 2, 2, 1, 2],
  },
  {
    name: "Anger",
    data: [1, 2, 1, 2, 1, 1, 2],
  },
  {
    name: "Surprise",
    data: [2, 1, 2, 1, 2, 3, 2],
  },
];

const emotionStatsOptions = {
  chart: {
    type: "bar",
    height: 400, // Increased height
    stacked: true,
    zoom: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  title: {
    text: "Emotion Statistics",
    align: "left",
  },
  xaxis: {
    categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  yaxis: {
    title: {
      text: "Emotion Level",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "Emotion Level: " + val;
      },
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    offsetX: 40,
  },
};

export default function EmotionStatistics(props) {
  const { ...rest } = props;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue({ bg: "secondaryGray.400" }, { bg: "whiteAlpha.50" });
  const bgFocus = useColorModeValue({ bg: "secondaryGray.300" }, { bg: "whiteAlpha.100" });

  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text me='auto' color={textColor} fontSize='xl' fontWeight='700' lineHeight='100%'>
          Emotion Statistics
        </Text>
        <Button
          align='center'
          justifyContent='center'
          bg={bgButton}
          _hover={bgHover}
          _focus={bgFocus}
          _active={bgFocus}
          w='37px'
          h='37px'
          lineHeight='100%'
          borderRadius='10px'
          {...rest}>
          <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
        </Button>
      </Flex>

      <Box h='400px' mt='auto'> {/* Increased height */}
        <BarChart chartData={emotionStatsData} chartOptions={emotionStatsOptions} />
      </Box>
    </Card>
  );
}
