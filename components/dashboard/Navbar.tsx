import React from 'react'
import { UserButton } from '@clerk/nextjs';
import MobileSidebar from './MobileSidebar';

export default function Navbar() {
  return (
    <div className='flex itemcenter p-4'>
        <MobileSidebar />
        <div className='flex w-full justify-end'>
            <UserButton />
        </div>
    </div>
  )
}

