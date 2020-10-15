import { useDrag } from "react-dnd";
import axios from "axios";

const useDraggable = (cardId, userId) => {
  const [{ opacity }, drag] = useDrag({
    item: { type: "card", id: cardId },
    end(item, monitor) {
      const dropResult = monitor.getDropResult();
      if (dropResult && dropResult.afterDropHandler) {
        dropResult.afterDropHandler(item.id, dropResult.state);
        axios
          .put(`/api/users/${userId}/jobs/${cardId}`, {
            job: {
              status: dropResult.state,
            },
          })
          .then((res) => {
            // debugger;
          })
          .catch((err) => {
            // debugger;
          });
      }
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });
  return { opacity, drag };
};
export default useDraggable;