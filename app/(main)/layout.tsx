import Sidebar from '@/components/sidebar'
import React from 'react'
type Props = { children: React.ReactNode }
export default function Layout(props: Props) {
    return (
        <div className='flex overflow-visible '>
            <Sidebar />
            <div className='w-ful'>{props.children}</div>
        </div>
    )
}
