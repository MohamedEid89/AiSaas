import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {Sidebar} from "@/components/dashboard/Sidebar";
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";


export default function MobileSidebar() {

       

  return (
    <div>
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className='md:hidden'>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
    </div>
  );
}

