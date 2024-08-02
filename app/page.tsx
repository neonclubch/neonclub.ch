import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Section } from "@/components/section";
import { Events } from "@/components/events"

export default function Home() {
  return (
    <>
      <Section sectionClassName="min-h-[50vh]" className="items-center justify-center" backgroundImage="/banner.jpg">
        <div className="inline-block text-center justify-center">
          <h1 className={title({ size: "lg" })}>Love for&nbsp;</h1>
          <h1 className={title({ color: "pink", size: "xl" })}>beats</h1>
          <h1 className={title({ size: "lg" })}>,</h1>
          <br />
          <h1 className={title({ color: "violet", size: "xl" })}>artists&nbsp;</h1>
          <h1 className={title({ size: "lg" })}>in the spotlight.</h1>
          <h2 className={subtitle({ class: "mt-6" })}>
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
            href={siteConfig.links.membership}
          >
            Become a Member
          </Link>
        </div>
      </Section>
      <Section>
        <Events />
      </Section>
    </>
  );
}
