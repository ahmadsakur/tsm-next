"use client";

import * as React from "react";
import {
  ALargeSmall,
  ChartColumnBig,
  Fingerprint,
  FlagTriangleRight,
  Home,
  Landmark,
  ListChecks,
  Map,
  QrCode,
  ShieldCheck,
  ShieldUser,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/layout/sidebar/nav-main";
import { NavUser } from "@/components/layout/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const User = {
  name: "admin",
  email: "admin@x.com",
  avatar: "/avatars/shadcn.jpg",
};

const NavLinks = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    isActive: true,
  },
  {
    title: "Lokasi",
    url: "#",
    icon: Map,
    isActive: true,
    items: [
      {
        title: "Zona Lokasi",
        url: "/location/zone",
      },
      {
        title: "Kategori Lokasi",
        url: "/location/category",
      },
    ],
  },
  {
    title: "Absensi",
    url: "#",
    icon: Fingerprint,
    items: [
      {
        title: "Data Absensi",
        url: "/absence",
      },
      {
        title: "Settings",
        url: "/absence/settings",
      },
    ],
  },
  {
    title: "Laporan",
    url: "#",
    icon: FlagTriangleRight,
    items: [
      {
        title: "Laporan Patroli",
        url: "/report/patrol",
      },
      {
        title: "Laporan Temuan",
        url: "#",
      },
      {
        title: "Laporan Kejadian",
        url: "#",
      },
      {
        title: "Laporan Client",
        url: "#",
      },
    ],
  },
  {
    title: "Statistik",
    url: "#",
    icon: ChartColumnBig,
  },
  {
    title: "Barcode",
    url: "#",
    icon: QrCode,
    items: [
      {
        title: "Barcode Absensi",
        url: "#",
      },
      {
        title: "Barcode Patroli",
        url: "#",
      },
    ],
  },
  {
    title: "Client",
    url: "#",
    icon: Users,
    items: [
      {
        title: "Data Client",
        url: "#",
      },
      {
        title: "Settings",
        url: "#",
      },
    ],
  },
  {
    title: "Karyawan",
    url: "#",
    icon: ShieldUser,
    items: [
      {
        title: "Data Karyawan",
        url: "/employee",
      },
      {
        title: "Data Minus",
        url: "#",
      },
      {
        title: "Data Pelamar",
        url: "#",
      },
      {
        title: "Settings",
        url: "#",
      },
    ],
  },
  {
    title: "Inventory",
    url: "#",
    icon: ListChecks,
  },
  {
    title: "Informasi",
    url: "#",
    icon: ALargeSmall,
    items: [
      {
        title: "Banners",
        url: "#",
      },
      {
        title: "Berita",
        url: "#",
      },
    ],
  },
  {
    title: "Payroll",
    url: "#",
    icon: Landmark,
    items: [
      {
        title: "Data Payroll",
        url: "/payroll",
      },
      {
        title: "Settings",
        url: "/payroll/settings",
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck />
                <span className="text-base font-semibold">TSM Dashboard</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={NavLinks} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={User} />
      </SidebarFooter>
    </Sidebar>
  );
}
