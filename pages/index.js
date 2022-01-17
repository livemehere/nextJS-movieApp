import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/movie/${id}`);
  };
  return (
    <div className="wrap">
      <Seo title="HOME" />
      {!results && <h4>Loading...</h4>}
      <div className="container">
        {results?.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="poster"
              onClick={() => {
                handleClick(movie.id);
              }}
            />
            <h4>{movie.title}</h4>
          </div>
        ))}
      </div>
      <style jsx>{`
        .wrap {
          margin-top: 50px;
        }
        .container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
          grid-gap: 30px;
          justify-content: center;
        }
        img {
          display: block;
          margin: 0 auto;
          width: 100%;
          border-radius: 10px;
          transition: transform 300ms;
          cursor: pointer;
        }
        img:hover {
          transform: scale(1.1);
        }
        h4 {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
