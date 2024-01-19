import React, { useRef } from "react";
import Layout from "../components/Layout";
import {
  Button,
  Checkbox,
  Input,
  Spinner,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  SkeletonCircle,
  SkeletonText,
  Skeleton,
  useColorMode,
} from "@chakra-ui/react";

export default function Chakra() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout>
      <div className="w-full flex justify-center py-16">
        <div className="w-[1200px] flex flex-col space-y-4">
          <h1>test</h1>
          <Button colorScheme="teal" size="xs">
            teal 버튼
          </Button>
          <Button colorScheme="red" size="md">
            red 버튼
          </Button>
          <Checkbox colorScheme="green">green 체크박스</Checkbox>
          <Spinner color="red.500" size="xl" />
          <Box>
            <Skeleton height="60px" width="500px"></Skeleton>
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>

          <div>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
              Open
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                  <Input placeholder="Type here..." />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={1} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "다크모드 버튼" : "라이트모드 버튼"}
          </Button>
        </div>
      </div>
    </Layout>
  );
}
