import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detail() {
  const router = useRouter();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const id = router.query.id;
    (async () => {
      const data = await (await fetch(`/api/movie/${id}`)).json();
      console.log(data);
      setMovie(data);
    })();
  }, []);
  return (
    <div className="container">
      <h1>{movie?.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        alt="poster"
      />
      <p>{movie?.overview}</p>
      <style jsx>{`
        .container {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
