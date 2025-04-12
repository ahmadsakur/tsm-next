import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { IEmployee } from "../model/employee.type";
import { toast } from "sonner";
import EmployeeForm from "./employee-form";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EmployeeDialogProps {
  open: boolean;
  setOpen: () => void;
  data?: IEmployee;
}

const EmployeeDialog = (props: EmployeeDialogProps) => {
  const { open, setOpen, data } = props;

  const handleSubmit = (data: IEmployee) => {
    console.log("Employee data submitted:", data);
    toast.success("Employee data saved successfully!");
    setOpen();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {data ? "Edit Employee Data" : "Add Employee Data"}
          </DialogTitle>
          <DialogDescription className="text-sm">
            {data
              ? "Edit the Employee by filling in the details below."
              : "Fill in the details below to add new Employee."}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[400px]">
          <div className="pl-1 pr-4 pb-4">
            <EmployeeForm onSubmit={handleSubmit} data={data} />
          </div>
        </ScrollArea>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button
            form="employee-form"
            type="submit"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeDialog;
