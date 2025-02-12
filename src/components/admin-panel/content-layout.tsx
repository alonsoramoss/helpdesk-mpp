import { Header } from "@/components/admin-panel/header";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <div>
      <Header title={title} />
      <div className="container py-4 px-4 sm:px-8">{children}</div>
    </div>
  );
}
