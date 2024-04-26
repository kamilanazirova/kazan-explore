import React, { useMemo } from "react";

import { externalIcon } from '../../assets/icons/icon-link'
import { StyledLink } from './link.styled'

interface LinkProps {
  href: string;
  children: React.ReactNode;
  contrast?: boolean;
  inheritColor?: boolean;
}

export const Link = (props: LinkProps) => {
  const isExternal = useMemo(() => props.href?.startsWith('http'), [props.href]);

  const linkProps: any = {}

  if (isExternal) {
    linkProps.target = '_blank'
    linkProps.rel = 'noopener noreferrer'
  }

  return (
    <StyledLink inheritColor={props.inheritColor} contrast={props.contrast} href={props.href} {...linkProps}>
      {props.children}
      {isExternal && <img src={externalIcon} alt="external link icon" />}
    </StyledLink>
  );
};

Link.defaultProps = {
  contrast: false,
  inheritColor: false,
}