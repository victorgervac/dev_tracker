import React, {useContext} from "react";
import useDraggableCard from "./useDraggable";
import Card from "./Card";
import {AuthContext} from "../providers/AuthProvider"

const DraggableCard = (props) => {
  const authContext = useContext(AuthContext)
  const { drag, opacity } = useDraggableCard(props.id, authContext.user.id);

  return (
    <div>
      <div ref={drag} style={{ cursor: "grab"}}>
        <Card {...props} opacity={opacity} />
      </div>
    </div>
  );
};



export default DraggableCard;