import React from "react";
import { useState } from "react";
import Overview from "../components/OverView";
import ProjectList from "../components/ProjectList/ProjectList";
import Modal from "../components/common/Modal";
import useIsMobile from "../hooks/useIsMobile";
import TypingEffect from "@/components/TypingEffect/TypingEffect";

const Home = () => {
  const [activeItem, setActiveItem] = useState<React.JSX.Element | null>(null);
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-wrap">
        {/*<ReactTyped*/}
        {/*    strings={['Developer', 'Designer', 'Creator', 'Innovator']}*/}
        {/*    typeSpeed={100}*/}
        {/*    backSpeed={50}*/}
        {/*    loop*/}
        {/*/>*/}
        {/*<TypingEffect />*/}
      <ProjectList
        onInteraction={(item) => {
          setActiveItem(item);
        }}
      />
      <Overview activeItem={activeItem} />
      <Modal
        open={!!activeItem && isMobile}
        onClose={() => setActiveItem(null)}
      >
        {activeItem || <div />}
      </Modal>
    </div>
  );
};

export default Home;
