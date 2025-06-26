'use client'
import React, { useEffect, useRef } from 'react'

import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import { useRouter } from 'next/navigation'
import '@uploadcare/react-uploader/core.css';


type Props = {
    onUpload: (e: string) => any
}



const UploadCareButton = ({ onUpload }: Props) => {
    const router = useRouter()


    useEffect(() => {
        const handleUpload = async (e: any) => {
            const file = await onUpload(e.detail.cdnUrl)
            if (file) {
                router.refresh()
            }
        }

    }, [])

    return (
        <div>
            <FileUploaderRegular
                sourceList="local, camera, facebook, gdrive"
                cloudImageEditorAutoOpen={true}
                classNameUploader="uc-light"
                pubkey="9681514dbbb33871153d"
            />
        </div>

  )
}

export default UploadCareButton