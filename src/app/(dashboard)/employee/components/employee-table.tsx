"use client";
import React, { useMemo, useState } from "react";
import { dummyEmployee, IEmployee } from "../model/employee.type";
import useDataTable from "@/app/hooks/useDataTable";
import { ToolTipProvider } from "@/components/tooltip-provider";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileSpreadsheet, Plus, Search } from "lucide-react";
import { PaginationState } from "@tanstack/react-table";
import { DataTable } from "@/components/data-table";
import ConfirmationDialog from "@/components/confirmation-dialog";
import EmployeeDialog from "./employee-dialog";
import { toast } from "sonner";

const EmployeeTable = () => {
  const data = dummyEmployee;
  const [selectedItem, setSelectedItem] = useState<IEmployee>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { columnHelper, dataTable } = useDataTable({
    data: data || [],
  });
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [keyword, setKeyword] = useState<string>("");
  // const debouncedKeyword = useDebounce(keyword, 500);

  const onDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedItem(undefined);
  };
  const handleDelete = (item: IEmployee) => {
    // Handle delete logic here
    toast.success(`Deleted ${item.name} successfully!`);
    setIsDeleteModalOpen(false);
  };

  const columns = useMemo(
    () => [
      columnHelper.accessor("citizen_id", {
        header: "ID",
        id: "id",
        enableSorting: false,
        size: 30,
        cell: (ctx) => {
          return (
            <p className="text-left font-sm text-grey-800">
              {ctx.row.original.citizen_id}
            </p>
          );
        },
      }),

      columnHelper.accessor("name", {
        header: "Title",
        id: "name",
        enableSorting: false,
        size: 150,
        cell: (ctx) => {
          return (
            <p className="text-left text-base font-medium text-grey-800">
              {ctx.row.original.name}
            </p>
          );
        },
      }),
      columnHelper.accessor("working_area", {
        header: "Title",
        id: "name",
        enableSorting: false,
        size: 150,
        cell: (ctx) => {
          return (
            <p className="text-left text-base font-medium text-grey-800">
              {ctx.row.original.working_area}
            </p>
          );
        },
      }),
      columnHelper.accessor("tmt", {
        header: "Title",
        id: "name",
        enableSorting: false,
        size: 150,
        cell: (ctx) => {
          return (
            <p className="text-left text-base font-medium text-grey-800">
              {format(ctx.row.original.tmt, "PPP")}
            </p>
          );
        },
      }),
      columnHelper.accessor("status", {
        header: "Title",
        id: "name",
        enableSorting: false,
        size: 150,
        cell: (ctx) => {
          return (
            <p className="text-left text-base font-medium text-grey-800">
              {ctx.row.original.status}
            </p>
          );
        },
      }),
      columnHelper.accessor("department", {
        header: "Title",
        id: "name",
        enableSorting: false,
        size: 150,
        cell: (ctx) => {
          return (
            <p className="text-left text-base font-medium text-grey-800">
              {ctx.row.original.department}
            </p>
          );
        },
      }),

      columnHelper.accessor("citizen_id", {
        header: "Aksi",
        id: "id",
        size: 120,
        enableSorting: false,
        cell: (ctx) => {
          return (
            <div className="flex items-center justify-center w-full gap-4">
              <ToolTipProvider text="Edit">
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="rounded-lg"
                  onClick={() => {
                    setSelectedItem(ctx.row.original);
                    setIsDialogOpen(true);
                  }}
                >
                  <Pencil />
                </Button>
              </ToolTipProvider>
              <ToolTipProvider text="Delete">
                <Button
                  variant={"destructive"}
                  size={"icon"}
                  className="rounded-lg"
                  onClick={() => {
                    setSelectedItem(ctx.row.original);
                    setIsDeleteModalOpen(true);
                  }}
                >
                  <Trash />
                </Button>
              </ToolTipProvider>
            </div>
          );
        },
      }),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dataTable]
  );

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [data, keyword]);
  return (
    <div className="space-y-4">
      <div>
        <div className="flex justify-between gap-x-4 lg:gap-x-8">
          <div className="flex-1 flex gap-x-2 items-center">
            <div className="relative w-full max-w-[250px]">
              <Input
                type="search"
                placeholder="Type employee name"
                className="pr-10"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4 pointer-events-none" />
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select work area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Jakarta Barat</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Jakarta Timur</SelectLabel>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Aktif</SelectItem>
                  <SelectItem value="inactive">Non-Aktif</SelectItem>
                  <SelectItem value="retire">Purna Tugas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="complete">
                    <div className="flex items-center gap-x-2">Complete</div>
                  </SelectItem>
                  <SelectItem value="incomplete">Incomplete</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <Button
              className="flex items-center gap-x-1"
              onClick={() => setIsDialogOpen(true)}
            >
              <Plus />
              Tambah Karyawan
            </Button>
            <Button variant={"outline"} className="flex items-start gap-x-1">
              <FileSpreadsheet />
              Export
            </Button>
          </div>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        pageCount={Math.ceil((data?.length || 0) / pageSize)}
        pagination={{ pageIndex, pageSize }}
        setPagination={setPagination}
      />
      <ConfirmationDialog
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        title="Delete Item"
        description="Are you sure you want to delete this item?"
      >
        <Button
          variant={"destructive"}
          onClick={selectedItem ? () => handleDelete(selectedItem) : () => {}}
          disabled={!selectedItem}
        >
          Delete
        </Button>
      </ConfirmationDialog>
      <EmployeeDialog
        open={isDialogOpen}
        setOpen={onDialogClose}
        data={selectedItem}
      />
    </div>
  );
};

export default EmployeeTable;
