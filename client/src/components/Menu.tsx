import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Center, Link } from "@chakra-ui/layout";
import { VStack, StackDivider } from "@chakra-ui/react";
import { SlideFade } from "@chakra-ui/transition";
import NextLink from "next/link";
import React from "react";

export type MenuItems = {
  text: string;
  url: string;
  bgColor: string;
};

interface MenuProps {
  menuItems: MenuItems[];
}

export const Menu: React.FC<MenuProps> = ({ menuItems }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Button
        position="fixed"
        left={8}
        bottom={8}
        bg={isOpen ? "#93cedb" : "#4b4c9f"}
        color="white"
        _hover={{ bg: "#93cedb" }}
        leftIcon={<HamburgerIcon />}
        onClick={onToggle}
      >
        MENU
      </Button>
      <Box position="fixed" left={8} bottom={24} w="300px">
        <SlideFade in={isOpen} offsetX="-120%" unmountOnExit={true}>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
            color="white"
            bg="#93cedb"
            rounded="md"
            shadow="md"
            p={8}
          >
            {menuItems.map((m) => (
              <Box h="40px" bg={m.bgColor} key={m.text}>
                <NextLink href={m.url}>
                  <Link h="100%" w="100%">
                    <Center h="100%">{m.text}</Center>
                  </Link>
                </NextLink>
              </Box>
            ))}
          </VStack>
        </SlideFade>
      </Box>
    </>
  );
};
