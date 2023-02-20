import Head from 'next/head'
import React from 'react'
import SearchHeader from '@/components/SearchPage/SearchHeader'
import SearchResults from '@/components/SearchPage/SearchResults'
import { useRouter } from 'next/router'
import ImageResult from '@/components/SearchPage/ImageResult'
const SearchPage = (props) => {
  const router =useRouter();

  return (
    <>
    <Head>
        <title>Search: {router.query.term}</title>
    </Head>
    <SearchHeader />
    {router.query.searchType === 'image' ? <ImageResult  results={props.results}/> : <SearchResults results={props.results}/> }
    </>
  )
}

export default SearchPage

export async function getServerSideProps(context){
  const startIndex = context.query.start || "1";
  const data =  await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }&start=${startIndex}`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}