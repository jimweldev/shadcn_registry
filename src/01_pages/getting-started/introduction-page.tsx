import PageHeader from "@/components/typography/page-header";
import PageSubHeader from "@/components/typography/page-sub-header";

const IntroductionPage = () => {
  return (
    <div>
      <PageHeader>Jimwel&apos;s Shadcn Registry</PageHeader>
      <PageSubHeader className="mb-layout">
        A curated collection of reusable UI components
      </PageSubHeader>

      <p>
        This registry showcases custom-built Shadcn UI components designed for
        consistency, scalability, and rapid development. Explore patterns,
        layouts, and components you can easily reuse across projects.
      </p>
    </div>
  );
};

export default IntroductionPage;
