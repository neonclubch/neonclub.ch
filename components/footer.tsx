import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";
import { InstagramIcon } from "@/components/icons";

interface FooterProps {
  locale: Locale;
  dictionary: Dictionary;
}

export const Footer: React.FC<FooterProps> = ({ locale, dictionary }) => {
  return (
    <footer>
      <div className="neon-line mx-6" />
      <div className="container flex items-center justify-between flex-col-reverse sm:flex-row py-8 px-6 gap-4">
        <span className="text-[10px] font-mono text-foreground/20 uppercase tracking-widest">
          NEON &copy; {new Date().getFullYear()}
        </span>
        <div className="flex items-center gap-6">
          <Link
            className="text-[10px] font-mono text-foreground/20 uppercase tracking-widest hover:text-[#1ADC38] transition-colors"
            href={`/${locale}/impressum`}
          >
            {dictionary.footer.impressum}
          </Link>
          <Link
            className="text-[10px] font-mono text-foreground/20 uppercase tracking-widest hover:text-[#1ADC38] transition-colors"
            href={`/${locale}/privacy-policy`}
          >
            {dictionary.footer.privacy}
          </Link>
          <Link
            isExternal
            aria-label="Instagram"
            className="text-foreground/20 hover:text-[#1ADC38] transition-colors"
            href={siteConfig.links.instagram}
          >
            <InstagramIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
