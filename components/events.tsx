"use client";
import React from "react";
import { useApiGetEvents } from "@/helpers/eventApi";
import {
  Card,
  CardHeader,
  CardFooter,
  Button,
  Link,
  Spinner,
} from "@nextui-org/react";
import { title } from "./primitives";

export const Events: React.FC = (props) => {
  const {
    data: events = [],
    isLoading,
    error,
    isError,
    isLoadingError,
    refetch,
  } = useApiGetEvents({ is_live: true, is_public: true });

  const cards = events.map((event) => {
    const eventDate = new Date(Date.parse(event.date_from));
    const isPast = eventDate < new Date();
    return (
      <Card
        key={event.slug}
        className="py-4 sm:flex-row"
        fullWidth={false}
        isBlurred
      >
        <CardHeader className="pb-0 pt-2 px-4 sm:w-auto flex-col items-start">
          <h4 className="font-bold text-large">{event.name.en}</h4>
          <p className="text-tiny uppercase font-bold">{event.location.en}</p>
          <small className="text-default-500">
            {eventDate.toLocaleString("en-Ch")}
          </small>
        </CardHeader>
        <CardFooter className="overflow-visible py-2 items-center justify-end">
          <Button
            className="w-full sm:w-auto"
            color={event.testmode || isPast ? "warning" : "success"}
            size="sm"
            radius="full"
            variant={event.testmode || isPast ? "faded" : "solid"}
            as={Link}
            isDisabled={event.testmode || isPast}
            href={event.public_url}
            isExternal={true}
          >
            {event.testmode && "Available Soon"}
            {!event.testmode && !isPast && "Join Us!"}
            {isPast && "Event Passed"}
          </Button>
        </CardFooter>
      </Card>
    );
  });

  return (
    <>
      <h2 className={title({ size: "md" })}>Our Events</h2>
      {isLoading ? <Spinner /> : cards}
    </>
  );
};
