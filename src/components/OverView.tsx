import React from "react";
import Links from "./Links";
import styles from "./style.module.css";
import useIsMobile from "../hooks/useIsMobile";
import TypingEffect from "@/components/TypingEffect/TypingEffect";

interface IOverview {
  activeItem: JSX.Element | null;
}

const Overview: React.FC<IOverview> = ({ activeItem }) => {
  const isMobile = useIsMobile();
  const showActiveItem = !isMobile && activeItem;

  const name = (
    <h1 className="font-bold text-3xl lg:text-4xl">Svetozar Gospodinov,</h1>
  );

  const subTitle = (
    <span className="text-gray-200 text-xl lg:text-2xl">
      developer specializing in
    </span>
  );

  return (
    <>
      <div
        className={`${
          styles.container
        } absolute -z-10 flex justify-center flex-col items-start order-1 flex-grow transition-all ease-in-out
      ${
        showActiveItem ? "sticky max-w-list top-0 z-0 opacity-100" : "opacity-0"
      }`}
      >
        {activeItem}
      </div>

      <div
        className={`${
          styles.container
        } relative flex justify-center flex-col items-start order-1 flex-grow xl:sticky xl:top-0 xl:order-2 transition-all
      ${showActiveItem ? "max-w-0 opacity-0" : "opacity-100"}`}
      >
        {name}
        {!isMobile && <br />}
        <div className="flex xl:justify-center xl:items-center xl:gap-5 flex-col xl:flex-row">
          {subTitle}
          <TypingEffect />
        </div>
        <Links />
      </div>
    </>
  );
};

export default Overview;
