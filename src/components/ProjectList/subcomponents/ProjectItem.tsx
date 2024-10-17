import React from "react";
import useIsMobile from "../../../hooks/useIsMobile";
import { Project } from "../ProjectList";
import styles from "../style.module.css";

interface IProjectItem {
  onInteraction: (item: React.JSX.Element | null) => void;
  project: Project;
}

const ProjectItem = ({
  onInteraction,
  project: { item, name, year },
}: IProjectItem) => {
  const isMobile = useIsMobile();

  const interactionProps = isMobile
    ? { onClick: () => onInteraction(item) }
    : {
        onMouseEnter: () => onInteraction(item),
        onMouseLeave: () => onInteraction(null),
      };

  return (
    <div {...interactionProps} className="h-12">
      <div className="rounded-2xl flex justify-between items-center cursor-default w-full xl:px-4 p-3 gap-8 hover:shadow-light hover:bg-gray-100 hover:scale-110 duration-500">
        <div className="text-gray-200">{name}</div>
        <div className={`${styles.year} text-gray-500`}>{year}</div>
      </div>
      <br />
    </div>
  );
};

export default ProjectItem;
