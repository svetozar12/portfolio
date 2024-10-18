import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center h-screen">
      <Image width={500} height={500} src="/404.png" alt="404-image" />
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl">
          <strong>It’s a 404 Error!</strong>
        </h1>
        <p className="text-sm xl:text-lg text-center">
          Don’t worry, no one even knows what “404” means.
          <br /> But don’t fret, everything is gonna be OK.
        </p>
        <p className="text-sm xl:text-lg">
          Just hit that{" "}
          <Link href="/" legacyBehavior>
            <a>back arrow</a>
          </Link>{" "}
          that’s somewhere up top?
        </p>
      </div>
    </div>
  );
};

export default NotFound;
