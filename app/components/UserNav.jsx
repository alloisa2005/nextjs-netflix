"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const UserNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>

        <Button variant='ghost' className='relative h-10 w-10 rounded-sm' >
          <Avatar className='w-10 h-10 rounded-sm'>
            <AvatarImage />
            <AvatarFallback className='w-10 h-10 rounded-sm'>Jan</AvatarFallback>
          </Avatar>
        </Button>

      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default UserNav;
