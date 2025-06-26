import React from 'react'
import UploadCareButton from './uploacareButton'

type Props = {}

function ProfilePicture({ }: Props) {
    return (
        <div className='flex flex-col'>
            <p className='text-lg text-white'>Profile Pictures</p>
            <div className='flex h-[30vh] flex-col irems-center justify-center'>
                <UploadCareButton />
            </div>
        </div>
    )
}

export default ProfilePicture