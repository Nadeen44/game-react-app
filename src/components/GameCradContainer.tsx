import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const GameCradContainer = ({ children }: Props) => {
  return (
    <Box width={"350px"} borderRadius={"10px"} overflow={"hidden"}>
      {children}{" "}
    </Box>
  );
};