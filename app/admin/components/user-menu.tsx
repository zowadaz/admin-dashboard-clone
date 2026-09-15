"use client";

import { useState } from "react";
import UserSetting from "./user-setting";
import { User } from "lucide-react";

export default function UserMenu() {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <button
            onClick={() => setOpen(!open)}
            className="rounded-full text-sm p-2 border text-slate-500 hover:bg-white"
            >
                <User className="w-4 h-4" />
            </button>
            {open && (
                <div className="absolute right-0 top-full m-2">
                    <UserSetting />
                </div>
            )}
        </div>
    )  
}
