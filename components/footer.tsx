import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { InstagramIcon } from "@/components/icons";

export const Footer: React.FC = () => {
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
            href="/impressum"
          >
            Impressum
          </Link>
          <Link
            className="text-[10px] font-mono text-foreground/20 uppercase tracking-widest hover:text-[#1ADC38] transition-colors"
            href="/privacy-policy"
          >
            Privacy
          </Link>
          <Link
            isExternal
            aria-label="Instagram"
            href={siteConfig.links.instagram}
            className="text-foreground/20 hover:text-[#1ADC38] transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
