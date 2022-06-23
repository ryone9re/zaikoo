import { Link as MuiLink } from '@mui/material';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';

type Props = {
  href: NextLinkProps['href'];
  target?: string;
  children?: React.ReactNode;
};

export const Link = (props: Props) => (
  <NextLink href={props.href} passHref={true}>
    <MuiLink
      target={props.target || '_self'}
      rel='noopener noreferrer'
      color='inherit'
      underline='hover'
    >
      {props.children}
    </MuiLink>
  </NextLink>
);
