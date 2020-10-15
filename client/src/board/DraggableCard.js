import React from "react";
import useDraggableCard from "./useDraggable";
import Card from "./Card";

const DraggableCard = (props) => {
  const { drag, opacity } = useDraggableCard(props.id, 1);

  return (
    <div>
      <div ref={drag} style={{ cursor: "grab"}}>
        <Card {...props} opacity={opacity} />
      </div>
    </div>
  );
};



export default DraggableCard;