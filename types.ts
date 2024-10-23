import { LucideProps } from "lucide-react";
import { StaticImageData } from "next/image";

export type NavLink = {
  label: string;
  href: string;
  Icon: React.FC<LucideProps>;
};

export type Track = {
  art?: string | StaticImageData;
  title: string;
  artist: string;
};

export type Album = {
  art: {
    url: string
    height: number
    width: number
  }
  name: string;
  artist: string;
  numberOfTacks: number
  url: string
}

