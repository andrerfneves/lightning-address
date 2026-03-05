import type { MDXComponents } from "mdx/types";
import { DocsCodeBlock } from "@/components/docs-code-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: ({ children, ...props }) => {
      // Extract code content and language from the code element child
      const codeElement = children as React.ReactElement<{
        children?: string;
        className?: string;
      }>;

      if (codeElement?.props) {
        const code = codeElement.props.children || "";
        const className = codeElement.props.className || "";
        const languageMatch = className.match(/language-(\w+)/);
        const language = languageMatch ? languageMatch[1] : "bash";

        return (
          <DocsCodeBlock
            code={typeof code === "string" ? code.trim() : String(code).trim()}
            language={language}
          />
        );
      }

      // Fallback to default pre
      return <pre {...props}>{children}</pre>;
    },
  };
}
