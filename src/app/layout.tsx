import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import { sharedTitle, sharedDescription } from "@/app/shared-metadata";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Footer from "@/components/footer";
import { LanguageProvider } from "@inlang/paraglide-js-adapter-next";
import { languageTag } from "@/paraglide/runtime";

const rethinksans = Rethink_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://oltiankadriu.com"),
  title: {
    template: `%s — ${sharedTitle}`,
    default: sharedTitle,
  },
  description: sharedDescription,
  openGraph: {
    title: {
      template: `%s — ${sharedTitle}`,
      default: sharedTitle,
    },
    description: sharedDescription,
    type: "website",
    url: "/",
    siteName: sharedTitle,
    locale: "en",
  },
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    site: "@oltiankadriu",
    creator: "@oltiankadriu",
  },
  other: {
    pinterest: "nopin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang={languageTag()} suppressHydrationWarning>
        <body className={rethinksans.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="sticky top-0 z-40 border-b bg-background">
              <Navbar />
            </header>
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </LanguageProvider>
  );
}
