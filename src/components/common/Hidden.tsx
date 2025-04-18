import { useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | null;
  width:
    | "xsDown"
    | "smDown"
    | "mdDown"
    | "lgDown"
    | "xlDown"
    | "xsUp"
    | "smUp"
    | "mdUp"
    | "lgUp"
    | "xlUp";
}

export function Hidden(props: Props) {
  const { width, children } = props;
  const breakpoint: any = width.substring(0, 2);

  const theme = useTheme();
  const hiddenUp = useMediaQuery(theme.breakpoints.up(breakpoint));
  const hiddenDown = useMediaQuery(theme.breakpoints.down(breakpoint));

  if (width.includes("Down")) {
    return hiddenDown ? null : children;
  }

  if (width.includes("Up")) {
    return hiddenUp ? null : <>{children}</>;
  }

  return null;
}
