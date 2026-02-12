"use client";

import { useEffect } from "react";

import { useDictionary } from "@/i18n/DictionaryContext";

const messages = {
  de: { title: "Etwas ist schiefgelaufen!", retry: "Erneut versuchen" },
  en: { title: "Something went wrong!", retry: "Try again" },
} as const;

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  let locale: "de" | "en" = "de";

  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ctx = useDictionary();

    locale = ctx.locale;
  } catch {
    // DictionaryProvider may not be available if layout itself errored
  }

  const t = messages[locale];

  useEffect(() => {
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 gap-6">
      <h2 className="text-xl font-semibold text-foreground/70">{t.title}</h2>
      <button
        className="border border-[#1ADC38]/60 px-6 py-2 text-xs font-mono uppercase tracking-widest text-[#1ADC38] hover:bg-[#1ADC38]/10 transition-all duration-300"
        onClick={() => reset()}
      >
        {t.retry}
      </button>
    </section>
  );
}
