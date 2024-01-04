import React, { ReactNode } from 'react';

export type DropdownProps = {
  children: ReactNode;
  title: string;
  className?: string;
  icon?: React.JSX.Element;
};
