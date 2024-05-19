/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import MoodLevel from "views/admin/default/components/MoodLevel";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function Dashboard() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex justify="center" mb="40px">
        {/* MoodLevel component */}
        <Box w="100%">
          <MoodLevel />
        </Box>
      </Flex>

      {/* EmotionStatistics component */}
      <Flex justify="center" mb="40px">
        <Box w="100%">
          <WeeklyRevenue />
        </Box>
      </Flex>

            {/* EmotionStatistics component */}
            <Flex justify="center" mb="40px">
        <Box w="100%">
          <DailyTraffic />
        </Box>
      </Flex>

      {/* CheckTable and DailyTraffic components */}
      <Flex justify="center" mb="50px">
        <Box w="100%">
          <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        </Box>

      </Flex>

    </Box>
  );
}
