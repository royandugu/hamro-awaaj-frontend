import { usePathname } from 'next/navigation';

import Link from 'next/link';

const DropDown = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const pathName = usePathname();

  const isActive = pathName === href;

  return (
    <Link href={href} className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out ${isActive ? 'text-white' : ''}`}>
      {children}
    </Link>
  );
};

export default DropDown;
