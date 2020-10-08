import React, { useEffect } from "react";
// import './styles.css';
import Board from "./Board";
import { DndProvider } from "react-dnd";
// import TouchBackend from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import axios from "axios";
// import HtmlBackend from "react-dnd-html5-backend";
// ["applied", "wishlist", "interviewed", "offered", "rejected"];
const boards = [
  {
    // state: 0,
    state: "wishlist",
    color: "primary",
    title: "WishList",
  },
  {
    state: "applied",
    title: "Applied",
    color: "primary",
  },
  {
    // state: 1,
    state: "interviewed",
    color: "warning",
    title: "Interviewed",
  },
  {
    state: "offered",
    title: "Offered",
    color: "success",
  },
  {
    state: "rejected",
    title: "Rejected",
    color: "danger",
  },
];

// function is_touch_device() {
//   try {
//     document.createEvent("TouchEvent");
//     return true;
//   } catch (e) {
//     return false;
//   }
// }
export default function JobBoard() {
  //   let Backend = HTML5Backend;
  //   if (is_touch_device()) {
  //     Backend = TouchBackend;
  //   }

  const [cards, setCards] = React.useState([]);

  const getJobs = async () => {
    try {
      // let res = await axios.get(`/api/users/${authContext.user.id}/jobs`);
      let res = await axios.get(`/api/users/${1}/jobs`);
      // setJobs(res.data);
      // adding state key to a card
      const stateCards = res.data.map((c) => {
        return { ...c, state: c.status };
      });

      setCards(stateCards);
    } catch (error) {
      alert("Error getting jobs");
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  const setState = (id, state) => {
    const droppedCard = cards.find((rec) => rec.id === id);
    setCards([
      ...cards.filter((rec) => rec.id !== id),
      { ...droppedCard, state },
      // { ...droppedCard, status:state },
    ]);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App container">
        <div>
          <h1 className="title">Board</h1>
          {/* <div className="tile is-horizontal"> */}
          <div className="tile is-horizontal">
            {boards.map((board) => (
              <Board
                key={board.state}
                {...board}
                // cards={cards.filter((card) => card.state === board.state)}
                cards={cards.filter((card) => card.state === board.state)}
                afterDropHandler={setState}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
