import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import useIsMobile from "../../hooks/useIsMobile";
import GifRender from "../GifRender";

interface IProjectList {
  onInteraction: (item: React.JSX.Element | null) => void;
}

const ProjectList = ({ onInteraction }: IProjectList) => {
  const isMobile = useIsMobile();

  const projects: Array<{
    name: string;
    year: number;
    item: React.JSX.Element;
  }> = [
    {
      name: "ECOM GQL Backend",
      year: 2024,
      item: <GifRender title="ECommerce" gifPath="/gifs/e-com-backend.gif" />,
    },
  ];

  return (
    <>
      <div
        className={`flex items-center order-2 flex-grow xl:order-1 justify-center xl:justify-start duration-100 ${styles.container}`}
      >
        {projects.map(({ name, year, item }, index) => {
          const interactionProps = isMobile
            ? { onClick: () => onInteraction(item) }
            : {
                onMouseEnter: () => onInteraction(item),
                onMouseLeave: () => onInteraction(null),
              };

          return (
            <div
              {...interactionProps}
              className="h-12"
              key={name + year + index}
            >
              <div className="rounded-2xl flex justify-between items-center cursor-default w-full px-4 py-3 gap-8 hover:shadow-light hover:bg-gray-100 hover:scale-110 duration-500">
                <div className="text-gray-200">{name}</div>
                <div className={`${styles.year} text-gray-500`}>{year}</div>
              </div>
              <br></br>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectList;
