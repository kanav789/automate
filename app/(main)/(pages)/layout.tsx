import InfoBar from '@/components/infobar'
import React from 'react'
type Props = { children: React.ReactNode }
export default function Layout(props: Props) {
    return (
        <div className="border-l-[1px] border-t-[1px] pb-20  rounded-l-3xl border-muted-foreground/20 overflow-y-visible ">
            <InfoBar />
            {props.children}
        </div>
    )
}
