import { Box, BoxProps } from "@mui/material";
import React from "react";

export function MBox({ children, ...props }: ChildComponentProps & BoxProps) {
  return (
    <Box bgcolor={"primary.100"} p={2} borderRadius={"16px"} {...props}>
      {children}
    </Box>
  );
}
