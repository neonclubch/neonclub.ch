import type { ReactNode } from "react";

export const Section: React.FC<SectionProps> = (props) => {
  const { children, className, sectionClassName } = props;
  return (
    <section
      className={
        "flex flex-grow" + (sectionClassName ? ` ${sectionClassName}` : "")
      }
    >
      <div
        className={
          "container flex flex-col gap-4 py-8 md:py-10 px-6" +
          (className ? ` ${className}` : "")
        }
      >
        {children}
      </div>
    </section>
  );
};

interface SectionProps {
  children: ReactNode;
  sectionClassName?: string;
  className?: string;
}
