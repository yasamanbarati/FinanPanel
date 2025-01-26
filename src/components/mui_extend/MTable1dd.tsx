import {
  Box,
  Card,
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  isLoading?: boolean;
  noData?: boolean;
  tHead?: ReactNode;
  tBody?: ReactNode;
  tFooter?: ReactNode;
}

//==========================================================================//
export function MTable({ isLoading, tBody, tHead, tFooter, noData }: Props) {
  return (
    <Card>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>{tHead}</TableHead>
          <TableBody>{tBody}</TableBody>
        </Table>
        <Box sx={{ display: "block", textAlign: "center", p: 2 }}>
          {isLoading && <CircularProgress size={30} />}
          {!isLoading && noData && (
            <img src="/static/images/noData.svg" alt="NoData" />
          )}
        </Box>
      </TableContainer>
      <Stack direction={"row"} justifyContent={"center"} py={2}>
        {tFooter}
      </Stack>
    </Card>
  );
}
