import Head from 'next/head'
import React from 'react'
import SearchHeader from '@/components/SearchPage/SearchHeader'
import Response from '@/Response'
const SearchPage = (props) => {
console.log(props.results);
  return (
    <>
    <Head>
        <title>Search Page</title>
    </Head>
    <SearchHeader />
    </>
  )
}

export default SearchPage

export async function getServerSideProps(context){
  const mockData = true
  if(mockData)
  {
    return {
      props: {
        results: Response 
      }
    }
  }

  const res =   await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && ('&searchType='+context.query.searchType) }`
  )
  const data = await res.json();
  return {
    props: {
      results: data 
    }
  }
}