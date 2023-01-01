import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { Search } from "./Search";

export function Header() {
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
      <Search />
      <Flex align="center" ml="auto">
        <NotificationNav />
      </Flex>
      
      <Profile />
    </Flex>
  );
}
