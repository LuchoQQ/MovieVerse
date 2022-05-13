import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Pagination from '../components/Pagination'
import Results from '../components/Results'
import requests from "../utils/requests";
import router, { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { fetchSearch } from '../utils/requests'

export default function Home(
  { results,
    totalPages,
    totalResultsCount,
  }) {
  // ===========================================
  // PAGINATION
  // ===========================================
    const [currentPage, setCurrentPage] = useState(1);
  
  // Use effect to get the actual page from the URL query string
  useEffect(() => {
    setCurrentPage(parseInt(router.query.page));
  }), [];

  // Next page
  const paginateFront = () => {
    if (currentPage <= totalPages) {
      let actualURL = window.location.href
      actualURL = actualURL.replace("#", "")
      let newURL = actualURL.replace(`page=${currentPage}`, `page=${currentPage + 1}`)
      router.push(`${newURL}`);
      setCurrentPage(currentPage + 1)
    }
  };

  // Previous page
  const paginateBack = () => {
    if (currentPage > 1) {
      let actualURL = window.location.href
      actualURL = actualURL.replace("#", "")
      let newURL = actualURL.replace(`page=${currentPage}`, `page=${currentPage - 1}`)
      router.push(`${newURL}`);
      setCurrentPage(currentPage - 1)
    }
  };

  // ===========================================
  // END PAGINATION
  // ===========================================


  return (
    <div>
      <Head>
        <title>Hulu 2 Youtube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      {/* Results */}
      <Results results={results} />

      <Pagination
        totalPages={totalPages}
        totalPosts={totalResultsCount}
        postsPerPage={20}
        currentPage={currentPage}
        paginateFront={paginateFront}
        paginateBack={paginateBack}
      />

    </div>
  )
}


export async function getServerSideProps(context) {


  const genre = context.query.genre;
  const currentPage = context.query.page;
  const search = context.query.search;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url ||fetchSearch + search}&page=${currentPage || 1}`).then(res => res.json())
  
 //
  return {
    props: {
      results: request.results,
      totalResultsCount: request.total_results,
      totalPages: request.total_pages,
    }
  }

}