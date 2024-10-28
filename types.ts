import { LucideProps } from "lucide-react";
import { StaticImageData } from "next/image";

export type NavLink = {
  label: string;
  href: string;
  Icon: React.FC<LucideProps>;
};

export type LibrayCard = {
  // icon: React.FC<LucideProps>;
  title: string;
  content: string;
  href: string;
  children: React.ReactNode;
};

export type ShelfTrack = {
  art?: string | StaticImageData;
  title: string;
  artist: string;
};

export type Track = {
  art?: string | StaticImageData;
  title: string;
  artist: string;
  album?: string;
  length: number;
};

export type Album = {
  art: {
    url: string;
    height: number;
    width: number;
  };
  name: string;
  artist: string;
  numberOfTacks: number;
  url: string;
};

export type Playlist = {
  art?: string | StaticImageData;
  title: "string";
};

export type SearchResult = {
  id: number;
  title: string;
  description: string;
};

export type RecentSearchResult = {
  id: number;
  description: string;
};

export type SearchVal = {
  searchActive: boolean;
  setSearchActive: (isActive: boolean) => void;
};
