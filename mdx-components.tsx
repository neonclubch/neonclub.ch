import type { MDXComponents } from "mdx/types";
import { title } from "@/components/primitives";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className={title({ size: "xl" })}>{children}</h1>,
    h2: ({ children }) => <h2 className={title({ size: "lg" })}>{children}</h2>,
    h3: ({ children }) => <h3 className={title({ size: "md" })}>{children}</h3>,
    h4: ({ children }) => <h4 className={title({ size: "sm" })}>{children}</h4>,
    ol: ({ children }) => (
      <ol className="list-decimal list-outside">{children}</ol>
    ),
    ul: ({ children }) => (
      <ul className="list-['-_'] list-outside">{children}</ul>
    ),
    li: ({ children }) => <li className="list-item ml-5 pl-2">{children}</li>,
    ...components,
  };
}
