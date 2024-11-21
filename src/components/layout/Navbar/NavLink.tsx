interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
    >
      {children}
    </a>
  );
};
