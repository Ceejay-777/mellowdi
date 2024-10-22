import { NavLink } from "./types";
import {
  House,
  Search,
  Code,
  Gamepad2,
  LibrarySquare,
} from "lucide-react";

export const navlinks: NavLink[] = [
  { label: "Home", href: "/", Icon: House },
  { label: "Browse", href: "/search", Icon: Search },
  { label: "Library", href: "/library", Icon: LibrarySquare },
  { label: "Guess", href: "/guess", Icon: Gamepad2 },
  { label: "Dev", href: "/dev", Icon: Code },
];
