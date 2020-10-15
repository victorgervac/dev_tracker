import React from "react"
import "./board.css";
import useBoard from "./useBoard"
import DraggableCard from "./DraggableCard";

export default (props) => {
  const { isActive, drop, collapsed, setCollapsed } = useBoard(props);
  console.log(props.cards);
  return (
    <div
      className="tile is-parent"
      ref={drop}
      style={{ opacity: isActive ? 0.5 : 1, backgroundColor: "#FAF9FF" }}
    >
      <div className="tile is-child">
        <article
          className={`panel is-${props.color} ${
            isActive ? "has-background-" + props.color : ""
          }`}
          style={styles.panel.base}
        >
          <div className="panel-heading level">{props.title}</div>

          <div style={styles.panel.content}>
            {props.cards.map((note) => (
              <DraggableCard key={note.id} {...note} />
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

const styles = {
  panel: {
    base: { height: "100%", background: "#eaeeee", backgroundColor: "#FAF9FF" },
    content: {
      height: "calc(80vh - 55px)",
      overflow: "auto",
      backgroundColor: "#FAF9FF",
    },
  },
};
