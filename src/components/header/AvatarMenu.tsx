"use client";

import * as React from "react";
import { LogOut, User, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { UserInfoProps } from "@/types/global";
import Image from "next/image";
import { toast } from "sonner";

export function AvatarMenu({ session }: { session: UserInfoProps | null }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleLogout = () => {
    signOut();
    toast.success("Logged out successfully");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-[50px] h-[50px] rounded-full p-0"
        >
          <Avatar>
            <Image
              src={session?.user?.image || "/default-image.png"}
              width={200}
              height={200}
              className="rounded-full"
              alt="User Image"
            />
            <AvatarFallback>{session?.user?.name?.slice(0, 2)}</AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No options available.</CommandEmpty>
            <CommandGroup>
              <Link href="/profileSetting">
                <CommandItem
                  key="profile"
                  value="profile"
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                  <Check
                    className={cn(
                      "ml-auto",
                      value === "profile" ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              </Link>
              <CommandItem key="logout" value="logout" onSelect={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
                <Check
                  className={cn(
                    "ml-auto",
                    value === "logout" ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
