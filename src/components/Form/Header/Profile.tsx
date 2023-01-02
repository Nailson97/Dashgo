import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Nailson Soares</Text>
          <Text color="gray.300" fontSize="small">
            nailsonsoares45@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Nailson Soares"
        src="https://github.com/Nailson97.png"
      />
    </Flex>
  );
}
