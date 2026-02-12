import type { ContactContent } from "../types";
import type { Locale } from "@/i18n/config";

const content: Record<Locale, ContactContent> = {
  en: {
    title: "SIGNAL",
    subtitle: "Open the Channel",
    body: "The conversation does not end on the dancefloor. We are looking for collaborators, not customers. Whether you have an intervention to propose, a space to reclaim, or the physical energy to contribute—reach out.\n\nConnect via [hello@neonclub.ch](mailto:hello@neonclub.ch) or find us in the digital underground. The night is built by those who show up.",
  },
  de: {
    title: "SIGNAL",
    subtitle: "Kanal öffnen",
    body: "Das Gespräch endet nicht auf dem Dancefloor. Wir suchen Mitstreiter:innen, keine Kundschaft. Ob du eine Intervention planst, Räume zurückerobern willst oder die physische Energie hast, anzupacken – melde dich.\n\nSchreib uns unter [hello@neonclub.ch](mailto:hello@neonclub.ch) oder finde uns im digitalen Untergrund. Die Nacht wird von jenen gebaut, die auftauchen.",
  },
};

export default content;
