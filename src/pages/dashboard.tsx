import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import { Header } from "../components/Form/Header";
import { Sidebar } from "../components/Form/Sidebar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-12-28T18:37:00.000Z",
      "2022-12-29T18:37:00.000Z",
      "2022-12-30T18:37:00.000Z",
      "2022-12-31T18:37:00.000Z",
      "2023-01-01T18:37:00.000Z",
      "2023-01-02T18:37:00.000Z",
      "2023-01-03T18:37:00.000Z",
    ],
  },
  fill: {
   opacity: 0.3,
   type: 'gradient',
   gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
   }
  }
};

const series = [
  {
    name: "series1",
    data: [12, 30, 12, 90, 20, 80, 10],
  },
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1280} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} width={400} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart options={options} series={series} type="area" height={160} width={400}/>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
