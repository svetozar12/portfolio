import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

interface IProjectList {
  onInteraction: (item: React.JSX.Element) => void;
}

const ProjectList = ({ onInteraction }: IProjectList) => {
  const [projects, setProjects] = useState<
    Array<{ name: string; year: number; item: React.JSX.Element }>
  >([]);

  useEffect(() => {
    const temp = [];
    for (let index = 0; index < 20; index++) {
      temp.push({ name: "ECommerce", year: 2024, item: <>hello + {index}</> });
    }
    setProjects(temp);
  }, []);

  return (
    <div
      className={`flex items-center order-2 flex-grow xl:order-1 justify-center xl:justify-start ${styles.container}`}
    >
      {projects.map(({ name, year, item }, index) => (
        <div
          onClick={() => onInteraction(item)}
          className="h-12"
          key={name + year + index}
        >
          <div className="rounded-2xl flex justify-between items-center cursor-default w-full px-4 py-3 gap-8 hover:shadow-2xl hover:bg-white hover:scale-110 duration-100">
            <div>{name}</div> <div className={styles.year}>{year}</div>
          </div>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
