import React from "react";
import styles from "./style.module.css";
import GifRender from "../GifRender";
import ProjectItem from "./subcomponents/ProjectItem";

interface IProjectList {
  onInteraction: (item: React.JSX.Element | null) => void;
}

export type Project = {
  name: string;
  year: number;
  item: React.JSX.Element;
};

const ProjectList = ({ onInteraction }: IProjectList) => {
  const projects: Array<Project> = [
    {
      name: "ECOM GQL Backend",
      year: 2024,
      item: <GifRender title="ECommerce" gifPath="/gifs/e-com-backend.gif" />,
    },
  ];

  return (
    <div
      className={`flex items-center order-2 flex-grow xl:order-1 justify-center xl:justify-start duration-100 ${styles.container}`}
    >
      {projects.map((data, index) => (
        <ProjectItem
          key={data.name + data.year + index}
          project={data}
          onInteraction={onInteraction}
        />
      ))}
    </div>
  );
};

export default ProjectList;
