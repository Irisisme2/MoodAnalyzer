// Chakra imports
import { Box, Flex, Select, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import BarChart from "components/charts/BarChart";
import React from "react";
import { MdBarChart } from "react-icons/md";

// Dummy data for user activity statistics (replace with real data)
const userActivityData = [
  {
    name: "Posts",
    data: [10, 15, 8, 12, 9, 7, 14],
  },
  {
    name: "Likes",
    data: [50, 60, 45, 70, 55, 40, 65],
  },
  {
    name: "Comments",
    data: [5, 10, 7, 12, 8, 4, 10],
  },
];

const userActivityOptions = {
  chart: {
    type: "bar",
    height: 350,
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
    text: "User Activity",
    align: "left",
  },
  xaxis: {
    categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  yaxis: {
    title: {
      text: "Count",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "Count: " + val;
      },
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    offsetX: 40,
  },
};

export default function UserActivity(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text
          me='auto'
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          lineHeight='100%'>
          User Activity
        </Text>
        <Select
          id='activity_type'
          w='unset'
          variant='transparent'
          display='flex'
          alignItems='center'
          defaultValue='Weekly'>
          <option value='Weekly'>Weekly</option>
          <option value='Daily'>Daily</option>
          <option value='Monthly'>Monthly</option>
        </Select>
      </Flex>

      <Box h='240px' mt='auto'>
        <BarChart
          chartData={userActivityData}
          chartOptions={userActivityOptions}
        />
      </Box>
    </Card>
  );
}
