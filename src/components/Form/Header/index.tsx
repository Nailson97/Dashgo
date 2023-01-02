import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { Search } from "./Search";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1280}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Logo />
      {isWideVersion && (
        <Search />
      )}

      <Flex align="center" ml="auto">
        <NotificationNav />
      </Flex>
      
      <Profile showProfileData={isWideVersion} />
    </Flex>
  );
}
