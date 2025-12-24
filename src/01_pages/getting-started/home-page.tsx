import CodeCommand from "@/components/code/code-command";
import PageHeader from "@/components/typography/page-header";
import PageSubHeader from "@/components/typography/page-sub-header";
import { Card, CardBody } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div>
      <PageHeader>Installation</PageHeader>
      <PageSubHeader className="mb-layout">
        How to install Jimwel&apos;s Shadcn Registry components in your project.
      </PageSubHeader>

      <Card>
        <CardBody>
          <CodeCommand
            code={`npx shadcn@latest add https://jimweldev-shadcn-registry.vercel.app/r/all.json --overwrite`}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default HomePage;
