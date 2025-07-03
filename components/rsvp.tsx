"use client";
import React from "react";
import { useApiGetRsvp } from "@/helpers/rsvpApi";
import { Spinner } from "@nextui-org/spinner";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { useSearchParams } from "next/navigation";

export const Rsvp: React.FC<RsvpProps> = ({ formLink, className, buttonText, buttonColor, buttonVariant }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  if (!id) return null;
  const { data, isLoading, isError, error, isLoadingError, refetch } = useApiGetRsvp(id);
  if (isLoading) return <Spinner />;
  if (isError || !data) return <span>Invite not found!</span>;
  return (
    <div className={className}>
      <Link
        isExternal
        className={buttonStyles({
          color: buttonColor || "success",
          radius: "full",
          variant: buttonVariant || "solid",
        })}
        href={`${formLink}?id=${data.id}&firstName=${data.firstName}&lastName=${data.lastName || ""}`}
      >
        {buttonText || "RSVP"}
      </Link>
    </div>
  );
};

type RsvpProps = {
  formLink: string;
  buttonText?: string;
  buttonColor?: "success" | "primary" | "secondary" | "warning" | "danger";
  buttonVariant?: "solid" | "shadow" | "ghost" | "bordered" | "light" | "flat" | "faded";
  className?: string;
};
