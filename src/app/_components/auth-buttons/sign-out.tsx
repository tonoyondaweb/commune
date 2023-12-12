"use client";

import React from "react";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";
export default function SignOutButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Sign out</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Signing out?</ModalHeader>
              <ModalBody>
                <p>Are you sure you want to sign out of commune?</p>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>No</Button>
                <Button color="danger" onClick={() => signOut()}>
                  Sign out
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
