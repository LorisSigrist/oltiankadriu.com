import { LINKS, PROFILES } from "@/lib/constants";
import { isExternalLink } from "@/lib/utils";
import { Link } from "@/lib/i18n";
import React from "react";

function Footer() {
  return (
    <footer className="border-t border-t-zinc-100 dark:border-t-zinc-900">
      <div className="content text-gray-1100">
        <div className="md:flex md:justify-between">
          <span className="mb-6 md:mb-0 font-semibold text-gray-1200">
            Oltian&apos;s personal site
          </span>
          <div className="grid grid-cols-2 gap-8 md:mt-0 mt-5">
            <div>
              <p className="font-semibold mb-3 text-gray-1200">Pages</p>
              <ul className="space-y-2">
                {LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:underline"
                      {...(isExternalLink(link.href)
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-3 text-gray-1200">Connect</p>
              <ul className="space-y-2">
                {Object.values(PROFILES).map((profile) => (
                  <li key={profile.url}>
                    <Link
                      href={profile.url}
                      className="hover:underline"
                      {...(isExternalLink(profile.url)
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {profile.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-zinc-100 sm:mx-auto dark:border-zinc-900 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © 2024 Oltian Kadriu. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
