import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Payroll",
  description: "Data Payroll",
};

const PayrollPage = () => {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 lg:px-6">Payroll Page</div>
    </div>
  );
};

export default PayrollPage;
