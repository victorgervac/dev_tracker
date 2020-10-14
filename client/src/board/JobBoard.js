import React, {useState, useEffect} from "react";
import JobCard from "../jobcomponents/JobCard";
// import Board from './Board';
import axios from "axios";

const boards = [
  { state: "applied",
    title: "Applied",
  },
  { state: "offered",
    title: "Offered",
  }
]

const JobBoard = () => {
  const [cards, setCards] = useState([]);
  
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
  //get all cards
  //add state key to card
  //setCards Cards
 
  const setState = (id, state) => {
    const droppedCard = cards.find((rec) => rec.id === id);
    setCards([
      ...cards.filter((rec) => rec.id !== id),
      { ...droppedCard, state },
      // { ...droppedCard, status:state },
    ]);
  };

  // return(
  //   <div>
  //     {boards.map(board => (
  //       <Board
  //         key={board.state}
  //         {...board}
  //         afterDropHandler={setState}
  //         // cards={cards.filter((card) => card.state === board.state)}
  //         cards={cards.filter((card) => card.state === board.state)}
  //       />
  //     ))}
  //     {/* <JobCard /> */}
  //   </div>
  // )
}

export default JobBoard;