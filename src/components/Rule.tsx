import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

export default function Rule() {

    const [openDialog, setOpenDialog] = useState(false)

    return (
        <div className="w-full h-full p-8 min-w-0">
            <div className="w-full h-full border-[1px] border-neutral-400 rounded-md flex flex-col min-h-0 p-4 gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="rounded-md bg-transparent border-[1px] border-white text-white  hover:text-black font-mono transition-all hover:bg-neutral-100 w-fit px-3 py-2">
                            New Rule
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={()=>setOpenDialog(true)}>Auto Create</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Dialog open={openDialog} onOpenChange={e => setOpenDialog(e)}>
                    <DialogContent>
                        <DialogHeader>
                            New Rule
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                <div className="p-1 w-full border-t-[1px] border-white"></div>
            </div>
        </div>
    );
}
