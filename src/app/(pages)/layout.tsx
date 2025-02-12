import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

export default function PagesLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
