"use client";

import { Separator } from "@radix-ui/react-separator";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ModeToggle } from "../toggles/mode-toggle";

export const Sidebar = () => {
  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full bg-brand rounded-br-2xl">
      {/* <NavigationAction /> */}
      <Separator className="h-[2px] bg-white rounded-md w-10 mx-auto" />

      <ScrollArea className="flex-1 w-full h-full">
        {
          // servers.map((s) => (
          //     <div key={s.id} className="mb-4">
          //         <NavigationItem
          //             id={s.id}
          //             name={s.name}
          //             imageUrl={s.imageUrl}
          //         />
          //     </div>
          // ))
        }
      </ScrollArea>

      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />
        {/* <UserButton
            afterSignOutUrl="/"
            appearance={{
                elements: {
                    avatarBox: "h-[48px] w-[48px]"
                }
            }}
        /> */}
      </div>
    </div>
  );
};
