import { useState } from "react";
import Overview from "../components/OverView";
import ProjectList from "../components/ProjectList/ProjectList";
import Modal from "../components/common/Modal";

export default function Home() {
  const [activeItem, setActiveItem] = useState<React.JSX.Element | null>(null);
  return (
    <div className={`bg-gray-50 flex flex-wrap max-w-full `}>
      <ProjectList onInteraction={(item) => setActiveItem(item)} />
      <Overview />

      {activeItem && (
        <Modal open={!!activeItem} onClose={() => setActiveItem(null)}>
          {activeItem}
        </Modal>
      )}
    </div>
  );
}
