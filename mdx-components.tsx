import type { MDXComponents } from "mdx/types";
import { title, subtitle } from "@/components/primitives";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => (
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="container lg:max-w-5xl flex flex-col px-6 space-y-4">{children}</div>
      </section>
    ),
    h1: ({ children }) => <h1 className={title({ size: "xl" })}>{children}</h1>,
    h2: ({ children }) => <h2 className={title({ size: "lg" })}>{children}</h2>,
    h3: ({ children }) => <h3 className={title({ size: "md" })}>{children}</h3>,
    h4: ({ children }) => <h4 className={title({ size: "sm" })}>{children}</h4>,
    ul: ({ children }) => (
      <ul className="list-['-_'] list-outside pl-4">{children}</ul>
    ),
    li: ({ children }) => <li className="list-item">{children}</li>,
    ...components,
  };
}
