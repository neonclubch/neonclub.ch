import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { InstagramIcon } from "@/components/icons";

export const Footer = () => {
  return (
    <footer>
      <div className="container flex items-center justify-end py-3 px-6">
      <Link
        isExternal
        aria-label="Twitter"
        href={siteConfig.links.instagram}
      >
        <span className="px-1 text-foreground-600">Stay Tuned</span>
        <InstagramIcon className="text-default-500" />
      </Link>
      </div>
    </footer>
  );
};
