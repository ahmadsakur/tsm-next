import { Input } from "@/components/ui/input";
import { IEmployee } from "../model/employee.type";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EmployeeFormProps {
  data?: IEmployee;
  onSubmit: (formData: IEmployee) => void;
}
const EmployeeForm = (props: EmployeeFormProps) => {
  console.log("EmployeeForm", props.data);
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
      <div className="space-y-2">
        <Label htmlFor="ktp_foto">Foto KTP</Label>
        <Input type="file" id="ktp_foto" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="pas_foto">Pas Foto</Label>
        <Input type="file" id="pas_foto" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Nama</Label>
        <Input type="text" id="name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="nik">NIK</Label>
        <Input type="text" id="nik" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="place-of-birth">Tempat Lahir</Label>
        <Input type="email" id="place-of-birth" />
      </div>
      <div className="space-y-2">
        <Label>Tanggal</Label>
        <Popover>
          <PopoverTrigger asChild className="w-full">
            <Button
              variant={"outline"}
              className={cn("w-full text-left font-normal")}
            >
              <span>Pick a date</span>
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" initialFocus />
          </PopoverContent>
        </Popover>
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Alamat</Label>
        <Input type="email" id="address" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="citizen-id">Nomor KTP</Label>
        <Input type="email" id="citizen-id" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone-number">Nomor HP</Label>
        <Input type="email" id="phone-number" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="whatsapp-number">Nomor WhatsApp</Label>
        <Input type="email" id="whatsapp-number" />
      </div>
      <div className="space-y-2">
        <Label>Wilayah Kerja</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Jabatan</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Status</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>TMT</Label>
        <Popover>
          <PopoverTrigger asChild className="w-full">
            <Button
              variant={"outline"}
              className={cn("w-full text-left font-normal")}
            >
              <span>Pick a date</span>
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" initialFocus />
          </PopoverContent>
        </Popover>
      </div>
      <div className="space-y-2">
        <Label htmlFor="kta">KTA</Label>
        <Input type="email" id="kta" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="npwp">NPWP</Label>
        <Input type="email" id="npwp" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bpjs">BPJS</Label>
        <Input type="email" id="bpjs" />
      </div>
      <div className="space-y-2">
        <Label>Bank</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="account-holder">Nama Rekening</Label>
        <Input type="email" id="account-holder" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="account-number">Nomor Rekening</Label>
        <Input type="email" id="account-number" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="rt">RT</Label>
        <Input type="email" id="rt" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="rw">RW</Label>
        <Input type="email" id="rw" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="account-number">Status Hubungan</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="religion">Agama</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Group</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default EmployeeForm;
