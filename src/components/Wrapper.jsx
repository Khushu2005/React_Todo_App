import { createContext, useState } from "react";
export const todocontext = createContext(null);

const Wrapper = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Exercise", isCompleted: false },
  ]);

  return (
    <todocontext.Provider value={[ todos,setTodos]}>
      {props.children}
    </todocontext.Provider>
  );
};



export default Wrapper;
