import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
  return (
    <InputGroup>
    <InputLeftElement opacity={0.5} children={<BsSearch/>}/>
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant="filled"
      ></Input>
    </InputGroup>
  );
};
