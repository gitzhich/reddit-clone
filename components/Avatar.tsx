import React from "react";
// import { useSession } from 'next-auth/react'
import Image from "next/image";

type Props = {
  seed?: string;
  large?: boolean;
};

function Avatar({ seed, large }: Props) {
  // const { data: session } = useSession()
  const session = true;
  const username: string = "username";

  return (
    <div
      className={`relative h-10 w-10 overflow-hidden rounded-full border-gray-300 bg-white ${
        large && "h-20 w-20"
      }`}
    >
      <img
        alt=""
        src={`https://api.dicebear.com/6.x/open-peeps/svg?seed=${
          seed || username || "placeholder"
        }`}
      />
    </div>
  );
}

export default Avatar;
