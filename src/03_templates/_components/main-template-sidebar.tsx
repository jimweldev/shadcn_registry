import ReactImage from "@/components/image/react-image";
import { Link, NavLink } from "react-router";

const activeSidebar =
  "flex gap-2 font-semibold items-center px-3 py-2 rounded-lg bg-primary/10 text-primary transition-colors duration-200";

const inactiveSidebar =
  "flex gap-2 font-semibold items-center px-3 py-2 rounded-lg bg-transparent text-card-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground";

type SidebarLink = {
  name: string;
  url: string;
  icon?: React.ComponentType;
  end?: boolean;
};

export type SidebarGroup = {
  group?: string;
  links: SidebarLink[];
};

type MainTemplateSidebarProps = {
  open: boolean;
  sidebarGroups: SidebarGroup[];
};

const MainTemplateSidebar = ({
  open,
  sidebarGroups,
}: MainTemplateSidebarProps) => {
  return (
    <div
      className={`bg-card w-70 shrink-0 border-r transition-all duration-300 ${
        open ? "-ml-70 lg:ml-0" : "ml-0 lg:-ml-70"
      }`}
    >
      <Link className="p-layout flex items-center gap-2" to="/">
        <div className="w-full max-w-7 overflow-hidden rounded-md">
          <ReactImage src="/logos/logo.png" />
        </div>
        <h1 className="text-center font-semibold transition-[margin,opacity,hidden] group-data-[collapsible=icon]:hidden group-data-[collapsible=icon]:opacity-0">
          Shadcn Registry
        </h1>
      </Link>
      <div className="p-4 pt-0">
        <nav>
          <ul>
            {sidebarGroups.map((group) => (
              <li key={group.group}>
                <h4 className="text-muted-foreground mt-layout mb-1 px-2 text-xs font-medium">
                  {group.group}
                </h4>
                <ul className="mb-4 space-y-1">
                  {group.links.map((link) => (
                    <li key={link.url}>
                      <NavLink
                        to={link.url}
                        end={link.end}
                        className={({ isActive }) =>
                          isActive ? activeSidebar : inactiveSidebar
                        }
                      >
                        {link.icon && <link.icon />}
                        <span className="text-sm">{link.name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainTemplateSidebar;
