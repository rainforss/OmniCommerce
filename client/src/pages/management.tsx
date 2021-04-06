import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { withUrqlClient, WithUrqlProps } from "next-urql";
import React from "react";
import NavBar from "../components/NavBar";
import Wrapper from "../components/Wrapper";
import { createUrqlClient } from "../utils/urqlClient";

const Management: NextPage<WithUrqlProps> = ({}) => {
  return (
    <>
      <NavBar />
      <Wrapper variant="regular">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>Vendors</Tab>
            <Tab>Shapes</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Table variant="simple">
                <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Vendor Name</Th>
                    <Th>Created By</Th>
                    <Th isNumeric>Last Modified</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Wrapper>
    </>
  );
};

export default withUrqlClient(createUrqlClient)(Management);

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   return {};
// };
