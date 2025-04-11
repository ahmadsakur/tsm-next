import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Zona Lokasi",
  description: "Zona Lokasi",
};
const ZonaLokasiPage = () => {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 lg:px-6">Zona Lokasi</div>
    </div>
  );
};

export default ZonaLokasiPage;
