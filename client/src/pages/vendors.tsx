import { EditIcon } from "@chakra-ui/icons";
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
  CloseButton,
  Box,
  Center,
  Flex,
} from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import React from "react";
import { EditModal } from "../components/common/EditModal";
import NavBar from "../components/NavBar";
import { VendorForm } from "../components/vendorPage/VendorForm";
import Wrapper from "../components/Wrapper";
import {
  useVendorsQuery,
  useDeleteVendorMutation,
  Vendor,
} from "../generated/graphql";
import { createUrqlClient } from "../utils/urqlClient";

const Vendors = () => {
  const [{ data }] = useVendorsQuery();
  const [{ fetching }, deleteVendor] = useDeleteVendorMutation();
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
              <Table variant="striped">
                <Thead>
                  <Tr>
                    <Th textAlign="center">Vendor Name</Th>
                    <Th textAlign="center">Created By</Th>
                    <Th textAlign="center">Last Modified By</Th>
                    <Th textAlign="center">Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.vendors.map((v) =>
                    !v ? null : (
                      <Tr key={v.id}>
                        <Td textAlign="center">{v.name}</Td>
                        <Td textAlign="center">{v.createdBy.username}</Td>
                        <Td textAlign="center">{v.modifiedBy?.username}</Td>
                        <Td>
                          <Flex justify="space-around" align="center">
                            <CloseButton
                              bg="red.400"
                              color="white"
                              name={v.id}
                              onClick={async () => {
                                await deleteVendor({ id: v.id });
                              }}
                            />
                            <EditModal
                              operation="UPDATE"
                              title="Update Vendor"
                              vendor={v}
                            >
                              {(InjectedProps) => (
                                <VendorForm
                                  operation={InjectedProps.operation}
                                  onClose={InjectedProps.onClose}
                                  vendor={InjectedProps.vendor}
                                />
                              )}
                            </EditModal>
                          </Flex>
                        </Td>
                      </Tr>
                    )
                  )}
                </Tbody>
              </Table>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Box my={8}>
          <Center>
            <EditModal operation="CREATE" title="New Vendor">
              {(InjectedProps) => (
                <VendorForm
                  operation={InjectedProps.operation}
                  onClose={InjectedProps.onClose}
                />
              )}
            </EditModal>
          </Center>
        </Box>
      </Wrapper>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Vendors);
