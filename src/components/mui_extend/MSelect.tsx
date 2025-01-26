import { Box, Select, SelectProps, styled } from "@mui/material";
import React, { ReactNode } from "react";

const SelectStyled = styled(Select)({
  height: "40px",
  color: "rgba(23, 23, 23, 1)",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-select": {
    fontSize: "14px",
  },
});

const SelectBoxStyled = styled(Box)({
  height: "40px",
  // width: "216px",
  background: " rgba(143, 146, 161, 0.05)",
  padding: " 8px 12px 8px 12px",
  borderRadius: "25px",
  display: "flex",
  alignItems: "center",
  color: " rgba(143, 146, 161, 1)",
  fontSize: "14px",
  marginRight: "12px",
});

interface Props {
  children?: ReactNode;
  onChange: (e: any) => void;
  // onChange: (e: any) => void;
  label?: string;
}

//=======================//
export function MSelect({
  children,
  label,
  onChange,
  ...props
}: Props & SelectProps) {
  return (
    <SelectBoxStyled>
      {label}
      <SelectStyled onChange={(e) => onChange(e.target.value)} {...props}>
        {children}
      </SelectStyled>
    </SelectBoxStyled>
  );
}
