import { useState } from "react";
import Overview from "../components/OverView";
import ProjectList from "../components/ProjectList/ProjectList";
import Modal from "../components/common/Modal";
import useIsMobile from "../hooks/useIsMobile";

export default function Home() {
  const [activeItem, setActiveItem] = useState<React.JSX.Element | null>(null);
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-wrap">
      <ProjectList
        onInteraction={(item) => {
          setActiveItem(item);
          console.log(item);
        }}
      />
      <Overview activeItem={activeItem} />

      {activeItem && isMobile && (
        <Modal open={!!activeItem} onClose={() => setActiveItem(null)}>
          {activeItem}
        </Modal>
      )}
    </div>
  );
}
