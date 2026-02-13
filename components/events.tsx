"use client";
import React from "react";
import { Spinner } from "@heroui/react";

import { NeonButton } from "@/components/neon-button";
import { useApiGetEvents } from "@/helpers/eventApi";
import { useDictionary } from "@/i18n/DictionaryContext";

export const Events: React.FC = () => {
  const { data: events = [], isLoading } = useApiGetEvents({
    is_live: true,
    is_public: true,
  });
  const { dictionary, locale } = useDictionary();

  const dateLocale = locale === "de" ? "de-CH" : "en-GB";

  const cards = events.map((event) => {
    const eventDate = new Date(Date.parse(event.date_from));
    const isPast = eventDate < new Date();

    return (
      <div
        key={event.slug}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-b border-white/[0.04]"
      >
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground/90 truncate">
            {event.name[locale] || event.name.en}
          </h3>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-xs font-mono text-foreground/30 uppercase tracking-wider">
              {event.location[locale] || event.location.en}
            </span>
            <span className="text-foreground/10">/</span>
            <span className="text-xs font-mono text-foreground/30">
              {eventDate.toLocaleDateString(dateLocale, {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
        <NeonButton
          as="a"
          className="min-w-[100px] rounded-none"
          color={event.testmode || isPast ? "default" : "success"}
          href={event.public_url}
          isDisabled={event.testmode || isPast}
          radius="none"
          rel="noopener noreferrer"
          size="sm"
          target="_blank"
        >
          {event.testmode && dictionary.events.soon}
          {!event.testmode && !isPast && dictionary.events.join}
          {isPast && dictionary.events.past}
        </NeonButton>
      </div>
    );
  });

  return (
    <>
      <h2 className="text-xs font-mono uppercase tracking-widest text-foreground/25 mb-8">
        {dictionary.events.upcoming}
      </h2>
      {isLoading ? (
        <div className="flex justify-center py-12">
          <Spinner color="success" size="sm" />
        </div>
      ) : events.length > 0 ? (
        <div>{cards}</div>
      ) : (
        <p className="text-foreground/25 font-mono text-sm">
          {dictionary.events.empty}
        </p>
      )}
    </>
  );
};
