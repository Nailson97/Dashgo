import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Nailson Soares</Text>
            <Text color="gray.300" fontSize="small">
              nailsonsoares45@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Nailson Soares"
            src="https://github.com/Nailson97.png"
          />
        </Flex>
    )
}