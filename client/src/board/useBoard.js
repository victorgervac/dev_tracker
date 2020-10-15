import { useDrop } from "react-dnd";
import { useState } from "react";

const useBoard = ({ state, afterDropHandler }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "card",
    drop: () => ({
      name: "Board",
      state: state,
      afterDropHandler: afterDropHandler,
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;

  return { isActive, drop, collapsed, setCollapsed };
};

export default useBoard;