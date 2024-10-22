import { LucideProps } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  Icon: React.FC<LucideProps>;
};
