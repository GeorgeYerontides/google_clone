import React from 'react'
import SearchHeaderOption from './SearchHeaderOption'
import { SearchIcon,PhotographIcon,VideoCameraIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
const SearchHeaderOptions = () => {
  const router = useRouter();
  return (
    <div className='flex space-x-8 select-none w-full justify-center text-s, text-gray-700 lg:pl-52 lg:justify-start border-b'>
        <SearchHeaderOption title='All' icon={SearchIcon} selected={router.query.searchType === '' || !router.query.searchType} path={''}/>
        <SearchHeaderOption title='Images' icon={PhotographIcon} selected={router.query.searchType === 'image'} path={'image'}/>
        <SearchHeaderOption title='Videos' icon={VideoCameraIcon} selected={router.query.searchType === 'videos'} path={'videos'}/>
    </div>
  )
}

export default SearchHeaderOptions