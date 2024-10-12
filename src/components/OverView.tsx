import React from "react";
import Links from "./Links";
import styles from "./style.module.css";

const Overview = () => {
  return (
    <div
      className={`relative flex justify-center flex-col items-start order-1 flex-grow xl:sticky xl:top-0 xl:order-2 ${styles.container}`}
    >
      <h1 className="font-bold text-2xl">
        Svetozar Gospodinov,<br></br> freelance developer specializing in{" "}
        <span
          style={{
            backgroundImage: "linear-gradient(214deg, #ff285c, #b010fb)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {" "}
          GraphQL
        </span>
        .
      </h1>
      <Links />
    </div>
  );
};

export default Overview;
