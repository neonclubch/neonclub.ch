"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { defaultLocale } from "@/i18n/config";

/**
 * Root redirect to the default locale.
 * With static export, server-side redirect() is not available,
 * so we use a client-side redirect.
 *
 * When output: "export" is removed, replace with:
 *   import { redirect } from "next/navigation";
 *   export default function RootPage() { redirect(`/${defaultLocale}`); }
 * and add middleware.ts for browser locale detection.
 */
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${defaultLocale}`);
  }, [router]);

  return null;
}
