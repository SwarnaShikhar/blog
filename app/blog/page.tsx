import { Blog } from '@/components/blog'
import React from 'react'

const page = () => {
    return (
        <div className=''>
            <div className='pt-4 ml-8 text-4xl font-bold md:mx-36'>Blog</div>
            <Blog />
        </div>
    )
}

export default page