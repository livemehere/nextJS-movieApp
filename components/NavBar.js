import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  // console.log(router.pathname);
  return (
    <nav>
      <h2>KONG MOVIE</h2>
      <Link href="/">
        <a className={router.pathname == "/" ? "active" : ""}>Home</a>
      </Link>

      <Link href="/about">
        <a className={router.pathname == "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        h2 {
          margin: 0px 10px 0px 0px;
          color: white;
          display: grid;
          justify-content: center;
          align-content: center;
          cursor: pointer;
        }
        nav {
          display: flex;
          padding: 20px;
          background-color: #333;
          top: 0;
        }
        a {
          color: white;
          padding: 10px;
          background-color: #444;
          border-radius: 5px;
          margin: 0 5px;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}
