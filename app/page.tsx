import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Section } from "@/components/section";
import { Events } from "@/components/events"

export default function Home() {
  return (
    <>
      <Section sectionClassName="min-h-[50vh]" className="items-center justify-center" backgroundImage="/djbooth.jpg">
        <div className="inline-block text-center justify-center">
          <h1 className={title({ size: "lg" })}>celebrating</h1>
          <br />
          <h1 className={title({ color: "violet", size: "xl" })}>electronic&nbsp;</h1>
          <h1 className={title({ color: "pink", size: "xl" })}>music</h1>
          <h2 className={subtitle({ class: "mt-6" })}>
            Neue Elektronische Organisation für Nachtkultur
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "success",
              radius: "full",
              variant: "shadow",
            })}
            href="/membership"
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
