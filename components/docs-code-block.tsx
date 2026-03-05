"use client";

import type { BundledLanguage } from "@/components/kibo-ui/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/components/kibo-ui/code-block";
import { cn } from "@/lib/utils";

interface DocsCodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

const DocsCodeBlock = ({
  code,
  language = "bash",
  filename,
  className,
}: DocsCodeBlockProps) => {
  const data = [
    {
      language,
      filename: filename || `example.${getExtension(language)}`,
      code,
    },
  ];

  return (
    <CodeBlock
      data={data}
      value={language}
      className={cn("my-4", className)}
    >
      <CodeBlockHeader>
        {filename && (
          <CodeBlockFilename value={language}>
            {filename}
          </CodeBlockFilename>
        )}
        {!filename && <div className="flex-1" />}
        <CodeBlockCopyButton />
      </CodeBlockHeader>
      <CodeBlockBody>
        {(item) => (
          <CodeBlockItem
            key={item.language}
            value={item.language}
            lineNumbers={false}
          >
            <CodeBlockContent language={item.language as BundledLanguage}>
              {item.code}
            </CodeBlockContent>
          </CodeBlockItem>
        )}
      </CodeBlockBody>
    </CodeBlock>
  );
};

function getExtension(language: string): string {
  const extensionMap: Record<string, string> = {
    javascript: "js",
    typescript: "ts",
    python: "py",
    bash: "sh",
    shell: "sh",
    json: "json",
    html: "html",
    css: "css",
    markdown: "md",
    yaml: "yaml",
    go: "go",
    rust: "rs",
    ruby: "rb",
  };
  return extensionMap[language] || language;
}

export { DocsCodeBlock };
