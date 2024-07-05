import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { InstagramIcon } from "@/components/icons";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container flex items-center justify-end flex-col-reverse sm:flex-row py-3 px-6">
      <Link className="m-3" aria-label="impressum" href='/impressum'>
        <span className="px-1 text-foreground-600">Impressum</span>
      </Link>
        <Link className="m-3" aria-label="privacy policy" href='/privacy-policy'>
          <span className="px-1 text-foreground-600">Privacy policy</span>
        </Link>
        <Link className="m-3" isExternal aria-label="Twitter" href={siteConfig.links.instagram}>
          <span className="px-1 text-foreground-600">Stay Tuned</span>
          <InstagramIcon className="text-default-500" />
        </Link>
      </div>
    </footer>
  );
};
