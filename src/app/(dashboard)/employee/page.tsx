import PageBreadCrumb from "@/components/breadcrumb";

import React from "react";
import EmployeeTable from "./components/employee-table";

const EmployeeListPage = () => {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 lg:px-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Data Karyawan</h2>
          <PageBreadCrumb
            items={[
              {
                title: "Data Karyawan",
              },
            ]}
          />
        </div>
      </div>
      <div className="px-4 lg:px-6">
        <EmployeeTable />
      </div>
    </div>
  );
};

export default EmployeeListPage;
