import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import PostBox from "@/components/PostBox";
import Feed from "@/components/Feed";

const Home: NextPage = () => {
  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Head>
        <title>Reddit 2.0 Clone</title>
      </Head>

      {/* Post box */}
      <PostBox />

      {/* Feed */}
      <div className="flex">
        <Feed />
      </div>
    </div>
  );
};

export default Home;
