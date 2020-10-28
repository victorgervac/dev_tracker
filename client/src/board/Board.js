import React from "react"
import "./board.css";
import {Button, Icon} from "semantic-ui-react"
import useBoard from "./useBoard"
import DraggableCard from "./DraggableCard";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default (props) => {
  const { isActive, drop, collapsed, setCollapsed } = useBoard(props);
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
          <TitleDiv>{props.title}</TitleDiv>
          <Link to={{
             pathname: "/addJob",
             state: {
               status: props.state 
            }
          }}>
            <Button as="submit" style={{width:"100%"}}><Icon name="add" size="large"/></Button>
          </Link>
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

const TitleDiv = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 20px
`

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
