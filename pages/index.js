import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
    search
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
    <>
      <Head>
        <title>Hulu 2 Youtube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav isNotSearch={search === "false" || search === "" ? true : false} />

      {/* Results */}

      {results.length !== 0 ?
        <Results results={results} />
        :
        <div className="flex justify-center align-center mt-80 mb-52 "><p className="text-4xl min-h-700	">No results!</p></div>
      }


      {!search && (
        <Pagination
          totalPages={totalPages}
          totalPosts={totalResultsCount}
          postsPerPage={20}
          currentPage={currentPage}
          paginateFront={paginateFront}
          paginateBack={paginateBack}
        />
      )}

      <Footer />
    </>
  )
}


export async function getServerSideProps(context) {

  if (context.resolvedUrl === "/") {
    return {
      redirect: {
        permanent: false,
        destination: "/?genre=fetchTrending&page=1"
      }
    }
  }

  const genre = context.query.genre;
  const currentPage = context.query.page;
  const search = context.query.search;



  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || fetchSearch + search}&page=${currentPage || 1}`).then(res => res.json())


  return {
    props: {
      results: request.results,
      totalResultsCount: request.total_results,
      totalPages: request.total_pages,
      search: search || ""
    }
  }

}