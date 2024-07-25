import { CardTitle } from "@/components/ui/card";
import { Sidebar } from "@/components/ui/sidebar/sidebar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="md:pl-[72px]  w-full bg-brand h-[50px]">
        <CardTitle className="text-white text-xl ">
          {" "}
          Rick and Morty App
        </CardTitle>
      </div>
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <Sidebar />
      </div>
      <main className="md:pl-[72px] h-full h">{children}</main>
    </div>
  );
};

export default MainLayout;
