import React from 'react';
import {
  Link as MLink,
  LinkProps,
  Typography,
  TypographyProps,
} from '@mui/material';
import NextLink from 'next/link';

//=====================================================//
export function Link({
  underline = 'none',
  href,
  children,
  ...props
}: LinkProps & TypographyProps) {
  return (
    // <MLink
    //   sx={{ flexWrap: 'nowrap' }}
    //   component={NextLink}
    //   underline={underline}
    //   {...props}
    // />
    <NextLink href={href ?? '/'}>
      <Typography color={'blueviolet'} {...props} noWrap>
        {children}
      </Typography>
    </NextLink>
  );
}
