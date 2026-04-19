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

const EXTENSION_MAP: Record<string, string> = {
  javascript: "js",
  typescript: "ts",
  python: "py",
  bash: "sh",
  shell: "sh",
  sh: "sh",
  json: "json",
  html: "html",
  css: "css",
  markdown: "md",
  mdx: "mdx",
  yaml: "yaml",
  yml: "yml",
  go: "go",
  rust: "rs",
  ruby: "rb",
  curl: "sh",
  text: "txt",
};

const LABEL_MAP: Record<string, string> = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  python: "Python",
  bash: "Shell",
  shell: "Shell",
  sh: "Shell",
  json: "JSON",
  html: "HTML",
  css: "CSS",
  yaml: "YAML",
  yml: "YAML",
  go: "Go",
  rust: "Rust",
  ruby: "Ruby",
  curl: "cURL",
  text: "Plain text",
};

const DocsCodeBlock = ({
  code,
  language = "bash",
  filename,
  className,
}: DocsCodeBlockProps) => {
  const ext = EXTENSION_MAP[language] ?? language;
  const label = LABEL_MAP[language] ?? language;
  const derivedFilename = filename ?? `example.${ext}`;

  const data = [{ language, filename: derivedFilename, code }];

  return (
    <CodeBlock
      data={data}
      value={language}
      className={cn("not-prose my-6 text-sm", className)}
    >
      <CodeBlockHeader>
        <CodeBlockFilename value={language}>
          {derivedFilename}
        </CodeBlockFilename>
        <div className="ml-auto flex items-center gap-2 pr-2 text-xs text-muted-foreground">
          <span>{label}</span>
          <CodeBlockCopyButton />
        </div>
      </CodeBlockHeader>
      <CodeBlockBody>
        {(item) => (
          <CodeBlockItem key={item.language} value={item.language}>
            <CodeBlockContent language={item.language as BundledLanguage}>
              {item.code}
            </CodeBlockContent>
          </CodeBlockItem>
        )}
      </CodeBlockBody>
    </CodeBlock>
  );
};

export { DocsCodeBlock };
