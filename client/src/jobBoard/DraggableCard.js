import React from "react";

import useDraggableCard from "./useDraggable";
import Card from "./Card";

const DraggableCard = (props) => {
  // 1 is the user.id nee to pass instead of hard code it
  const { opacity, drag } = useDraggableCard(props.id, 1);

  // const navigate = () => {
  //   console.log("navigate here maybe?");
  // };
  return (
    <div>
      <div ref={drag} style={{ cursor: "grab" }}>
        <Card {...props} opacity={opacity} />
      </div>
      {/* <p onClick={navigate}>link here</p> */}
    </div>
  );
};

export default DraggableCard;
