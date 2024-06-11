import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

export const PlatformSelector = () => {
  const { data, error } = usePlatforms(); // Corrected hook name

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {" "}
        Platform
      </MenuButton>
      <MenuList>
        {data &&
          data.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};
