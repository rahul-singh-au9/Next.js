import React from "react";
import Link from "next/Link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/product");
  };
  return (
    <center>
      <h1>HOME PAGE</h1>
      <Link href="/about">
        <a>About</a>
      </Link>{" "}
      <br />
      <Link href="/blog" replace>
        <a>blog</a>
      </Link>{" "}
      <br />
      <button onClick={handleClick}>Place Order</button>
    </center>
  );
};

export default Home;

// replace ---> it will navigate to clear the history and and clicking on back of brower will navigate to root page.
