import CodePreview from "@/components/code/code-preview";
import ButtonPreview from "./button-preview";
import PageHeader from "@/components/typography/page-header";

const ButtonPage = () => {
  const codeString = `import { Button } from "@/components/ui/button";

const ButtonPreview = () => {
  return <Button>Button</Button>;
};

export default ButtonPreview;
`.trim();

  return (
    <div>
      <PageHeader className="mb-layout">Button</PageHeader>

      <CodePreview code={codeString}>
        <ButtonPreview />
      </CodePreview>
    </div>
  );
};

export default ButtonPage;
