import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex-center gap-y-4">
      <h1>🔐 Auth</h1>

      {label}
    </div>
  );
};

export default Header;
