import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifesto",
};

const observe = [
  {
    title: "The Death of the Vacuum",
    text: 'We observe the rapid erasure of "urban vacuums"\u2014those marginal, industrial ruins that once provided the low-cost freedom necessary for radical artistic experimentation.',
  },
  {
    title: "The Colonization of Culture",
    text: 'We see our culture being weaponized as "location branding" for city marketing, where the image of a vibrant nightlife is sold while the reality of its practitioners is pushed to the periphery.',
  },
  {
    title: "The Regulatory Stranglehold",
    text: 'We observe an environment where the "Agent of Change" principle is ignored, allowing luxury residential interests to prioritize silence over the cultural heartbeat of the city.',
  },
  {
    title: "The Rise of Sterile Homogeneity",
    text: "We see a narrowing of the cultural spectrum, where economic pressure forces venues to favor safe, commercial hits over the risky, the avant-garde, and the subcultural.",
  },
  {
    title: "The Trap of Festivalization",
    text: 'We observe the replacement of consistent, place-based community life with temporary, high-priced "spectacles" that prioritize one-off profit over long-term social cohesion.',
  },
];

const acknowledge = [
  {
    title: "The Radical Melting Pot",
    text: "We acknowledge that the dancefloor is one of the last remaining sites of true social mixing\u2014where the CEO and the student, the stranger and the friend, share a single frequency across all socioeconomic divides.",
  },
  {
    title: "The Sanctuary of Identity",
    text: 'We acknowledge that for marginalized groups and the LGBTQ+ community, these spaces are not "leisure"\u2014they are essential "safe spaces" for identity formation and collective survival.',
  },
  {
    title: "The Power of the Prosumer",
    text: 'We recognize that in our culture, there is no "audience"; we acknowledge that through dance and participation, every individual acts as a "prosumer" who co-creates the cultural energy of the night.',
  },
  {
    title: "The Fragility of Living Heritage",
    text: 'We acknowledge that electronic music culture is an "intangible heritage" that cannot be archived in a museum; it must be practiced in the physical world, or its rhythmic memory will fade.',
  },
  {
    title: "The Void of Spontaneity",
    text: 'We acknowledge that the loss of physical venues means the loss of serendipity\u2014the "social magic" that happens when people of different backgrounds and orientations collide in an unregulated environment.',
  },
];

const strive = [
  {
    title: "To Reclaim the City as a Laboratory",
    text: 'We strive to move beyond the "stationary club" by reclaiming urban space through nomadic sound systems, pop-up interventions, and the tactical use of "interzone" spaces.',
  },
  {
    title: "To Design for Radical Inclusivity",
    text: "We strive to create formats that intentionally mix diverse backgrounds and orientations, ensuring the dancefloor remains a democratic bridge across social divides.",
  },
  {
    title: "To Democratize the Experience",
    text: "We strive to utilize accessible technology and decentralized organizing to lower barriers to entry, ensuring that our culture remains a participatory act rather than a consumed product.",
  },
  {
    title: "To Turn Barriers into Catalysts",
    text: "We strive to co-opt the limitations of the modern city\u2014responding to noise regulations and spatial scarcity with innovative audio formats and invisible, agile gatherings.",
  },
  {
    title: "To Protect Subcultural Autonomy",
    text: 'We strive to ensure that our creative mission remains independent of the "for a profit" trap, building a community-supported infrastructure that values social impact over commercial turnover.',
  },
];

export default function ManifestoPage() {
  return (
    <article className="py-16 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-mono text-foreground/20 uppercase tracking-widest mb-16 md:mb-24">
          A Manifesto for the Night
        </p>

        {/* ── I. WE OBSERVE ──────────────────────── */}
        <ManifestoSection
          number="I"
          verb="WE OBSERVE"
          title="The Erasure of the Urban Soul"
          intro="We observe the systemic thinning of the spaces that once allowed subcultures to breathe, mutate, and thrive."
          points={observe}
        />

        {/* ── II. WE ACKNOWLEDGE ─────────────────── */}
        <ManifestoSection
          number="II"
          verb="WE ACKNOWLEDGE"
          title="The Loss of the Social Alchemy"
          intro="We recognize that when a club disappears, society loses far more than a venue; it loses its most vital laboratory of human connection."
          points={acknowledge}
        />

        {/* ── III. WE STRIVE ────────────────────── */}
        <ManifestoSection
          number="III"
          verb="WE STRIVE"
          title="To Transcend the Four Walls"
          intro="We commit to a future where culture is defined by its spirit, not its real estate. We will experiment, adapt, and reclaim."
          points={strive}
        />

        {/* ── Closing ────────────────────────────── */}
        <footer className="mt-24 md:mt-36 pt-14 border-t border-white/[0.06]">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-foreground/70">
            The walls may be closing in, but the{" "}
            <span className="neon-text font-normal">
              dancefloor is an idea
            </span>
            , not a location.
          </p>
          <p className="mt-8 text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-foreground/70">
            NEON is the{" "}
            <span className="neon-text font-normal">
              light that refuses to go out
            </span>
            .
          </p>
        </footer>
      </div>
    </article>
  );
}

/* ── Section component ──────────────────────────── */

function ManifestoSection({
  number,
  verb,
  title,
  intro,
  points,
}: {
  number: string;
  verb: string;
  title: string;
  intro: string;
  points: { title: string; text: string }[];
}) {
  return (
    <section className="mb-24 md:mb-32">
      <div className="neon-line w-12 mb-8" />
      <span className="block text-xs font-mono text-[#1ADC38]/40 tracking-[0.3em] uppercase mb-3">
        {number}.
      </span>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground/90 mb-1">
        {verb}
      </h2>
      <h3 className="text-base md:text-lg text-foreground/35 font-light mb-8">
        {title}
      </h3>
      <p className="text-base md:text-lg text-foreground/50 leading-relaxed mb-12 max-w-2xl italic">
        {intro}
      </p>

      <div className="space-y-10">
        {points.map((point, i) => (
          <div
            key={i}
            className="pl-6 border-l border-white/[0.06] hover:border-[#1ADC38]/30 transition-colors duration-500"
          >
            <h4 className="text-sm font-mono font-medium text-foreground/70 mb-2 tracking-wide">
              {point.title}
            </h4>
            <p className="text-base text-foreground/40 leading-relaxed">
              {point.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
