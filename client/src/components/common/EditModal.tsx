import { EditIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Box,
  Center,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Modal,
} from "@chakra-ui/react";
import React from "react";
import { Maybe, User, Vendor } from "../../generated/graphql";

interface InjectedProps {
  onClose: () => void;
  operation: "CREATE" | "UPDATE";
  vendor?: { __typename?: "Vendor" } & Pick<Vendor, "name" | "id"> & {
      createdBy: { __typename?: "User" } & Pick<User, "username">;
      modifiedBy?: Maybe<{ __typename?: "User" } & Pick<User, "username">>;
    };
}

interface ModalProps {
  operation: "CREATE" | "UPDATE";
  title: string;
  vendor?: { __typename?: "Vendor" } & Pick<Vendor, "name" | "id"> & {
      createdBy: { __typename?: "User" } & Pick<User, "username">;
      modifiedBy?: Maybe<{ __typename?: "User" } & Pick<User, "username">>;
    };
  children(props: InjectedProps): React.ReactNode;
}

export const EditModal: React.FC<ModalProps> = ({
  children,
  operation,
  title,
  vendor,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {operation === "CREATE" ? (
        <Button onClick={onOpen}>ADD NEW</Button>
      ) : (
        <Button p={0}>
          <EditIcon color="orange.400" h={8} w={8} onClick={onOpen} />
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children({ onClose, operation, vendor })}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
