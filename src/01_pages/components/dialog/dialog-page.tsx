import CodePreview from "@/components/code/code-preview";
import ButtonPreview from "./dialog-preview";
import PageHeader from "@/components/typography/page-header";

const DialogPage = () => {
  const codeString = `import { Button } from "@/components/ui/button";

const ButtonPreview = () => {
  return <Button>Button</Button>;
};

export default ButtonPreview;
`.trim();

  return (
    <div>
      <PageHeader className="mb-layout">Dialog</PageHeader>

      <CodePreview code={codeString}>
        <ButtonPreview />
      </CodePreview>
    </div>
  );
};

export default DialogPage;
