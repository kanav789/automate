import React from 'react'
type Props = { children: React.ReactNode }
export default function Layout(props: Props) {
    return (
        <div className='flex overflow h-screen '>

            {props.children}
        </div>
    )
}
