import React from "react";
import Link from "next/Link";
import { useRouter } from "next/router";
// import Navbar from "./components/Navbar";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/product");
  };
  return (
    <>
      {/* <Navbar /> */}
      <center>
        <h1>HOME PAGE</h1>
        <h4>
          <span>
            <Link href="/about">
              <a>About</a>
            </Link>{" "}
            <Link href="/blog" replace>
              <a>blog</a>
            </Link>{" "}
          </span>
        </h4>
        <button onClick={handleClick}>Place Order</button>
      </center>
    </>
  );
};

export default Home;

// replace ---> it will navigate to clear the history and and clicking on back of brower will navigate to root page.
