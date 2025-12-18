import { Button } from "./components/ui/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";

const App = () => {
  return (
    <div className="space-y-2">
      <div className="space-x-2">
        <Button size="xs">Button</Button>
        <Button size="sm">Button</Button>
        <Button size="default">Button</Button>
        <Button size="lg">Button</Button>
      </div>
      <div className="space-x-2">
        <Button size="xs">Button</Button>
        <Button size="sm">Button</Button>
        <Button size="default">Button</Button>
        <Button size="lg">Button</Button>
      </div>
      <div className="space-x-2">
        <Button size="xs">Button</Button>
        <Button size="sm">Button</Button>
        <Button size="default">Button</Button>
        <Button size="lg">Button</Button>
      </div>
      <div className="space-x-2">
        <Button size="xs">Button</Button>
        <Button size="sm">Button</Button>
        <Button size="default">Button</Button>
        <Button variant="outline" size="lg">
          Button
        </Button>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent autoFocus>
          <DialogHeader>
            <DialogTitle>Create Example Task</DialogTitle>
          </DialogHeader>

          <DialogBody>
            <div className="grid grid-cols-12 gap-3"></div>
          </DialogBody>

          <DialogFooter className="flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;
