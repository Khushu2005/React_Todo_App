import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todocontext } from "../components/Wrapper";


const Create = () => {
   const {register,handleSubmit,reset,formState:{ errors },} = useForm();

  const[todos,setTodos] = useContext(todocontext
  ) 
  const SubmitHandler = (data) => {
     console.log(data);
    data.isCompleted = false;
    data.id = nanoid();

  
    const copytodos = [...todos];
    copytodos.push(data);
    setTodos(copytodos);
        toast.success("Created!")
  reset()

  };

  return (
    <div className="  absolute mt-[3%] p-10   w-[40%] h-[80%] bg-slate-800 ml-[18px] mr-[10px] rounded-2xl">
      <h1 className=" font-bold text-[49px] pb-5 text-slate-100"> Add Task</h1>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <input
          className="p-2 w-[100%] rounded-[6px] text-slate-400 text-[16px] outline-none border-b-1  bg-slate-700 tracking-wider "
         {...register("title",{required:"Title can not be empty"})}

          type="text"
          placeholder="Add your Task..."
        />
        <small className="font-thin capitalize text-red-400 text-[.8rem] ">{errors?.title?.message}</small>

        <br /> <br />
        <button
          className="
  text-white 
  bg-emerald-500
  px-[11px] py-[6px] 
  rounded-[6px] 
  text-[18px] 
  shadow-[2px_2px_4px_black] 
  cursor-pointer 
  text-center 
  block 
  mt-4
 
"
        >
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
