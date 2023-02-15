import Link from 'next/link'
import React from 'react'
import User from './User'

const Header = () => {
  return (
    <header className='flex justify-between p-5 text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
            <Link href={'/'} className='link'>About</Link>
            <Link href={'/'} className='link'>Store</Link>
        </div>
        <div className='flex space-x-4 items-center'>
            <Link href={'/'} className='link'>Gmail</Link>
            <Link href={'/'} className='link'>Images</Link>
            <User/>
        </div>
    </header>
  )
}

export default Header