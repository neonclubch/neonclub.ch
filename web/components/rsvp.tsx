"use client";
import React from "react";
import { Spinner } from "@heroui/spinner";
import { Button } from "@heroui/button";
import { useSearchParams } from "next/navigation";

import { useApiGetRsvp } from "@/helpers/rsvpApi";

export const Rsvp: React.FC<RsvpProps> = ({
  formLink,
  className,
  buttonText,
  buttonColor,
  buttonVariant,
}) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") ?? "";
  const { data, isLoading, isError } = useApiGetRsvp(id);

  if (!id) return null;
  if (isLoading) return <Spinner />;
  if (isError || !data) return <span>Invite not found!</span>;

  return (
    <div className={className}>
      <Button
        as="a"
        href={`${formLink}?id=${data.id}&firstName=${data.firstName}&lastName=${data.lastName || ""}`}
        target="_blank"
        rel="noopener noreferrer"
        color={buttonColor || "success"}
        radius="full"
        variant={buttonVariant || "solid"}
      >
        {buttonText || "RSVP"}
      </Button>
    </div>
  );
};

type RsvpProps = {
  formLink: string;
  buttonText?: string;
  buttonColor?: "success" | "primary" | "secondary" | "warning" | "danger";
  buttonVariant?:
    | "solid"
    | "shadow"
    | "ghost"
    | "bordered"
    | "light"
    | "flat"
    | "faded";
  className?: string;
};
