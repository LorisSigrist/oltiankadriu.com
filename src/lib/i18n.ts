// src/lib/i18n.ts
import { createI18n } from "@inlang/paraglide-js-adapter-next";
import type { AvailableLanguageTag } from "@/paraglide/runtime.js"; //generated file
import * as m from "@/paraglide/messages.js";

// All available functions exported. Just use the ones you need
export const {
  middleware,
  Link,
  useRouter,
  usePathname,
  redirect,
  permanentRedirect,
  localizePath,
} = createI18n<AvailableLanguageTag>({
  defaultLanguage: "en",
  //   pathnames: {
  //     // Fix: Changed 'pathname' to 'pathnames'
  //     "/work": m.work_pathname, //pass as reference
  //   },
  exclude: [/^\/api(\/.*)?$/],
});
