import { ReactNode, useState } from 'react';

interface SidebarLinkGroupProps {
  children: (handleClick: () => void, open: boolean) => ReactNode;
}

const SidebarLinkGroup = ({
  children,
}: SidebarLinkGroupProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (<li>{children(handleClick, open)}</li>)
};

export default SidebarLinkGroup;
