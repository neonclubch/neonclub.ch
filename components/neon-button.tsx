import { Button, ButtonProps } from "@heroui/button";
import { tv } from "tailwind-variants";

const neonButton = tv({
  base: "font-mono text-xs uppercase tracking-widest transition-all duration-300",
  variants: {
    neonStyle: {
      bordered:
        "border-neon/60 text-neon hover:bg-neon/10 hover:border-neon",
    },
  },
  defaultVariants: {
    neonStyle: "bordered",
  },
});

export type NeonButtonProps = ButtonProps & {
  neonStyle?: "bordered";
};

export function NeonButton({
  className,
  neonStyle = "bordered",
  variant = "bordered",
  ...props
}: NeonButtonProps) {
  return (
    <Button
      className={neonButton({ neonStyle, className })}
      variant={variant}
      {...props}
    />
  );
}
