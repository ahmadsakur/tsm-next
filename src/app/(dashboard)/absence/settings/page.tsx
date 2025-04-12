import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Absensi | Pengaturan",
  description: "Absensi",
};
const AbsenceSettingsPage = () => {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 lg:px-6">Pengaturan Absensi</div>
    </div>
  );
};

export default AbsenceSettingsPage;
