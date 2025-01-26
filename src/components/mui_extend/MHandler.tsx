import { Box, CircularProgress, TableCell } from "@mui/material";
import React, { ReactNode } from "react";
//
interface Props {
  children: ReactNode;
  isLoading?: boolean;
  NoData?: boolean;
}
//========================================================//
export function MHandler({ children, isLoading, NoData }: Props) {
  return (
    <Box>
      {/* <Box sx={{ display: "flex" }}> */}
      {/* <TableCell width={"100%"}> */}
      <CircularProgress />
      {/* </TableCell> */}
    </Box>
    // </Box>
  );
}
