import {
  Sparkles,
  UserRound,
  Layers,
  Github,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Link {
  href: string;
  label: string;
  icon: LucideIcon;
  size: number;
}

interface Profile {
  title: string;
  url: string;
  icon: LucideIcon;
  size: number;
}

interface ProfileList {
  [key: string]: Profile;
}

export const LINKS: Link[] = [
  {
    href: "/",
    label: "Home",
    icon: Sparkles,
    size: 16,
  },
  {
    href: "/about",
    label: "About",
    icon: UserRound,
    size: 16,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: Layers,
    size: 16,
  },
];

export const PROFILES: ProfileList = {
  twitter: {
    title: "X",
    url: "https://x.com/oltiankadriu",
    icon: Twitter,
    size: 16,
  },
  github: {
    title: "GitHub",
    url: "https://github.com/okadriu",
    icon: Github,
    size: 16,
  },
  linkedin: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/oltian-kadriu",
    icon: Linkedin,
    size: 16,
  },
  instagram: {
    title: "Instagram",
    url: "https://www.instagram.com/oltiian",
    icon: Instagram,
    size: 16,
  },
};
