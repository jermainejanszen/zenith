/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { type ReactNode } from "react";
import NextLink from "next/link";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  type BoxProps,
  type FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Divider,
} from "@chakra-ui/react";
import { type IconType } from "react-icons";
import {
  FiHome,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiMap,
  FiTruck,
  FiTool,
  FiAlertTriangle,
  FiUsers,
  FiInfo,
  FiPhone,
  FiDribbble,
  FiBriefcase,
  FiArchive,
  FiCamera,
} from "react-icons/fi";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}
const PublicLinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, path: "/" },
  { name: "Location Maps", icon: FiMap, path: "maps" },
  { name: "Parking and Road Safety", icon: FiTruck, path: "parking" },
  { name: "Critical Incidents", icon: FiAlertTriangle, path: "incidents" },
  { name: "Information for Tradespeople", icon: FiTool, path: "trades" },
];

const ResidentLinkItems: Array<LinkItemProps> = [
  { name: "Management Statement", icon: FiUsers, path: "statement" },
  {
    name: "Information for Residents",
    icon: FiInfo,
    path: "residents/information",
  },
  {
    name: "Useful Services for Residents",
    icon: FiPhone,
    path: "residents/services",
  },
  { name: "Booking Facilities", icon: FiDribbble, path: "bookings" },
  { name: "Meeting Minutes", icon: FiArchive, path: "meeting_minutes" },
  {
    name: "Executive Committee Members",
    icon: FiBriefcase,
    path: "executive_members",
  },
  { name: "Gallery", icon: FiCamera, path: "gallery" },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="full">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      overflow="scroll"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Zenith Garden
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {PublicLinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} path={link.path}>
          {link.name}
        </NavItem>
      ))}
      <Divider className="my-4" />
      {ResidentLinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} path={link.path}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  path: string;
  children: string;
}

const NavItem = ({ icon, path, children, ...rest }: NavItemProps) => {
  return (
    <Link
      as={NextLink}
      href={path}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Zenith Garden
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                >
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Executive
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }} mx={8}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList borderColor={useColorModeValue("gray.200", "gray.700")}>
              <MenuItem as={NextLink} href="profile">
                Profile
              </MenuItem>
              <MenuItem as={NextLink} href="contact">
                Contact
              </MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
