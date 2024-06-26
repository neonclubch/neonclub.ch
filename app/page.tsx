import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Section } from "@/components/section";

export default function Home() {
  return (
    <>
    <Section sectionClassName="bg-[url('/banner.jpg')] bg-cover min-h-[50vh]">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Join the&nbsp;</h1>
        <h1 className={title({ color: "pink", size: "lg" })}>
          beat&nbsp;
        </h1>
        <br />
        <h1 className={title({ color: "violet", size: "lg" })}>
          feel&nbsp;
        </h1>
        <h1 className={title()}>
         the pulse.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Neue Elektronische Organisation für Nachtkultur
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "success",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.instagram}
        >
          Upcoming Events
        </Link>
      </div>
    </Section>
    </>
  );
}
