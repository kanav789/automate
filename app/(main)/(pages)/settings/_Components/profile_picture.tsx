"use client"
import React from 'react'
import UploadCareButton from './uploacareButton'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

type Props = {
    userImage?: string
    onUpload?: any
    onDelete?: any
}

function ProfilePicture({ userImage, onDelete, onUpload }: Props) {
    const router = useRouter()
    const handleRemoveProflile = async () => {
        const response = await onDelete();
        if (response) {
            router.refresh()
        }

    }
    return (
        <div className='flex flex-col'>
            <p className='text-lg text-white'>Profile Pictures</p>
            <div className='flex h-[30vh] flex-col irems-center justify-center'>
                {userImage ? (
                    <>
                        <div className='relative h-full w-2/12'>
                            <Image src={userImage} alt="User_Image" fill />


                        </div>
                        <Button onClick={handleRemoveProflile} className='bg-transparent text-white/70 hover:bg-transparent hover:text-white'><X />   Remove Logo</Button>
                    </>

                ) : (<div>
                    <UploadCareButton onUpload={onUpload} />
                </div>)}
            </div>
        </div>
    )
}

export default ProfilePicture