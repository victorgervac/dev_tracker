import { useState } from "react";

export const useFormInput = (initialValue, name) => {
  const [x, setX] = useState(initialValue);
  return {
    required: "required",
    placeholder: `Enter ${name}`,
    onChange: (e) => setX(e.target.value),
    value: x,
  };
};

//took out label, may manually add to separate components if need
