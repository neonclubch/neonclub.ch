import { Metadata } from "next";

import { Providers } from "../providers";

import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { DictionaryProvider } from "@/i18n/DictionaryContext";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HtmlLang } from "@/components/html-lang";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.locale);

  return {
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: dictionary.meta.description,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dictionary = await getDictionary(locale);

  return (
    <Providers>
      <HtmlLang locale={locale} />
      <DictionaryProvider dictionary={dictionary} locale={locale}>
        <div className="relative flex flex-col min-h-screen">
          <Navbar />
          <main className="w-full mx-auto flex-grow">{children}</main>
          <Footer dictionary={dictionary} locale={locale} />
        </div>
      </DictionaryProvider>
    </Providers>
  );
}
