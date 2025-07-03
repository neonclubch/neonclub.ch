"use client";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { useSearchParams } from "next/navigation";

export const Rsvp: React.FC<RsvpProps> = ({ formLink, className, buttonText, buttonColor, buttonVariant }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  if (!id) return null;
  return (
    <div className={className}>
      <Link
        isExternal
        className={buttonStyles({
          color: buttonColor || "success",
          radius: "full",
          variant: buttonVariant || "solid",
        })}
        href={`${formLink}?id=${id}`}
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
