import { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "../components/Wrapper";


const Read = () => {
  const[todos,setTodos] = useContext(todocontext
  ) 
 

  const DeleteHandler = (id) => {
    const filtertodo = todos.filter((todo) => todo.id != id);
    setTodos(filtertodo);
    toast.error("Deleted!")

  };


  const rendertodos = todos.map((todo) => {
    return (
      <li className="flex justify-between m-1.5" key={todo.id}>
        {todo.title} . {"  "}
        <span className="
  text-white 
 bg-rose-500
  px-[18px] py-[px] 
  rounded-[5px] 
  text-[16px] 
  shadow-[2px_2px_2px_black] 
  cursor-pointer 
  text-center 
  border-none
  
 
"  onClick={() => DeleteHandler(todo.id)}>Delete</span>
      </li>
    );
  });

  return (
    <div className="ml-[42.5%] absolute bg-slate-800 mt-[3%]  w-[56%] h-[80%] p-10 rounded-2xl" >
      <h1 className="text-slate-100 text-[46px] font-bold  pb-5">Pending Task</h1>
      <ol className="text-[20px] leading-[40px] text-[bisque] overflow-auto max-h-100 scrollbar-none">{rendertodos}</ol>
    </div>
  );
};


export default Read;
