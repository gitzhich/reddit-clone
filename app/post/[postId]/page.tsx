"use client";

import { useMutation, useQuery } from "@apollo/client";
import React from "react";
// import { useSession } from 'next-auth/react'
import { GET_POST_BY_POST_ID } from "@/graphql/queries";
import { ADD_COMMENT } from "@/graphql/mutations";
import Post from "@/components/Post";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

type FormData = {
  comment: string;
};

function page({ params }: { params: { postId: number } }) {
  // const { data: session } = useSession()
  const session = true;
  const username: string = "username";
  const { data } = useQuery(GET_POST_BY_POST_ID, {
    variables: {
      post_id: params.postId,
    },
  });
  const postResult: Post = data?.post;

  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [
      GET_POST_BY_POST_ID,
      "post",
      // post_idどうやって渡す？
    ],
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // post comment here...
    console.log(data);

    const norification = toast.loading("Posting your comment...");

    const {
      data: { insertComment: newComment },
    } = await addComment({
      variables: {
        post_id: params.postId,
        username: "session?.user?.name",
        text: data.comment,
      },
    });

    setValue("comment", "");

    console.log("New comment added:", newComment);
    toast.success("Comment Successfully Posted!", {
      id: norification,
    });
  };

  console.log(postResult);

  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Post post={postResult} />

      <div className="-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5 pl-16">
        <p className="text-sm">
          Comment as <span className="text-red-500">{username}</span>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2"
        >
          <textarea
            {...register("comment")}
            disabled={!session}
            className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50"
            placeholder={
              session ? "What are your thoughts?" : "Please sign in to comment"
            }
          />

          <button
            type="submit"
            className="rounded-full bg-red-500 p-3 font-semibold text-white disabled:bg-gray-200"
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
