import { useState } from "react";
import { Check, Copy } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  docco,
  monokaiSublime,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import useThemeStore from "@/05_stores/_common/theme-store";
import { Button } from "../ui/button";

type CodeCommandProps = {
  code: string;
  className?: string;
};

const CodeCommand = ({ code }: CodeCommandProps) => {
  const { theme } = useThemeStore();
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon-xs"
        className="absolute top-2 right-2 z-10"
        onClick={onCopy}
      >
        {isCopied ? <Check /> : <Copy />}
      </Button>
      <SyntaxHighlighter
        language="bash"
        style={theme === "dark" ? monokaiSublime : docco}
        wrapLines
        customStyle={{
          maxHeight: "400px",
          overflow: "auto",
          borderRadius: "8px",
          fontSize: "14px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeCommand;
