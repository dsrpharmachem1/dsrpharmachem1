"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
export function useLocation() {
  return { pathname: usePathname() };
}
export function Link({ to, href, children, ...props }) {
  return (
    <NextLink href={href || to} {...props}>
      {children}
    </NextLink>
  );
}
export function NavLink({ to, className, end, children, ...props }) {
  const pathname = usePathname();
  const isActive = end
    ? pathname === to
    : to === "/"
      ? pathname === "/"
      : pathname.startsWith(to);
  return (
    <NextLink
      href={to}
      aria-current={isActive ? "page" : undefined}
      className={
        typeof className === "function" ? className({ isActive }) : className
      }
      {...props}
    >
      {children}
    </NextLink>
  );
}
