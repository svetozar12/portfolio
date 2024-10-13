import React from "react";
import Links from "./Links";
import styles from "./style.module.css";
import useIsMobile from "../hooks/useIsMobile";

interface IOverview {
  activeItem: JSX.Element | null;
}

const Overview: React.FC<IOverview> = ({ activeItem }) => {
  const isMobile = useIsMobile();
  const showActiveItem = !isMobile && activeItem;

  return (
    <>
      {/* Active Item Section */}
      <div
        className={`absolute -z-10 flex justify-center flex-col items-start order-1 flex-grow transition-all ease-in-out ${
          showActiveItem
            ? "sticky max-w-list top-0 z-0 opacity-100"
            : "opacity-0"
        } ${styles.container}`}
      >
        {activeItem}
      </div>

      {/* Overview Info Section */}
      <div
        className={`relative flex justify-center flex-col items-start order-1 flex-grow xl:sticky xl:top-0 xl:order-2 transition-all  ${
          showActiveItem ? "max-w-0 opacity-0" : "opacity-100"
        } ${styles.container}`}
      >
        <h1 className="font-bold text-4xl">Svetozar Gospodinov,</h1>
        <br />
        <div>
          <span className="text-gray-200 text-3xl">
            freelance developer specializing in
          </span>
          <span
            className="text-4xl font-bold"
            style={{
              backgroundImage: "linear-gradient(214deg, #ff285c, #b010fb)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {" "}
            GraphQL.
          </span>
        </div>
        <Links />
      </div>
    </>
  );
};

export default Overview;
