import { useRouter } from "next/router";

const Todo = (props) => {
  const router = useRouter();
  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`/api/delete?id=${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        router.reload();
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="flex m-2 p-2  self-center bg-zinc-400 rounded-lg">
      <div className=" h-9 w-1/4 bg-white border border-red-500 rounded-lg p-2">{props.subject}</div>
      <div className=" h-9 w-2/3 bg-white border border-red-500 rounded-lg p-2">{props.description}</div>
      <button onClick={()=>deleteHandler(props.id)} className="w-1/12 cursor-pointer bg-red-400 hover:bg-red-900 active:bg-stone-600 text-white h-9 text-lg font-mono font-semibold border rounded-lg">Delete</button>
    </div>
  )
}

export default Todo;
