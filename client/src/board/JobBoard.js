import React, {useState, useEffect, useContext} from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {Button} from "semantic-ui-react"
import JobCard from "../jobcomponents/JobCard";
import Board from './Board';
import axios from "axios";
import styled from "styled-components";
import {AuthContext} from "../providers/AuthProvider"


const boards = [
  { state: "wishlist",
    title: "Wishlist",
  },
  { state: "applied",
    title: "Applied",
  },
  { state: "interviewed",
    title: "Interviewed",
  },
  { state: "offered",
    title: "Offered",
  },
  { state: "rejected",
    title: "Rejected",
  },
]


const JobBoard = () => {
  const [cards, setCards] = useState([]);
  const authContext = useContext(AuthContext)
  const getJobs = async () => {
    try {
      let res = await axios.get(`/api/users/${authContext.user.id}/jobs`);
      console.log(res.data)
      const stateCards = res.data.map((c) => {
        return { ...c, state: c.status };
      });

      setCards(stateCards);
    } catch (error) {
      debugger;
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
    ]);
  };

  return(
    <DndProvider backend={HTML5Backend}>
      <Wrapper>
        {boards.map(board => (
          <Board
            key={board.state}
            {...board}
            afterDropHandler={setState}
            cards={cards.filter((card) => card.state === board.state)}
          />
        ))}
      </Wrapper>
    </DndProvider>
  )
}

const Wrapper = styled.div`
  display: flex;
`



export default JobBoard;