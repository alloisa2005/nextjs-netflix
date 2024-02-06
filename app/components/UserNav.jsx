"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { signOut, useSession } from "next-auth/react";

const UserNav = () => {

  const {data: session} = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-10 w-10 rounded-sm' >
          <Avatar className='w-10 h-10 rounded-sm'>
          <AvatarImage src={session?.user.image ? session?.user.image: `https://daxugisfuijxkdndbpwt.supabase.co/storage/v1/object/public/user%20image/avatar.png`} />
            <AvatarFallback className='w-10 h-10 rounded-sm'>Jan</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1 px-1">
            <p className="text-sm font-medium leading-none">{session?.user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{session?.user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={ () => signOut() }>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
      
    </DropdownMenu>
  );
};

export default UserNav;
