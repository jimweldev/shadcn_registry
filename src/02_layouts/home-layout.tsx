import { Outlet } from "react-router";
import type { SidebarGroup } from "@/03_templates/_components/main-template-sidebar";
import MainTemplate from "@/03_templates/main-template";

const HomeLayout = () => {
  const sidebarGroups: SidebarGroup[] = [
    {
      group: "Getting Started",
      links: [
        {
          name: "Introduction",
          url: "/",
        },
        {
          name: "Installation",
          url: "/installation",
        },
      ],
    },
    {
      group: "Components",
      links: [
        {
          name: "Button",
          url: "/button",
        },
        {
          name: "Dialog",
          url: "/dialog",
        },
        {
          name: "Form",
          url: "/form",
        },
      ],
    },
  ];

  return (
    <MainTemplate sidebarGroups={sidebarGroups}>
      <Outlet />
    </MainTemplate>
  );
};

export default HomeLayout;
