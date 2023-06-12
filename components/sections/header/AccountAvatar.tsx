"use client";
import { Icon } from "@iconify/react";
import { Avatar } from "@/components/ui/avatar";

const AccountAvatar = () => {
  return (
    <Avatar className="bg-white dark:bg-transparent w-10 h-10 shadow-md p-2 transition-all duration-300 cursor-pointer dark:hover:brightness-150 hover:brightness-75 hover:shadow-sm">
      <Icon icon="solar:user-linear" className="text-2xl text-gray-400 " />
    </Avatar>
  );
};
export default AccountAvatar;
