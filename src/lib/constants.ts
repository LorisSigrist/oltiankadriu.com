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

interface Experience {
  position: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

interface Education {
  schoolType: string;
  school: string;
  schoolUrl: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

interface Project {
  title: string;
  shortDescription: string;
  slug: string;
  description: string;
  year: string;
  collaborators?: { name: string; link: string }[];
  websiteLink?: string;
  githubRepoLink?: string;
  images: string[];
  isSelected?: boolean;
}

export const LINKS: Link[] = [
  {
    href: "/",
    label: "Home",
    icon: Sparkles,
    size: 16,
  },
  {
    href: "/work",
    label: "Work",
    icon: Layers,
    size: 16,
  },
  {
    href: "/about",
    label: "About",
    icon: UserRound,
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

export const EXPERIENCES: Experience[] = [
  {
    position: "Web Developer",
    company: "Chili Digital AG",
    companyUrl: "https://chili.ch/",
    startDate: "08 / 2023",
    endDate: "",
    description: "Trainee.",
  },
  {
    position: "Job2",
    company: "Testcompany",
    companyUrl: "https://test.ch/",
    startDate: "08 / 2023",
    endDate: "09 / 2023",
    description: "Description.",
  },
];

export const EDUCATIONS: Education[] = [
  {
    schoolType: "Computer science middle school",
    school: "Kanti Baden",
    schoolUrl: "https://www.kanti-baden.ch/",
    startDate: "08 / 2020",
    endDate: "07 / 2023",
    description:
      "Computer scientist application development EFZ + vocational baccalaureate.",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Example Project",
    shortDescription: "This is an example project.",
    slug: "example-project",
    description: "Detailed description of the example project.",
    year: "2022",
    collaborators: [
      { name: "John Doe", link: "https://example.com/john-doe" },
      { name: "Jane Smith", link: "https://example.com/jane-smith" },
    ],
    websiteLink: "https://example.com",
    githubRepoLink: "https://github.com/example/example-project",
    images: [
      "/images/work/testcompany/testproject.png",
      "https://example.com/image2.jpg",
    ],
    isSelected: true,
  },
  {
    title: "Example Project2",
    shortDescription: "This is an example project2.",
    slug: "example-project2",
    description: "Detailed description of the example project2.",
    year: "2024",
    collaborators: [],
    websiteLink: "https://example.com",
    githubRepoLink: "https://github.com/example/example-project",
    images: [
      "/images/work/testcompany/testproject.png",
      "https://example.com/image2.jpg",
    ],
    isSelected: true,
  },
];
