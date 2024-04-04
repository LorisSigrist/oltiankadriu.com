import { LucideIcon } from "lucide-react";
import { Link, usePathname } from "@/lib/i18n";
import { cn, isExternalLink } from "@/lib/utils";

interface NavigationLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
  size?: number;
}

export function NavigationLink({
  href,
  label,
  icon: Icon,
  size,
}: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isExternal = isExternalLink(href);

  return (
    <Link
      key={href}
      href={href}
      suppressHydrationWarning
      className={cn(
        "group flex items-center justify-between rounded-lg p-2 text-gray-1200",
        isActive ? "bg-accent" : "hover:bg-accent"
      )}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="flex items-center gap-2">
        <Icon size={size} />
        <span className="font-medium">{label}</span>
      </span>
    </Link>
  );
}
