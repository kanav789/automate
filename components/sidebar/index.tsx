"use client"
import { div, nav, ul } from 'framer-motion/client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import clsx from "clsx"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { menuOptions } from '@/lib/constants'
import { Separator } from '../ui/separator'
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react'
import { ModeToggle } from '../Global/mode-toggle'
type Props = {}

const MenuOptions = (props: Props) => {
    const pathName = usePathname()
    return (
        <nav className=" dark:bg-black  overflow-visible  justify-between flex items-center flex-col  gap-10 py-6 px-2">
            <div className="flex items-center justify-center flex-col gap-8">
                <Link
                    className="flex font-bold flex-row "
                    href="/"
                >
                    fuzzie.
                </Link>
                <TooltipProvider>
                    {menuOptions.map((menuItem, key) => (
                        <ul key={key}>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger>
                                    <li>
                                        <Link href={menuItem.href}
                                            className={clsx(
                                                'group h-8 w-8 flex items-center justify-center  scale-[1.5] rounded-lg p-[3px]  cursor-pointer',
                                                {
                                                    'dark:bg-[#2F006B] bg-[#EEE0FF] ':
                                                        pathName === menuItem.href,
                                                }
                                            )}
                                        >
                                            <menuItem.Component
                                                selected={pathName === menuItem.href}
                                            />
                                        </Link>
                                    </li>
                                </TooltipTrigger>
                                <TooltipContent className='bg-black/10 text-white backdrop-blur-xl' side='right'>
                                    <p>{menuItem.name}</p>
                                </TooltipContent>
                            </Tooltip>

                        </ul>
                    ))}
                </TooltipProvider>
                <Separator />

                <div className="flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full border-[1px] h-56 overflow-y-scroll">
                    <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
                        <LucideMousePointerClick
                            className="dark:text-white"
                            size={18}
                        />
                        <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
                    </div>
                    <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
                        <GitBranch
                            className="text-muted-foreground"
                            size={18}
                        />
                        <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
                    </div>
                    <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
                        <Database
                            className="text-muted-foreground"
                            size={18}
                        />
                        <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
                    </div>
                    <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
                        <GitBranch
                            className="text-muted-foreground"
                            size={18}
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col gap-8">
                <ModeToggle />
            </div>

        </nav>
    )
}

export default MenuOptions