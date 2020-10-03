import React, { useEffect, useState } from "react";
import axios from "axios";

const Items = () => {
  const [items, setItems] = useState([]);

 
  useEffect(() => {
    console.log("in useEFect");
    
    axios
      .get("/api/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        alert("error in retrieving things");
      });
  }, []);
  return (
    <>
      <div>
        {items.map((t) => (
          <p key={t.id}>{t.name}</p>
        ))}
      </div>
    </>
  );
};

export default Items;