import { ProfileForm } from '@/components/forms/profile-forms'
import React from 'react'
import ProfilePicture from './_Components/profile_picture'
import { db } from '@/lib/db'
import { UserButton } from '@clerk/nextjs'

type Props = {}

export default function Setting({ }: Props) {
    const removeProfileImage = async () => {
        'use server'
        // const response = await db.user.update({
        //     where: {
        //         clerkId: authUser.id
        //     },
        //     data: {
        //         proileImage: '',
        //     }
        // })
    }
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='sticky top-0 z-[10] flex items-center justify-between   bg-background/50 p-6 text-4xl backdrop-blur-lg'>
                <span>Settings</span>
            </h1>
            <div className="flex flex-col gap-10 p-6">
                <div>
                    <h2 className="text-2xl font-bold">User Profile</h2>
                    <p className="text-base text-white/50">
                        Add or update your information
                    </p>
                </div>
                {/* <ProfilePicture onUpload={uploadProileImage}
                    userImage={user?.profileImage}
                    onDelete={removeProfileImage} >

                </ProfilePicture> */}



                <ProfileForm />

            </div>


        </div>
    )
}