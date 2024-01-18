"use client"
import React,{useRef} from "react";

const InputForm = () => {
    const indexRef = useRef();
    const descriptionRef = useRef();
    const submitHandler = async(e)=> {
        const indexValue = indexRef.current.value;
        const descriptionValue = descriptionRef.current.value;
        const response = await fetch("/api/post",{
            method: 'POST',
            body: JSON.stringify({
                subject: indexValue,
                description: descriptionValue,
            }),
            headers:{"Content-Type":"application/json"},
        });
       // const data = await response.json();
        console.log("data", response);
    }
  return (
    <div className='flex w-5/6 justify-self-center'>
      <form onSubmit={submitHandler} className="flex-1 m-2 p-2  self-center bg-zinc-400 rounded-lg">
        <input
          type="text"
          className="w-1/4 h-9 border border-red-500 rounded-lg basis-2/5 p-2"
          placeholder="Subject"
          ref={indexRef}
        />
        <input
          type="text"
          className="w-2/3 h-9 border border-red-500 rounded-lg basis-2/5 p-2"
          placeholder="Description"
          ref={descriptionRef}
        />
        <button className="basis-1/12 cursor-pointer bg-red-400 hover:bg-red-900 active:bg-stone-600 text-white w-1/12 h-9 text-lg font-mono font-semibold border rounded-lg">
          Add ToDo
        </button>
      </form>
    </div>
  );
};

export default InputForm;
