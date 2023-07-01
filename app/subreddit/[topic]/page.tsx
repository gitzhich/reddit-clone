import Avatar from "@/components/Avatar";
import Feed from "@/components/Feed";
import PostBox from "@/components/PostBox";
import React from "react";

function page({ params }: { params: { topic: string } }) {
  return (
    <div className={`h-24 bg-red-400 p-8`}>
      <div className="-mx-8 mt-10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center space-x-4 pb-3">
          <div className="-mt-5">
            <Avatar seed={params.topic as string} large />
          </div>
          <div className="py-2">
            <h1 className="text-3xl font-semibold">
              Welcome to the r/{params.topic} subreddit
            </h1>
            <p className="test-sm text-gray-400">r/{params.topic}</p>
          </div>
        </div>
      </div>

      <div className="pd-10 mx-auto mt-5 max-w-5xl">
        <PostBox subreddit={params.topic as string} />
        <Feed topic={params.topic as string} />
      </div>
    </div>
  );
}

export default page;
