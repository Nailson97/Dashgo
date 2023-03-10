import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { Search } from "./Search";

export function Header() {
  const {onOpen} = useSidebarDrawer()

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
      {!isWideVersion && (
        <IconButton icon={<Icon as={RiMenuLine}/>} fontSize="24" variant="unstyled" onClick={onOpen} aria-label="Open navigation" mr="2">

        </IconButton>  
      )}

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
