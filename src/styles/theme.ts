import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
        "900": "#181B23",
        "800": "#1F2029",
        "700": "#353646",
        "600": "#484D63",
        "500": "#616480",
        "400": "#797D9A",
        "300": "#9699B0",
        "200": "#B3B5C3",
        "100": "#01020C",
        "50": "#EEEEF2",
    }
  },
  fonts: {
    heading: 'Roboto',
    body: "Roboto"
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
});
