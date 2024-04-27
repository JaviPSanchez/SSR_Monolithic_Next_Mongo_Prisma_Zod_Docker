"use client";

import UserButton from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-light-700 flex justify-between items-center p-4 rounded-xl w-5/6 drop-shadow-lg">
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathname === "/server" ? "default" : "outline"}
        >
          <Link href="/server">Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/client" ? "default" : "outline"}
        >
          <Link href="/server">Client</Link>
        </Button>
        <Button asChild variant={pathname === "/admin" ? "default" : "outline"}>
          <Link href="/server">Admin</Link>
        </Button>
        <Button asChild variant={pathname === "/home" ? "custom" : "outline"}>
          <Link href="/home">Home</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
