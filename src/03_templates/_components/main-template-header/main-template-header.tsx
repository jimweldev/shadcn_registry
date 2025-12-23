import { FaBarsStaggered } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

type MainTemplateHeaderProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MainTemplateHeader = ({ open, setOpen }: MainTemplateHeaderProps) => {
  return (
    <header className="bg-card sticky top-0 z-50 flex h-13 shrink-0 items-center justify-between gap-2 border-b p-2">
      <div className="flex items-center gap-2">
        <Button size="icon" variant="outline" onClick={() => setOpen(!open)}>
          <FaBarsStaggered />
        </Button>
      </div>
    </header>
  );
};

export default MainTemplateHeader;
