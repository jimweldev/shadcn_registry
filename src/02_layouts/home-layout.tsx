import { FaHouse } from "react-icons/fa6";
import { Outlet } from "react-router";
import type { SidebarGroup } from "@/03_templates/_components/main-template-sidebar";
import MainTemplate from "@/03_templates/main-template";

const HomeLayout = () => {
  const sidebarGroups: SidebarGroup[] = [
    {
      // group: 'Home',
      links: [
        {
          name: "Home",
          url: "/",
          icon: FaHouse,
        },
        {
          name: "Button",
          url: "/button",
          icon: FaHouse,
        },
        {
          name: "Dialog",
          url: "/dialog",
          icon: FaHouse,
        },
        {
          name: "Form",
          url: "/form",
          icon: FaHouse,
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
