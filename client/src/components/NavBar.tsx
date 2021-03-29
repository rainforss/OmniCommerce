import { Badge, Box, Center, Flex, Link } from "@chakra-ui/layout";
import React from "react";
import { useLogoutMutation, useMeQuery, User } from "../generated/graphql";
import NextLink from "next/link";
import { Button } from "@chakra-ui/button";
import { isServer } from "../utils/isServer";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }, getUser] = useMeQuery({ pause: isServer() });
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  return (
    <Flex bg="royalblue" justify="space-around" p={4}>
      <Box d={"flex"} alignItems="center">
        <NextLink href="/">
          <Link mx={2} fontSize="36px">
            OMNICOMMERCE
          </Link>
        </NextLink>

        <NextLink href="/register">
          <Link mx={2}>REGISTER</Link>
        </NextLink>
      </Box>
      {data?.me ? (
        <Center>
          <Button
            onClick={() => {
              logout();
              getUser();
            }}
            isLoading={logoutFetching}
            textDecor="none"
          >
            LOGOUT
          </Button>
          <Badge variant="outline" colorScheme="whiteAlpha">
            Welcome back, {data.me.username}
          </Badge>
        </Center>
      ) : (
        <Center>
          <NextLink href="/login">
            <Link textDecor="none">LOGIN</Link>
          </NextLink>
        </Center>
      )}
    </Flex>
  );
};

export default NavBar;
